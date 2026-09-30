#!/usr/bin/env python3
import json

with open('projects_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

json_str = json.dumps(data, ensure_ascii=False)

template = """// =========================================================
// VINH KACER PORTFOLIO — INTERACTIVE ENGINE (script.js)
// =========================================================

// Embedded Complete Dataset (Strictly matching real folders)
const PORTFOLIO_DATA = __DATA_PLACEHOLDER__;

let currentTab = 'all';
let searchQuery = '';

// Play subtle synthesized audio tone via Web Audio API
function playBeep(freq = 880, duration = 0.08) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

// Toast Notification
function showToast(msg) {
  playBeep(920, 0.1);
  const toast = document.getElementById('toastNotification');
  const text = document.getElementById('toastMessage');
  if (!toast || !text) return;
  text.textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3000);
}

// Copy Email Function
function copyEmail() {
  const email = 'bkchoc230801@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('✓ Đã sao chép email: ' + email);
    const emailText = document.getElementById('copyEmailText');
    if (emailText) {
      const orig = emailText.textContent;
      emailText.textContent = 'ĐÃ SAO CHÉP!';
      setTimeout(() => { emailText.textContent = orig; }, 2000);
    }
  }).catch(() => {
    showToast('bkchoc230801@gmail.com');
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }
}

// Update Tab Button Styles & Badges
function updateTabUI(tabKey) {
  const tabs = [
    { key: 'all', btn: document.getElementById('tabBtnAll') },
    { key: 'cinematic', btn: document.getElementById('tabBtnCinematic') },
    { key: 'thunglong', btn: document.getElementById('tabBtnThungLong') },
    { key: 'freelance', btn: document.getElementById('tabBtnFreelance') }
  ];

  tabs.forEach(t => {
    if (!t.btn) return;
    if (t.key === tabKey) {
      t.btn.className = 'tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-neon-cyan text-obsidian-950 shadow-neon-glow';
    } else {
      t.btn.className = 'tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10';
    }
  });

  // Update Banner Description
  const bannerText = document.getElementById('tabBannerText');
  if (bannerText) {
    if (tabKey === 'all') {
      bannerText.textContent = 'HIỂN THỊ TẤT CẢ DỰ ÁN • MUSIC VIDEOS 16:9, VIRAL SERIES 9:16 & COMMERCIAL';
    } else if (tabKey === 'cinematic') {
      bannerText.textContent = 'THƯ MỤC: videos/mv/ • TỈ LỆ 16:9 CINEMATIC • TÍCH HỢP NÚT BÓC TÁCH KỸ XẢO VFX BREAKDOWN (9:16)';
    } else if (tabKey === 'thunglong') {
      bannerText.textContent = 'THƯ MỤC: videos/thunglong/ • TỈ LỆ DỌC 9:16 (TIKTOK / REELS) • BỐ CỤC LƯỚI BẮT MẮT';
    } else {
      bannerText.textContent = 'THƯ MỤC: videos/freelance/ • ĐỊNH DẠNG LINH HOẠT THEO KÍCH THƯỚC GỐC DỰ ÁN';
    }
  }
}

// Tab Switching
function switchTab(tabKey) {
  playBeep(640, 0.05);
  currentTab = tabKey;
  updateTabUI(tabKey);
  renderProjects();
}

// Pause all playing videos on page
function pauseAllVideos() {
  document.querySelectorAll('video').forEach(v => {
    try { v.pause(); } catch (e) {}
  });
}

// Open VFX Breakdown Modal (9:16 vertical popup)
function openBreakdownModal(title, breakdownSrc, breakdownThumb) {
  playBeep(850, 0.08);
  // 1. Immediately pause all other videos on the page
  pauseAllVideos();

  const modal = document.getElementById('vfxBreakdownModal');
  const modalTitle = document.getElementById('breakdownModalTitle');
  const videoPlayer = document.getElementById('breakdownVideoPlayer');
  const videoSource = document.getElementById('breakdownVideoSource');

  if (!modal || !videoPlayer || !videoSource) return;

  modalTitle.textContent = title || 'VFX Breakdown';
  if (breakdownThumb) {
    videoPlayer.poster = breakdownThumb;
  } else {
    videoPlayer.removeAttribute('poster');
  }
  videoSource.src = breakdownSrc;
  videoPlayer.load();

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Smoothly autoplay
  videoPlayer.play().catch(() => {
    videoPlayer.muted = true;
    videoPlayer.play().catch(() => {});
  });
}

// Close VFX Breakdown Modal
function closeBreakdownModal() {
  const modal = document.getElementById('vfxBreakdownModal');
  const videoPlayer = document.getElementById('breakdownVideoPlayer');
  const videoSource = document.getElementById('breakdownVideoSource');

  if (videoPlayer) {
    videoPlayer.pause();
    if (videoSource) videoSource.src = '';
  }
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Open Cinema Modal (for 9:16 vertical grid cards)
function openCinemaModal(item) {
  playBeep(750, 0.08);
  pauseAllVideos();

  const modal = document.getElementById('cinemaModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalRole = document.getElementById('modalRole');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');
  const modalExternalLink = document.getElementById('modalExternalLink');

  if (!modal || !modalVideo || !modalSource) return;

  modalTitle.textContent = item.title;
  modalBadge.textContent = item.badge || 'VIDEO';
  modalRole.textContent = item.role || 'Video Editor & VFX';

  if (item.url && item.url !== '#' && item.url !== '') {
    modalExternalLink.href = item.url;
    modalExternalLink.classList.remove('hidden');
  } else {
    modalExternalLink.classList.add('hidden');
  }

  if (item.video_src) {
    modalSource.src = item.video_src;
    modalVideo.load();
    modalVideo.play().catch(() => {
      modalVideo.muted = true;
      modalVideo.play().catch(() => {});
    });
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close Cinema Modal
function closeCinemaModal() {
  const modal = document.getElementById('cinemaModal');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');

  if (modalVideo) {
    modalVideo.pause();
    if (modalSource) modalSource.src = '';
  }
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Render Projects List
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const emptyState = document.getElementById('emptySearchState');
  if (!grid) return;
  grid.innerHTML = '';

  let list = [];
  if (currentTab === 'all') {
    list = [
      ...(PORTFOLIO_DATA['cinematic'] || []),
      ...(PORTFOLIO_DATA['thunglong'] || []),
      ...(PORTFOLIO_DATA['freelance'] || [])
    ];
  } else {
    list = PORTFOLIO_DATA[currentTab] || [];
  }

  // Update tab counts in buttons
  const allCount = (PORTFOLIO_DATA['cinematic'] || []).length +
                   (PORTFOLIO_DATA['thunglong'] || []).length +
                   (PORTFOLIO_DATA['freelance'] || []).length;
  if (document.getElementById('countAll')) {
    document.getElementById('countAll').textContent = allCount;
  }
  if (document.getElementById('countCinematic')) {
    document.getElementById('countCinematic').textContent = (PORTFOLIO_DATA['cinematic'] || []).length;
  }
  if (document.getElementById('countThungLong')) {
    document.getElementById('countThungLong').textContent = (PORTFOLIO_DATA['thunglong'] || []).length;
  }
  if (document.getElementById('countFreelance')) {
    document.getElementById('countFreelance').textContent = (PORTFOLIO_DATA['freelance'] || []).length;
  }

  // Filter by search query if any
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    list = list.filter(item => {
      return (item.title && item.title.toLowerCase().includes(q)) ||
             (item.role && item.role.toLowerCase().includes(q)) ||
             (item.badge && item.badge.toLowerCase().includes(q));
    });
  }

  if (list.length === 0) {
    grid.classList.add('hidden');
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    grid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');
  }

  // Layout for TAB 1: MUSIC VIDEOS (MV) - 16:9 Cinematic with Embedded Video Player + Breakdown Button
  if (currentTab === 'cinematic') {
    grid.className = 'grid grid-cols-1 gap-10';

    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'glass-card rounded-3xl p-5 sm:p-7 flex flex-col gap-5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300';

      // Has VFX Breakdown button?
      let breakdownBtnHtml = '';
      if (item.has_breakdown && item.breakdown_src) {
        const thumbParam = item.breakdown_thumb ? item.breakdown_thumb : '';
        breakdownBtnHtml = `
          <button onclick="openBreakdownModal('${item.title.replace(/'/g, "\\\\'")}', '${item.breakdown_src}', '${thumbParam}')" 
                  class="vfx-breakdown-btn" 
                  title="Xem bóc tách kỹ xảo VFX tỉ lệ dọc 9:16">
            <span class="text-neon-cyan">✨</span>
            <span>VFX Breakdown (9:16)</span>
          </button>
        `;
      }

      card.innerHTML = `
        <div class="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <!-- Video Player with controls and preload="none" -->
          <video controls preload="none" playsinline poster="${item.thumbnail}" class="w-full h-full object-cover">
            <source src="${item.video_src}" type="video/mp4">
            Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
          </video>
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
          <div>
            <div class="flex flex-wrap items-center gap-2.5 mb-2">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                ${item.badge}
              </span>
              <span class="text-xs font-mono text-slate-400">16:9 CINEMATIC</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
              ${item.title}
            </h3>
            <p class="text-sm text-slate-400 mt-1.5 leading-relaxed">
              ${item.description || ''}
            </p>
          </div>

          <div class="shrink-0 flex flex-wrap items-center gap-3">
            <span class="text-xs font-mono text-neon-cyan font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
              ${item.role}
            </span>
            ${breakdownBtnHtml}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    return;
  }

  // Mixed or Vertical layouts (thunglong, freelance, all)
  grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6';

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer relative';
    
    // For MV when shown in 'All' tab
    if (item.category === 'cinematic') {
      let breakdownBtn = item.has_breakdown ? `
        <button onclick="event.stopPropagation(); openBreakdownModal('${item.title.replace(/'/g, "\\\\'")}', '${item.breakdown_src}', '${item.breakdown_thumb || ''}')" class="absolute top-3 right-3 z-20 text-[9px] font-mono px-2.5 py-1 rounded-full bg-black/80 border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors flex items-center gap-1 shadow-neon-glow">
          <span>✨</span>
          <span>Breakdown</span>
        </button>
      ` : '';

      card.onclick = () => openCinemaModal(item);
      card.innerHTML = `
        <div class="relative w-full aspect-video bg-black overflow-hidden">
          <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
          
          <div class="absolute top-3 left-3 z-10">
            <span class="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-obsidian-950/85 border border-neon-cyan/40 text-neon-cyan">
              MV 16:9
            </span>
          </div>
          ${breakdownBtn}

          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="w-12 h-12 rounded-full bg-neon-cyan text-obsidian-950 flex items-center justify-center shadow-neon-glow transform scale-90 group-hover:scale-110 transition-all duration-300">
              <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
            <h3 class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2 leading-snug">
              ${item.title}
            </h3>
            <div class="mt-1 text-[10px] font-mono text-neon-cyan/90 truncate">
              ${item.role}
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
      return;
    }

    // Vertical cards (Thung Long & Freelance)
    const isViral = item.category === 'thunglong';
    const badgeColor = isViral ? 'border-rose-500/40 text-rose-300' : 'border-cyan-400/40 text-cyan-300';
    const tagText = isViral ? '9:16' : 'HD';

    card.onclick = () => openCinemaModal(item);
    card.innerHTML = `
      <div class="relative w-full aspect-[9/16] bg-black overflow-hidden">
        <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
        
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span class="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border ${badgeColor} truncate max-w-[85%]">
            ${item.badge}
          </span>
          <span class="text-[9px] font-mono text-slate-400 bg-black/60 px-1.5 py-0.5 rounded">
            ${tagText}
          </span>
        </div>

        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="w-12 h-12 rounded-full bg-white/90 text-obsidian-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-110 group-hover:bg-neon-cyan transition-all duration-300">
            <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
          <h3 class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2 leading-snug">
            ${item.title}
          </h3>
          <div class="mt-2 text-[10px] font-mono text-neon-cyan/90 truncate">
            ${item.role}
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Contact Form Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  const email = document.getElementById('senderEmail').value;
  const type = document.getElementById('projectType').value;
  const message = document.getElementById('projectMessage').value;

  showToast('✓ Yêu cầu đã được ghi nhận thành công!');

  const subject = encodeURIComponent(`[Hợp Tác Dự Án] - ${type} - ${name}`);
  const body = encodeURIComponent(
    `Chào Vinh Kacer,\\n\\nTôi là ${name} (${email}).\\nTôi muốn trao đổi về dự án: ${type}.\\n\\nNội dung chi tiết:\\n${message}\\n\\n---\\nGửi từ Portfolio Vinh Kacer`
  );
  const mailtoUrl = `mailto:bkchoc230801@gmail.com?subject=${subject}&body=${body}`;
  
  const successBox = document.getElementById('formSuccessMessage');
  const mailtoLink = document.getElementById('mailtoLink');
  if (mailtoLink) mailtoLink.href = mailtoUrl;
  if (successBox) successBox.classList.remove('hidden');

  window.location.href = mailtoUrl;
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();

  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyEmail);

  // Close Cinema modal on click outside
  const cinemaModal = document.getElementById('cinemaModal');
  if (cinemaModal) {
    cinemaModal.addEventListener('click', (e) => {
      if (e.target === cinemaModal) closeCinemaModal();
    });
  }

  // Close Breakdown modal on click outside
  const bdModal = document.getElementById('vfxBreakdownModal');
  if (bdModal) {
    bdModal.addEventListener('click', (e) => {
      if (e.target === bdModal) closeBreakdownModal();
    });
  }

  // Keyboard navigation (ESC to close modals)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBreakdownModal();
      closeCinemaModal();
    }
  });

  // Initial render with 'all' tab selected
  updateTabUI('all');
  renderProjects();
});
"""

final_js = template.replace('__DATA_PLACEHOLDER__', json_str)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(final_js)

print('Generated script.js successfully without any string format issues!')
