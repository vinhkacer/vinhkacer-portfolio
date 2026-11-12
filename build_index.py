#!/usr/bin/env python3
"""
build_index.py — Đồng bộ và tạo lại file index.json chuẩn xác từ các file content markdown / danh sách video.
Đảm bảo 100% tương thích với Decap CMS, Order Studio (admin/sort.html) và Portfolio frontend.
"""

import os
import glob
import json
import re

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(ROOT_DIR, "content", "projects")
CONTENT_INDEX_JSON = os.path.join(CONTENT_DIR, "index.json")
ROOT_INDEX_JSON = os.path.join(ROOT_DIR, "index.json")
PROJECTS_DATA_JSON = os.path.join(ROOT_DIR, "projects_data.json")
PORTFOLIO_DATA_JSON = os.path.join(ROOT_DIR, "vinh_kacer_portfolio_data.json")
SCRIPT_JS = os.path.join(ROOT_DIR, "script.js")


def parse_markdown_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()

    parts = text.split("---")
    fm = parts[1] if len(parts) >= 3 else ""

    # Title
    m = re.search(r'^title:\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    title = m.group(1).strip() if m else os.path.splitext(os.path.basename(file_path))[0]

    # Category
    m = re.search(r'^category:\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    raw_cat = m.group(1).strip() if m else "Commercial"

    # Standardize category
    rc_lower = raw_cat.lower()
    if "mv" in rc_lower or "music" in rc_lower or "cinematic" in rc_lower:
        cat_val = "MV"
    elif "thung" in rc_lower or "long" in rc_lower:
        cat_val = "Thủng Long"
    else:
        cat_val = "Commercial"

    # Order
    m = re.search(r'^order:\s*(\d+)', fm, re.MULTILINE)
    order = int(m.group(1)) if m else 999

    # Featured
    m = re.search(r'^featured:\s*(true|false)', fm, re.MULTILINE | re.IGNORECASE)
    featured = (m.group(1).lower() == "true") if m else False

    # Video
    m = re.search(r'^video:\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    video = m.group(1).strip() if m else ""

    # Thumbnail
    m = re.search(r'^thumbnail:\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    thumbnail = m.group(1).strip() if m else ""

    # Date
    m = re.search(r'^date:\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    date = m.group(1).strip() if m else ""

    # Roles
    roles = []
    roles_block = re.search(r'^roles:\s*\n((?:\s*-\s*[^\r\n]+\n?)+)', fm, re.MULTILINE)
    if roles_block:
        roles = [re.sub(r'^\s*-\s*', '', line).strip() for line in roles_block.group(1).splitlines() if line.strip()]

    # YouTube URL
    m = re.search(r'^(?:youtube_url|url):\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    youtube_url = m.group(1).strip() if m else ""

    # TikTok URL
    m = re.search(r'^tiktok_url:\s*["\']?(.*?)["\']?\s*$', fm, re.MULTILINE)
    tiktok_url = m.group(1).strip() if m else ""

    # Description
    m = re.search(r'^description:\s*(?:\||>)?\s*\n?([^\n\r]+)', fm, re.MULTILINE)
    description = m.group(1).strip() if m else ""

    return {
        "title": title,
        "category": cat_val,
        "rawCategory": cat_val,
        "order": order,
        "featured": featured,
        "video": video,
        "thumbnail": thumbnail,
        "date": date,
        "roles": roles,
        "description": description,
        "youtube_url": youtube_url,
        "tiktok_url": tiktok_url
    }


def build_index_data():
    existing_data = {}
    if os.path.exists(CONTENT_INDEX_JSON):
        try:
            with open(CONTENT_INDEX_JSON, "r", encoding="utf-8") as f:
                existing_data = json.load(f)
        except Exception as e:
            print(f"[Warning] Không thể nạp file index.json cũ: {e}")

    existing_by_fn = {p.get("filename"): p for p in existing_data.get("projects", [])}

    md_files = sorted(glob.glob(os.path.join(CONTENT_DIR, "*.md")))
    projects = []
    files_list = []

    for md_path in md_files:
        fn = os.path.basename(md_path)
        files_list.append(fn)
        parsed = parse_markdown_file(md_path)

        existing_p = existing_by_fn.get(fn, {})

        # ID preservation
        p_id = existing_p.get("id")
        if not p_id:
            if parsed["video"]:
                p_id = os.path.basename(parsed["video"])
            else:
                p_id = fn.replace(".md", ".mp4")

        # Roles
        roles = parsed["roles"]
        if not roles and existing_p.get("roles"):
            roles = existing_p.get("roles")
        role_str = existing_p.get("role") or (" • ".join(roles) if roles else ("VFX Artist" if "gill" in fn else "Editor • VFX"))
        if not roles and role_str:
            roles = [r.strip() for r in role_str.split("•") if r.strip()]

        # Thumbnail fallback
        thumb = parsed["thumbnail"] or existing_p.get("thumbnail", "")

        # Video fallback
        vid = parsed["video"] or existing_p.get("video", "")

        # YouTube URL fallback
        yt_url = parsed.get("youtube_url") or existing_p.get("youtube_url") or existing_p.get("url", "")

        # TikTok URL fallback
        tt_url = parsed.get("tiktok_url") or existing_p.get("tiktok_url", "")

        item = {
            "id": p_id,
            "filename": fn,
            "title": parsed["title"],
            "category": parsed["category"],
            "rawCategory": parsed["rawCategory"],
            "order": parsed["order"],
            "featured": parsed["featured"],
            "role": role_str,
            "roles": roles,
            "thumbnail": thumb,
            "video": vid,
            "date": parsed["date"] or existing_p.get("date", "")
        }
        if yt_url:
            item["youtube_url"] = yt_url
            item["url"] = yt_url
        if tt_url:
            item["tiktok_url"] = tt_url
            if not item.get("url"):
                item["url"] = tt_url
        projects.append(item)

    # Sort projects: Order ascending, then title A-Z
    projects.sort(key=lambda x: (x["order"], x["title"]))

    return {
        "files": files_list,
        "projects": projects
    }


def sync_projects_data(index_data):
    """Đảm bảo projects_data.json chứa đầy đủ 4 MV cũ + 2 MV mới của LEZII và các video Thủng Long, Freelance."""
    if not os.path.exists(PROJECTS_DATA_JSON):
        return

    with open(PROJECTS_DATA_JSON, "r", encoding="utf-8") as f:
        p_data = json.load(f)

    cinematic = p_data.get("cinematic", [])
    has_gill = any("gill" in (p.get("id", "") + p.get("filename", "")).lower() for p in cinematic)

    if not has_gill:
        gill_item = {
            "id": "gill-ngua-phi.mp4",
            "title": "GILL – NGỰA PHI (Official MV)",
            "category": "cinematic",
            "aspect": "16:9",
            "order": 4,
            "featured": False,
            "role": "VFX Artist",
            "badge": "OFFICIAL MV",
            "thumbnail": "thumbnails/mv/gill_ngua_phi.jpg",
            "video_src": "videos/mv/gill-ngua-phi.mp4",
            "has_breakdown": False,
            "breakdown_src": "",
            "breakdown_thumb": "",
            "url": "",
            "platform": "Music Video",
            "description": "Official Music Video của nghệ sĩ Gill. Hiệu ứng kỹ xảo hình ảnh VFX, nhịp cắt dựng năng động và chuyển động camera điện ảnh.",
            "filename": "gill-ngua-phi.mp4",
            "breakdowns": []
        }
        cinematic.append(gill_item)

    # Check and append LEZII - Trốn Tìm
    has_tron_tim = any("tron-tim" in (p.get("id", "") + p.get("filename", "")).lower() for p in cinematic)
    if not has_tron_tim:
        cinematic.append({
            "id": "lezii-tron-tim.mp4",
            "title": "LEZII - Trốn Tìm (Official MV)",
            "category": "cinematic",
            "aspect": "16:9",
            "order": 5,
            "featured": False,
            "role": "VFX",
            "badge": "OFFICIAL MV",
            "thumbnail": "thumbnails/mv/lezii_tron_tim.jpg",
            "video_src": "videos/mv/lezii-tron-tim.mp4",
            "has_breakdown": False,
            "breakdown_src": "",
            "breakdown_thumb": "",
            "youtube_url": "https://www.youtube.com/watch?v=Lct0U67OOk4",
            "url": "https://www.youtube.com/watch?v=Lct0U67OOk4",
            "platform": "Music Video",
            "description": "Official Music Video của nghệ sĩ LEZII. Đảm nhiệm vai trò VFX.",
            "filename": "lezii-tron-tim.mp4",
            "breakdowns": []
        })

    # Check and append LEZII - Silent Treatment
    has_silent = any("silent" in (p.get("id", "") + p.get("filename", "")).lower() for p in cinematic)
    if not has_silent:
        cinematic.append({
            "id": "lezii-silent-treatment.mp4",
            "title": "LEZII - Silent Treatment (Official MV)",
            "category": "cinematic",
            "aspect": "16:9",
            "order": 6,
            "featured": False,
            "role": "VFX",
            "badge": "OFFICIAL MV",
            "thumbnail": "thumbnails/mv/lezii_silent_treatment.jpg",
            "video_src": "videos/mv/lezii-silent-treatment.mp4",
            "has_breakdown": False,
            "breakdown_src": "",
            "breakdown_thumb": "",
            "youtube_url": "https://www.youtube.com/watch?v=bB6hdeM6n7A",
            "url": "https://www.youtube.com/watch?v=bB6hdeM6n7A",
            "platform": "Music Video",
            "description": "Official Music Video của nghệ sĩ LEZII. Đảm nhiệm vai trò VFX.",
            "filename": "lezii-silent-treatment.mp4",
            "breakdowns": []
        })

    p_data["cinematic"] = cinematic

    # Check and append Thủng Long: Phòng Đẹp Thì Đương Nhiên Phải Thuộc Về Người Đẹp
    thunglong = p_data.get("thunglong", [])
    has_phong_dep = any("phong-dep" in (p.get("id", "") + p.get("filename", "")).lower() or "7529132272008695057" in str(p.get("id", "")) for p in thunglong)
    tiktok_url_phong_dep = "https://www.tiktok.com/@thunglongfamily/video/7529132272008695057"
    if not has_phong_dep:
        thunglong.append({
            "id": "7529132272008695057",
            "title": "Phòng Đẹp Thì Đương Nhiên Phải Thuộc Về Người Đẹp",
            "category": "thunglong",
            "aspect": "9:16",
            "order": 9,
            "role": "Tiền kì • Dựng chính • VFX",
            "badge": "🔥 Viral Content / Triệu Views",
            "thumbnail": "thumbnails/phong-dep-thi-duong-nhien-phai-thuoc-ve-nguoi-dep.jpg",
            "video_src": "videos/thunglong/phong-dep-thi-duong-nhien-phai-thuoc-ve-nguoi-dep.mp4",
            "url": tiktok_url_phong_dep,
            "tiktok_url": tiktok_url_phong_dep,
            "platform": "TikTok",
            "filename": "phong-dep-thi-duong-nhien-phai-thuoc-ve-nguoi-dep.mp4"
        })
    else:
        for p in thunglong:
            if "phong-dep" in (p.get("id", "") + p.get("filename", "")).lower() or "7529132272008695057" in str(p.get("id", "")):
                p["url"] = tiktok_url_phong_dep
                p["tiktok_url"] = tiktok_url_phong_dep
    p_data["thunglong"] = thunglong

    with open(PROJECTS_DATA_JSON, "w", encoding="utf-8") as f:
        json.dump(p_data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"✓ Đã đồng bộ {PROJECTS_DATA_JSON} thành công.")


def sync_portfolio_data():
    """Đảm bảo vinh_kacer_portfolio_data.json chứa Gill - Ngựa Phi và 2 MV LEZII trong danh mục music_videos."""
    if not os.path.exists(PORTFOLIO_DATA_JSON):
        return

    with open(PORTFOLIO_DATA_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    mvs = data.get("portfolio_projects", {}).get("music_videos", [])
    has_gill = any("gill" in p.get("id", "").lower() for p in mvs)

    if not has_gill:
        mvs.append({
            "id": "gill-ngua-phi",
            "title": "GILL – NGỰA PHI (Official MV)",
            "role": "VFX Artist",
            "url": "videos/mv/gill-ngua-phi.mp4"
        })

    has_tron_tim = any("tron-tim" in p.get("id", "").lower() for p in mvs)
    if not has_tron_tim:
        mvs.append({
            "id": "lezii-tron-tim",
            "title": "LEZII - Trốn Tìm (Official MV)",
            "role": "VFX",
            "url": "videos/mv/lezii-tron-tim.mp4",
            "youtube_url": "https://www.youtube.com/watch?v=Lct0U67OOk4"
        })

    has_silent = any("silent" in p.get("id", "").lower() for p in mvs)
    if not has_silent:
        mvs.append({
            "id": "lezii-silent-treatment",
            "title": "LEZII - Silent Treatment (Official MV)",
            "role": "VFX",
            "url": "videos/mv/lezii-silent-treatment.mp4",
            "youtube_url": "https://www.youtube.com/watch?v=bB6hdeM6n7A"
        })

    data["portfolio_projects"]["music_videos"] = mvs

    # Check and append Thủng Long: Phòng Đẹp Thì Đương Nhiên Phải Thuộc Về Người Đẹp
    tl = data.get("portfolio_projects", {}).get("thung_long_family", [])
    has_phong_dep_tl = any("phong-dep" in p.get("id", "").lower() or "7529132272008695057" in str(p.get("id", "")) for p in tl)
    tiktok_url_phong_dep = "https://www.tiktok.com/@thunglongfamily/video/7529132272008695057"
    if not has_phong_dep_tl:
        tl.append({
            "id": "7529132272008695057",
            "title": "Phòng Đẹp Thì Đương Nhiên Phải Thuộc Về Người Đẹp",
            "platform": "TikTok",
            "url": tiktok_url_phong_dep
        })
    else:
        for p in tl:
            if "phong-dep" in p.get("id", "").lower() or "7529132272008695057" in str(p.get("id", "")):
                p["url"] = tiktok_url_phong_dep
    data["portfolio_projects"]["thung_long_family"] = tl

    with open(PORTFOLIO_DATA_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"✓ Đã đồng bộ {PORTFOLIO_DATA_JSON} thành công.")


def sync_script_js():
    """Cập nhật biến PORTFOLIO_DATA trong script.js mà không làm thay đổi các hàm hiệu ứng."""
    if not os.path.exists(SCRIPT_JS) or not os.path.exists(PROJECTS_DATA_JSON):
        return

    with open(PROJECTS_DATA_JSON, "r", encoding="utf-8") as f:
        projects_data = json.load(f)

    with open(SCRIPT_JS, "r", encoding="utf-8") as f:
        content = f.read()

    json_compact = json.dumps(projects_data, separators=(",", ":"), ensure_ascii=False)

    # Thay thế đối tượng PORTFOLIO_DATA ở đầu file
    new_content = re.sub(
        r'let PORTFOLIO_DATA\s*=\s*\{.*?\};',
        f'let PORTFOLIO_DATA = {json_compact};',
        content,
        count=1
    )

    if new_content != content:
        with open(SCRIPT_JS, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✓ Đã đồng bộ PORTFOLIO_DATA trong {SCRIPT_JS}.")


def main():
    print("=========================================================")
    print("VINH KACER PORTFOLIO — BUILD & SYNC DATA INDEX")
    print("=========================================================")

    # 1. Quét và tạo index.json
    index_data = build_index_data()
    projects = index_data["projects"]

    # Ghi file content/projects/index.json
    with open(CONTENT_INDEX_JSON, "w", encoding="utf-8") as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"✓ Đã tạo {CONTENT_INDEX_JSON} ({len(projects)} dự án).")

    # Ghi file index.json tại thư mục gốc (root) để tương thích mọi đường dẫn
    with open(ROOT_INDEX_JSON, "w", encoding="utf-8") as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"✓ Đã tạo {ROOT_INDEX_JSON} ({len(projects)} dự án).")

    # 2. Đồng bộ các file cấu hình khác
    sync_projects_data(index_data)
    sync_portfolio_data()
    sync_script_js()

    # 3. Thống kê danh mục
    mv_count = sum(1 for p in projects if p["category"] == "MV")
    tl_count = sum(1 for p in projects if p["category"] == "Thủng Long")
    cm_count = sum(1 for p in projects if p["category"] == "Commercial")

    print("\n---------------------------------------------------------")
    print(f"TỔNG CỘNG: {len(projects)} VIDEO ĐÃ ĐƯỢC ĐỒNG BỘ")
    print(f"  • Music Video (MV)     : {mv_count} video")
    print(f"  • Thủng Long Family    : {tl_count} video")
    print(f"  • Freelance/Commercial : {cm_count} video")
    print("---------------------------------------------------------")
    print("✅ Hoàn tất! Trang Order Studio và Portfolio đã sẵn sàng.")


if __name__ == "__main__":
    main()
