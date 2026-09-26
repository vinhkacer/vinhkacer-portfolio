#!/usr/bin/env node
/**
 * Script ghi trực tiếp trường 'order' mới (1, 2, 3...) vào phần Frontmatter (YAML)
 * của từng file markdown tương ứng trong thư mục content/projects/
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const projDir = path.join(rootDir, 'content', 'projects');
const indexPath = path.join(projDir, 'index.json');

if (!fs.existsSync(indexPath)) {
  console.error('Không tìm thấy file:', indexPath);
  process.exit(1);
}

const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const projects = indexData.projects || [];

console.log(`Bắt đầu cập nhật order cho ${projects.length} dự án...`);

let updatedCount = 0;
let skippedCount = 0;

projects.forEach((proj, idx) => {
  const filename = proj.filename;
  const order = proj.order !== undefined && proj.order !== null ? proj.order : (idx + 1);

  if (!filename) {
    console.warn(`[Bỏ qua] Dự án không có filename: ${proj.title}`);
    skippedCount++;
    return;
  }

  const filePath = path.join(projDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`[Không tìm thấy file] ${filePath}`);
    skippedCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Verify it is actual markdown, not HTML
  if (!content.includes('---') || content.includes('<!DOCTYPE html>')) {
    console.warn(`[File không hợp lệ] ${filename}`);
    skippedCount++;
    return;
  }

  if (/^order:\s*\d+/m.test(content)) {
    content = content.replace(/^order:\s*\d+/m, `order: ${order}`);
  } else {
    content = content.replace(/^---\r?\n/, `---\norder: ${order}\n`);
  }

  const rawCat = proj.rawCategory || proj.category;
  if (rawCat) {
    let catVal = 'Commercial';
    const rcLower = rawCat.toLowerCase();
    if (rcLower.includes('mv') || rcLower.includes('music') || rcLower.includes('cinematic')) {
      catVal = 'MV';
    } else if (rcLower.includes('thung') || rcLower.includes('long')) {
      catVal = 'Thủng Long';
    }

    if (/^category:\s*.+/m.test(content)) {
      content = content.replace(/^category:\s*.+/m, `category: "${catVal}"`);
    } else {
      content = content.replace(/^---\r?\n/, `---\ncategory: "${catVal}"\n`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  updatedCount++;
});

// Update index.json
fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2), 'utf8');

console.log(`✅ Hoàn tất! Đã cập nhật ${updatedCount} file markdown (Bỏ qua: ${skippedCount}).`);
