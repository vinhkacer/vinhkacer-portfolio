#!/usr/bin/env python3
"""
HTML Builder for Vinh Kacer Portfolio (Reset version matching exact user specifications)
Tab 1: videos/mv/ (16:9 Cinematic with video players)
Tab 2: videos/thunglong/ (9:16 Vertical Grid)
Tab 3: videos/freelance/ (Flexible aspect)
Creative Toolkit: 5 minimal software badge cards only (no descriptions).
"""

import json
import os

with open('projects_data.json', 'r', encoding='utf-8') as f:
    projects_data = json.load(f)

json_data_str = json.dumps(projects_data, ensure_ascii=False)

html_content = f'''<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinh Kacer — Video Editor & 3D / VFX Artist | Portfolio</title>
  <meta name="description" content="Portfolio của Vinh Kacer — Video Editor & 3D / VFX Artist với hơn 4 năm kinh nghiệm thực chiến từ tiền kì ý tưởng, nhịp điệu Music Video đến kỹ xảo 3D/VFX phức tạp.">
  <meta name="keywords" content="Vinh Kacer, Video Editor, VFX Artist, 3D Artist, Thủng Long Family, Haidilao, Music Video, Houdini, Blender, Premiere, After Effects, DaVinci Resolve">
  <meta name="author" content="Vinh Kacer">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Vinh Kacer — Video Editor & 3D / VFX Artist">
  <meta property="og:description" content="Crafting Visual Rhythm, Viral Stories & Cinematic Motion.">
  <meta property="og:type" content="website">
  
  <!-- Google Fonts: Syne (Display), Plus Jakarta Sans (UI), JetBrains Mono (Tech) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      darkMode: 'class',
      theme: {{
        extend: {{
          colors: {{
            obsidian: {{
              950: '#04060A',
              900: '#0B0F19',
              850: '#0F1626',
              800: '#141D30',
              700: '#1F2B44'
            }},
            neon: {{
              cyan: '#00E5FF',
              cyanGlow: 'rgba(0, 229, 255, 0.4)',
              purple: '#A855F7',
              purpleGlow: 'rgba(168, 85, 247, 0.35)'
            }}
          }},
          fontFamily: {{
            display: ['Syne', 'sans-serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
          }},
          boxShadow: {{
            'neon-glow': '0 0 25px rgba(0, 229, 255, 0.3)',
            'neon-subtle': '0 0 15px rgba(0, 229, 255, 0.15)',
            'purple-glow': '0 0 25px rgba(168, 85, 247, 0.3)',
            'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          }}
        }}
      }}
    }}
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {{
      width: 8px;
      height: 8px;
    }}
    ::-webkit-scrollbar-track {{
      background: #04060A;
    }}
    ::-webkit-scrollbar-thumb {{
      background: #1F2B44;
      border-radius: 9999px;
      border: 2px solid #04060A;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: #00E5FF;
    }}

    /* Film Grain Noise Overlay */
    .bg-grain {{
      background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0);
      background-size: 24px 24px;
    }}

    /* Glassmorphism Classes */
    .glass-nav {{
      background: rgba(11, 15, 25, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }}

    .glass-card {{
      background: rgba(255, 255, 255, 0.025);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }}
    .glass-card:hover {{
      border-color: rgba(0, 229, 255, 0.35);
      background: rgba(255, 255, 255, 0.045);
      box-shadow: 0 10px 30px -10px rgba(0, 229, 255, 0.15);
    }}

    /* Glow Orbs */
    .orb-cyan {{
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, rgba(0, 229, 255, 0) 70%);
      filter: blur(60px);
      pointer-events: none;
      z-index: 0;
    }}
    .orb-purple {{
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(168, 85, 247, 0.09) 0%, rgba(168, 85, 247, 0) 70%);
      filter: blur(70px);
      pointer-events: none;
      z-index: 0;
    }}

    /* Custom Selection */
    ::selection {{
      background: #00E5FF;
      color: #04060A;
    }}
  </style>
</head>
<body class="bg-obsidian-950 text-slate-100 font-sans antialiased selection:bg-neon-cyan selection:text-black min-h-screen relative overflow-x-hidden bg-grain">

  <!-- Ambient Background Lighting -->
  <div class="orb-cyan top-[-100px] left-1/2 transform -translate-x-1/2"></div>
  <div class="orb-purple top-[800px] right-[-150px]"></div>
  <div class="orb-cyan top-[2200px] left-[-200px]"></div>
  <div class="orb-purple bottom-[400px] right-[-100px]"></div>

  <!-- ========================================================= -->
  <!-- 1. NAVIGATION BAR (Thanh điều hướng cố định)             -->
  <!-- ========================================================= -->
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Logo -->
      <a href="#" class="group flex items-center gap-2 text-xl font-display font-extrabold tracking-wider text-white">
        <span class="w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-neon-glow group-hover:scale-125 transition-transform duration-300"></span>
        <span class="tracking-tight">VINH KACER</span>
        <span class="text-xs font-mono text-neon-cyan px-2 py-0.5 rounded border border-neon-cyan/30 bg-neon-cyan/10 hidden sm:inline-block">VFX/EDIT</span>
      </a>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#portfolio" class="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors tracking-wide flex items-center gap-1.5 py-1">
          <span class="text-xs font-mono text-neon-cyan/70">01.</span> [Dự Án]
        </a>
        <a href="#toolkit" class="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors tracking-wide flex items-center gap-1.5 py-1">
          <span class="text-xs font-mono text-neon-cyan/70">02.</span> [Công Cụ]
        </a>
        <a href="#timeline" class="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors tracking-wide flex items-center gap-1.5 py-1">
          <span class="text-xs font-mono text-neon-cyan/70">03.</span> [Lộ Trình]
        </a>
        <a href="#contact" class="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors tracking-wide flex items-center gap-1.5 py-1">
          <span class="text-xs font-mono text-neon-cyan/70">04.</span> [Liên Hệ]
        </a>
      </nav>

      <!-- Right CTA Button -->
      <div class="hidden md:flex items-center gap-4">
        <a href="#contact" class="relative group px-5 py-2.5 rounded-full border border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan text-xs font-bold uppercase tracking-wider hover:bg-neon-cyan hover:text-obsidian-950 transition-all duration-300 shadow-neon-subtle hover:shadow-neon-glow flex items-center gap-2">
          <span>HỢP TÁC NGAY</span>
          <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobileMenuBtn" aria-label="Toggle Navigation" class="md:hidden p-2 rounded-lg text-slate-300 hover:text-neon-cyan hover:bg-white/5 border border-white/10 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path id="menuIcon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobileDrawer" class="hidden md:hidden glass-nav border-t border-white/10 px-6 py-6 space-y-4">
      <a href="#portfolio" class="mobile-nav-link block text-base font-medium text-slate-300 hover:text-neon-cyan transition-colors py-2 border-b border-white/5">
        <span class="text-xs font-mono text-neon-cyan mr-2">01.</span> [Dự Án]
      </a>
      <a href="#toolkit" class="mobile-nav-link block text-base font-medium text-slate-300 hover:text-neon-cyan transition-colors py-2 border-b border-white/5">
        <span class="text-xs font-mono text-neon-cyan mr-2">02.</span> [Công Cụ]
      </a>
      <a href="#timeline" class="mobile-nav-link block text-base font-medium text-slate-300 hover:text-neon-cyan transition-colors py-2 border-b border-white/5">
        <span class="text-xs font-mono text-neon-cyan mr-2">03.</span> [Lộ Trình]
      </a>
      <a href="#contact" class="mobile-nav-link block text-base font-medium text-slate-300 hover:text-neon-cyan transition-colors py-2 border-b border-white/5">
        <span class="text-xs font-mono text-neon-cyan mr-2">04.</span> [Liên Hệ]
      </a>
      <div class="pt-2">
        <a href="#contact" class="mobile-nav-link block w-full text-center py-3 rounded-full border border-neon-cyan/60 bg-neon-cyan text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-neon-glow">
          HỢP TÁC NGAY
        </a>
      </div>
    </div>
  </header>

  <!-- ========================================================= -->
  <!-- 2. HERO SECTION (Mở đầu)                                  -->
  <!-- ========================================================= -->
  <section class="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
    
    <!-- Status Badge -->
    <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md mb-8">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="text-xs font-mono uppercase tracking-widest text-slate-300">AVAILABLE FOR FREELANCE & COMMERCIAL</span>
      <span class="text-slate-600">•</span>
      <span class="text-xs font-mono text-neon-cyan">TP. HỒ CHÍ MINH</span>
    </div>

    <!-- Massive Display Title -->
    <div class="relative max-w-6xl mx-auto">
      <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-[0.95] uppercase select-none">
        <span class="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">VINH KACER</span>
      </h1>
      
      <!-- Artistic Accent line -->
      <div class="flex items-center justify-center gap-3 mt-4 text-xs font-mono tracking-widest uppercase text-slate-400">
        <span class="h-[1px] w-12 bg-white/20"></span>
        <span class="text-neon-cyan font-bold">VIDEO EDITOR</span>
        <span class="text-slate-600">•</span>
        <span class="text-neon-purple font-bold">3D / VFX ARTIST</span>
        <span class="text-slate-600">•</span>
        <span class="text-slate-300">COLORIST</span>
        <span class="h-[1px] w-12 bg-white/20"></span>
      </div>
    </div>

    <!-- Tagline & Subline -->
    <div class="max-w-3xl mx-auto mt-8 space-y-4">
      <p class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug">
        Crafting Visual Rhythm, Viral Stories &amp; Cinematic Motion
      </p>
      <p class="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
        Hơn 4 năm kinh nghiệm thực chiến từ tiền kì ý tưởng, nhịp điệu Music Video đến kỹ xảo 3D/VFX phức tạp.
        Đồng hành cùng các nghệ sĩ, thương hiệu lớn &amp; kênh nội dung viral triệu view.
      </p>
    </div>

    <!-- Two CTAs -->
    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
      
      <!-- Primary CTA: Khám Phá Dự Án -->
      <a href="#portfolio" class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-obsidian-950 font-bold text-sm uppercase tracking-wider hover:bg-neon-cyan hover:shadow-neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
        <span>Khám Phá Dự Án</span>
        <svg class="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>

      <!-- Secondary CTA: bkchoc230801@gmail.com (Fast Copy) -->
      <button id="copyEmailBtn" class="w-full sm:w-auto px-6 py-4 rounded-full glass-card hover:border-neon-cyan/50 text-slate-200 hover:text-white font-mono text-sm tracking-tight flex items-center justify-center gap-2.5 group transition-all duration-300">
        <svg class="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <span id="copyEmailText">bkchoc230801@gmail.com</span>
      </button>

    </div>

    <!-- Quick Stats Metric Strip -->
    <div class="mt-16 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10">
      <div class="p-4 rounded-2xl glass-card text-center">
        <div class="text-3xl sm:text-4xl font-display font-extrabold text-white">4+</div>
        <div class="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Năm Kinh Nghiệm</div>
      </div>
      <div class="p-4 rounded-2xl glass-card text-center">
        <div class="text-3xl sm:text-4xl font-display font-extrabold text-neon-cyan">50M+</div>
        <div class="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Lượt Xem Viral Content</div>
      </div>
      <div class="p-4 rounded-2xl glass-card text-center">
        <div class="text-3xl sm:text-4xl font-display font-extrabold text-neon-purple">48+</div>
        <div class="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Dự Án Đã Hoàn Thành</div>
      </div>
      <div class="p-4 rounded-2xl glass-card text-center">
        <div class="text-3xl sm:text-4xl font-display font-extrabold text-white">100%</div>
        <div class="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Chuẩn Nhịp &amp; VFX</div>
      </div>
    </div>

  </section>

  <!-- ========================================================= -->
  <!-- 3. CREATIVE TOOLKIT (5 HUY HIỆU TỐI GIẢN — KHÔNG MÔ TẢ)   -->
  <!-- ========================================================= -->
  <section id="toolkit" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    <!-- Section Title -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
      <div>
        <div class="flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest mb-1.5">
          <span>// 02. CORE SUITE</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-white uppercase">
          CREATIVE TOOLKIT
        </h2>
      </div>
    </div>

    <!-- 5 Minimalist Badges: Just name and icon, ZERO descriptions -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      
      <!-- 1. Houdini -->
      <div class="glass-card rounded-2xl p-5 flex items-center justify-center gap-3.5 border border-white/10 hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] transition-all duration-300 group cursor-default">
        <div class="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300">
          <svg class="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3 class="text-base font-display font-bold text-white group-hover:text-orange-400 transition-colors">
          Houdini
        </h3>
      </div>

      <!-- 2. Adobe After Effects -->
      <div class="glass-card rounded-2xl p-5 flex items-center justify-center gap-3.5 border border-white/10 hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all duration-300 group cursor-default">
        <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
          <span class="text-lg font-black font-display text-purple-400">Ae</span>
        </div>
        <h3 class="text-base font-display font-bold text-white group-hover:text-purple-400 transition-colors">
          After Effects
        </h3>
      </div>

      <!-- 3. Adobe Premiere Pro -->
      <div class="glass-card rounded-2xl p-5 flex items-center justify-center gap-3.5 border border-white/10 hover:border-indigo-500/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all duration-300 group cursor-default">
        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300">
          <span class="text-lg font-black font-display text-indigo-400">Pr</span>
        </div>
        <h3 class="text-base font-display font-bold text-white group-hover:text-indigo-400 transition-colors">
          Premiere Pro
        </h3>
      </div>

      <!-- 4. Blender -->
      <div class="glass-card rounded-2xl p-5 flex items-center justify-center gap-3.5 border border-white/10 hover:border-amber-500/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-300 group cursor-default">
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
          <svg class="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <h3 class="text-base font-display font-bold text-white group-hover:text-amber-400 transition-colors">
          Blender
        </h3>
      </div>

      <!-- 5. DaVinci Resolve -->
      <div class="glass-card rounded-2xl p-5 flex items-center justify-center gap-3.5 border border-white/10 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transition-all duration-300 group cursor-default">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-neon-cyan transition-all duration-300">
          <svg class="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/>
          </svg>
        </div>
        <h3 class="text-base font-display font-bold text-white group-hover:text-neon-cyan transition-colors">
          DaVinci Resolve
        </h3>
      </div>

    </div>

  </section>

  <!-- ========================================================= -->
  <!-- 4. PORTFOLIO SHOWCASE (3 TABS CHUẨN ĐÚNG THEO YÊU CẦU)   -->
  <!-- ========================================================= -->
  <section id="portfolio" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    <!-- Section Title & Tabs Controls -->
    <div class="mb-12">
      <div class="flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest mb-2">
        <span>// 01. SELECTED WORKS</span>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            PORTFOLIO SHOWCASE
          </h2>
          <p class="text-sm font-mono text-slate-400 mt-2">
            Đúng các file đang có thực tế trong thư mục, phân loại chuẩn xác theo 3 nhóm dự án.
          </p>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full lg:w-72">
          <input type="text" id="projectSearchInput" placeholder="Tìm kiếm video, bài hát..." class="w-full bg-white/[0.03] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan transition-colors">
          <svg class="w-4 h-4 text-slate-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <!-- 3 Filter Tabs -->
      <div class="mt-8 flex flex-wrap gap-3">
        
        <!-- Tab 1: Music Videos (MV) -->
        <button id="tabBtnCinematic" onclick="switchTab('cinematic')" class="tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-neon-cyan text-obsidian-950 shadow-neon-glow">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
          </svg>
          <span>Music Videos (MV)</span>
          <span class="tab-count px-2 py-0.5 rounded-full bg-black/20 text-[10px]" id="countCinematic">3</span>
        </button>

        <!-- Tab 2: Thủng Long Family -->
        <button id="tabBtnThungLong" onclick="switchTab('thunglong')" class="tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10">
          <svg class="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <span>Thủng Long Family</span>
          <span class="tab-count px-2 py-0.5 rounded-full bg-white/10 text-[10px]" id="countThungLong">35</span>
        </button>

        <!-- Tab 3: Freelance & Commercial -->
        <button id="tabBtnFreelance" onclick="switchTab('freelance')" class="tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10">
          <svg class="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          <span>Freelance &amp; Commercial</span>
          <span class="tab-count px-2 py-0.5 rounded-full bg-white/10 text-[10px]" id="countFreelance">10</span>
        </button>

      </div>
    </div>

    <!-- Active Tab Description Banner -->
    <div id="tabBanner" class="p-4 mb-8 rounded-xl bg-neon-cyan/5 border border-neon-cyan/20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
        <span id="tabBannerText" class="text-xs font-mono text-neon-cyan tracking-wide">
          THƯ MỤC: videos/mv/ • TỈ LỆ KHUNG NGANG 16:9 CHUẨN CINEMATIC • TÍCH HỢP TRÌNH PHÁT FULL CONTROLS
        </span>
      </div>
      <span class="text-[11px] font-mono text-slate-400 hidden sm:inline-block">Phát mượt trực tiếp với controls, preload="metadata"</span>
    </div>

    <!-- Container for Rendered Projects -->
    <div id="projectsGrid" class="grid gap-6">
      <!-- Dynamically populated by JavaScript -->
    </div>

    <!-- Empty State -->
    <div id="emptySearchState" class="hidden py-20 text-center glass-card rounded-2xl">
      <svg class="w-12 h-12 mx-auto text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <p class="text-lg font-medium text-slate-300">Không tìm thấy video phù hợp với từ khóa.</p>
    </div>

  </section>

  <!-- ========================================================= -->
  <!-- 5. CAREER TIMELINE (Hành trình nghề nghiệp)              -->
  <!-- ========================================================= -->
  <section id="timeline" class="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    <!-- Section Header -->
    <div class="text-center max-w-2xl mx-auto mb-20">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest mb-2">
        <span>// 03. CAREER CHRONICLE</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
        HÀNH TRÌNH NGHỀ NGHIỆP
      </h2>
      <p class="text-sm font-mono text-slate-400 mt-2">
        Từ nền tảng thiết kế đồ họa đến diễn hoạt 3D CGI và khẳng định năng lực biên tập Music Video &amp; Viral Short-Form triệu view.
      </p>
    </div>

    <!-- Minimal Vertical Timeline with Glowing Spine -->
    <div class="relative pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12 ml-2 sm:ml-8">
      
      <!-- Stage 1: 2023 - Nay -->
      <div class="relative group">
        <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-neon-cyan group-hover:scale-125 group-hover:bg-neon-cyan transition-all duration-300 shadow-neon-glow"></div>
        
        <div class="glass-card rounded-2xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span class="inline-block text-xs font-mono font-bold text-neon-cyan uppercase tracking-wider px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 self-start">
              2023 — NAY
            </span>
            <span class="text-xs font-mono text-slate-400">TP. Hồ Chí Minh • Freelance</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-neon-cyan transition-colors">
            Freelance Video Editor &amp; VFX Artist
          </h3>
          <p class="text-xs font-mono text-slate-400 mt-1">Độc lập &amp; Hợp tác các Nghệ sĩ / Studio / Nhãn hàng lớn</p>

          <p class="text-sm text-slate-300 mt-4 leading-relaxed">
            Tập trung chuyên sâu vào sản xuất Music Video (MV cho nghệ sĩ Cầm, Danmy, Wheelie...), hậu kì commercial cho các chiến dịch nhãn hàng (Haidilao Hotpot, Clear Men, AXE Vietnam, Bosch...), kết hợp kỹ xảo 3D CGI từ Houdini và Blender.
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Official Music Video</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">3D VFX CGI</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Commercial Post-Production</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Compositing</span>
          </div>
        </div>
      </div>

      <!-- Stage 2: 2022 - 2023 -->
      <div class="relative group">
        <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-rose-400 group-hover:scale-125 group-hover:bg-rose-400 transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.4)]"></div>
        
        <div class="glass-card rounded-2xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span class="inline-block text-xs font-mono font-bold text-rose-400 uppercase tracking-wider px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 self-start">
              2022 — 2023
            </span>
            <span class="text-xs font-mono text-slate-400">Hà Nội • Creator Team</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-rose-400 transition-colors">
            Video Editor &amp; VFX tại Thủng Long Family
          </h3>
          <p class="text-xs font-mono text-slate-400 mt-1">Kênh Viral Content Triệu Views hàng đầu Việt Nam</p>

          <p class="text-sm text-slate-300 mt-4 leading-relaxed">
            Chủ yếu đảm nhiệm dựng phim (Edit), thực hiện kỹ xảo (VFX), Sound Design và Compositing; đồng thời trực tiếp tham gia vào khâu tiền kì để chuẩn bị và định hướng góc máy kỹ thuật cho các shot quay VFX, đảm bảo chất lượng hình ảnh và nhịp điệu cuốn hút cho các video ngắn triệu view.
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Video Editing</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">VFX &amp; Compositing</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">VFX Pre-production</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Sound Design</span>
          </div>
        </div>
      </div>

      <!-- Stage 3: 2021 - 2022 -->
      <div class="relative group">
        <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-neon-purple group-hover:scale-125 group-hover:bg-neon-purple transition-all duration-300 shadow-purple-glow"></div>
        
        <div class="glass-card rounded-2xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span class="inline-block text-xs font-mono font-bold text-neon-purple uppercase tracking-wider px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 self-start">
              2021 — 2022
            </span>
            <span class="text-xs font-mono text-slate-400">MMG Global</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-neon-purple transition-colors">
            3D Animation Artist tại MMG Global
          </h3>
          <p class="text-xs font-mono text-slate-400 mt-1">3D Production &amp; Animated Series</p>

          <p class="text-sm text-slate-300 mt-4 leading-relaxed">
            Thực hiện diễn hoạt (animation) chuyển động nhân vật, đạo cụ theo storyboard và kịch bản có sẵn; phụ trách thiết lập khung xương chuyển động (rigging), hoàn thiện các phân cảnh hoạt hình 3D chất lượng cao.
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Animation</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Rigging</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Blender</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Maya</span>
          </div>
        </div>
      </div>

      <!-- Stage 4: 2020 -->
      <div class="relative group">
        <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-slate-500 group-hover:scale-125 group-hover:bg-slate-400 transition-all duration-300"></div>
        
        <div class="glass-card rounded-2xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span class="inline-block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20 self-start">
              2020
            </span>
            <span class="text-xs font-mono text-slate-400">I Top Media</span>
          </div>

          <h3 class="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-slate-200 transition-colors">
            Graphic Designer tại I Top Media
          </h3>
          <p class="text-xs font-mono text-slate-400 mt-1">Branding &amp; F&amp;B Marketing</p>

          <p class="text-sm text-slate-300 mt-4 leading-relaxed">
            Thiết kế bộ nhận diện thương hiệu và ấn phẩm truyền thông cho các chuỗi ngành F&amp;B: Logo, Menu, Standee, Panel quảng cáo và concept hình ảnh thị giác.
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Brand Identity</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Adobe Photoshop &amp; Illustrator</span>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">Typography &amp; Layout</span>
          </div>
        </div>
      </div>

    </div>

  </section>

  <!-- ========================================================= -->
  <!-- 6. CONTACT & FOOTER (Chốt hợp tác)                       -->
  <!-- ========================================================= -->
  <section id="contact" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    <div class="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
      
      <!-- Decorative Glow in card -->
      <div class="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-neon-cyan/10 filter blur-3xl pointer-events-none"></div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        <!-- Left: Contact Info -->
        <div class="lg:col-span-5 space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest mb-3">
              <span>// LET'S COLLABORATE</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              Sẵn sàng đưa dự án hoặc Music Video tiếp theo của bạn lên màn ảnh?
            </h2>
            <p class="text-sm text-slate-400 mt-4 leading-relaxed">
              Tôi luôn sẵn sàng trao đổi các cơ hội hợp tác sản xuất Music Video, hậu kì nhãn hàng, short-form viral hoặc kỹ xảo 3D/VFX đột phá.
            </p>
          </div>

          <!-- Direct Contact Cards -->
          <div class="space-y-4">
            
            <!-- Email -->
            <div class="p-4 rounded-xl glass-card flex items-center justify-between group hover:border-neon-cyan/50 transition-colors">
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email Trực Tiếp</div>
                  <div class="text-sm font-mono font-medium text-white group-hover:text-neon-cyan transition-colors">bkchoc230801@gmail.com</div>
                </div>
              </div>
              <button onclick="copyEmail()" class="text-xs font-mono text-neon-cyan hover:underline p-1.5" title="Sao chép">
                COPY
              </button>
            </div>

            <!-- Hotline / Zalo -->
            <a href="https://zalo.me/0876823081" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl glass-card flex items-center justify-between group hover:border-emerald-400/50 transition-colors block">
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Hotline / Zalo</div>
                  <div class="text-sm font-mono font-medium text-white group-hover:text-emerald-400 transition-colors">+84 876 823 081</div>
                </div>
              </div>
              <span class="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <!-- Location -->
            <div class="p-4 rounded-xl glass-card flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-neon-purple shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Địa Điểm Làm Việc</div>
                <div class="text-sm font-mono font-medium text-white">TP. Hồ Chí Minh <span class="text-slate-400 font-normal">(Gốc Hải Phòng)</span></div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: Interactive Quick Request Form -->
        <div class="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h3 class="text-xl font-display font-bold text-white mb-2">Gửi Yêu Cầu Dự Án Nhanh</h3>
          <p class="text-xs font-mono text-slate-400 mb-6">Điền thông tin sơ bộ để nhận phản hồi và tư vấn sản xuất trong vòng 2-4 giờ.</p>

          <form id="contactForm" onsubmit="handleFormSubmit(event)" class="space-y-4">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Name -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5" for="senderName">
                  Tên Đối Tác / Brand <span class="text-neon-cyan">*</span>
                </label>
                <input type="text" id="senderName" required placeholder="VD: Anh Tuấn / Brand XYZ" class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan transition-colors">
              </div>

              <!-- Email -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5" for="senderEmail">
                  Email Liên Hệ <span class="text-neon-cyan">*</span>
                </label>
                <input type="email" id="senderEmail" required placeholder="name@domain.com" class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan transition-colors">
              </div>
            </div>

            <!-- Project Type Dropdown -->
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5" for="projectType">
                Thể Loại Dự Án <span class="text-neon-cyan">*</span>
              </label>
              <div class="relative">
                <select id="projectType" required class="w-full bg-obsidian-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors appearance-none cursor-pointer">
                  <option value="Music Video (MV) 16:9">Music Video (MV) &amp; Cinematic Post-Production</option>
                  <option value="Thủng Long Family / Viral Short-form">Viral Short-form / TikTok / Reels Series</option>
                  <option value="Freelance & Commercial">Commercial / Clip Nhãn Hàng Thương Mại</option>
                  <option value="Kỹ xảo 3D CGI & VFX Simulation">Kỹ xảo 3D CGI &amp; VFX Simulation (Houdini / Blender)</option>
                  <option value="Chỉnh màu DaVinci Resolve">Chỉnh màu điện ảnh (DaVinci Resolve Color Grading)</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5" for="projectMessage">
                Lời Nhắn &amp; Mô Tả Sơ Lược <span class="text-neon-cyan">*</span>
              </label>
              <textarea id="projectMessage" required rows="4" placeholder="Mô tả tóm tắt ý tưởng, timeline dự kiến, link tư liệu (nếu có)..." class="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan transition-colors resize-none"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" id="submitFormBtn" class="w-full py-4 rounded-xl bg-neon-cyan text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:bg-white hover:shadow-neon-glow transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>GỬI TIN NHẮN</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

          </form>

          <!-- Form Success / Mailto Container -->
          <div id="formSuccessMessage" class="hidden mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center space-y-2">
            <p class="font-bold text-sm">✓ Đã chuẩn bị thông điệp hợp tác!</p>
            <p class="text-slate-300">Bạn có thể bấm bên dưới để mở ứng dụng Email gửi trực tiếp tới Vinh Kacer:</p>
            <a id="mailtoLink" href="#" class="inline-block px-4 py-2 rounded-lg bg-emerald-400 text-black font-bold uppercase tracking-wider text-[11px] hover:bg-white transition-colors">
              MỞ ỨNG DỤNG EMAIL GỬI NGAY
            </a>
          </div>

        </div>

      </div>

    </div>

    <!-- Footer Copyright -->
    <div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
      <p>© 2026 Vinh Kacer. Crafted for high-impact visual storytelling.</p>
      
      <div class="flex items-center gap-6">
        <a href="#portfolio" class="hover:text-neon-cyan transition-colors">Dự Án</a>
        <a href="#toolkit" class="hover:text-neon-cyan transition-colors">Công Cụ</a>
        <a href="#timeline" class="hover:text-neon-cyan transition-colors">Lộ Trình</a>
        <a href="#" class="hover:text-neon-cyan transition-colors flex items-center gap-1">
          <span>LÊN ĐẦU TRANG</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </a>
      </div>
    </div>

  </section>

  <!-- ========================================================= -->
  <!-- CINEMA MODAL POPUP (Trình xem phim & video chất lượng cao) -->
  <!-- ========================================================= -->
  <div id="cinemaModal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl transition-opacity duration-300">
    <div class="relative w-full max-w-5xl max-h-[95vh] flex flex-col bg-obsidian-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-obsidian-950/60 backdrop-blur-md">
        <div class="flex items-center gap-3 overflow-hidden">
          <span id="modalBadge" class="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan shrink-0">
            CINEMATIC
          </span>
          <h3 id="modalTitle" class="text-base sm:text-lg font-display font-bold text-white truncate">
            Project Title
          </h3>
        </div>

        <button onclick="closeCinemaModal()" class="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0" title="Đóng (ESC)">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Modal Video Player Container (Smooth Video Playback: controls, preload, playsinline) -->
      <div class="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[300px] sm:min-h-[460px] max-h-[70vh]">
        
        <!-- Video element with controls, preload="none", playsinline -->
        <video id="modalVideoPlayer" class="w-full h-full max-h-[70vh] object-contain" controls preload="none" playsinline>
          <source id="modalVideoSource" src="" type="video/mp4">
          Trình duyệt của bạn không hỗ trợ phát thẻ video HTML5.
        </video>

      </div>

      <!-- Modal Footer Info -->
      <div class="px-6 py-4 border-t border-white/10 bg-obsidian-950/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-slate-400">Vai trò:</span>
            <span id="modalRole" class="text-xs font-mono font-semibold text-white">Lead Video Editor • VFX</span>
          </div>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <a id="modalExternalLink" href="#" target="_blank" rel="noopener noreferrer" class="hidden px-4 py-2 rounded-xl bg-white/10 hover:bg-neon-cyan hover:text-black text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border border-white/10">
            <span>MỞ LINK GỐC</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
          <button onclick="closeCinemaModal()" class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono transition-colors">
            ĐÓNG (ESC)
          </button>
        </div>

      </div>

    </div>
  </div>

  <!-- Toast Notification -->
  <div id="toastNotification" class="fixed bottom-8 right-8 z-50 transform translate-y-24 opacity-0 transition-all duration-300 px-5 py-3 rounded-2xl glass-card border border-neon-cyan/40 bg-obsidian-900/95 text-white font-mono text-xs flex items-center gap-3 shadow-neon-glow">
    <span class="w-2 h-2 rounded-full bg-neon-cyan animate-ping"></span>
    <span id="toastMessage">Đã sao chép email vào clipboard!</span>
  </div>

  <!-- ========================================================= -->
  <!-- JAVASCRIPT LOGIC & PORTFOLIO ENGINE                       -->
  <!-- ========================================================= -->
  <script>
    // Embedded Complete Dataset (Strictly matching real folders)
    const PORTFOLIO_DATA = {json_data_str};

    let currentTab = 'cinematic';
    let searchQuery = '';

    // Play subtle audio tone via Web Audio API
    function playBeep(freq = 880, duration = 0.08) {{
      try {{
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
      }} catch (e) {{}}
    }}

    // Toast Notification helper
    function showToast(msg) {{
      playBeep(920, 0.1);
      const toast = document.getElementById('toastNotification');
      const text = document.getElementById('toastMessage');
      text.textContent = msg;
      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {{
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
      }}, 3000);
    }}

    // Copy Email Function
    function copyEmail() {{
      const email = 'bkchoc230801@gmail.com';
      navigator.clipboard.writeText(email).then(() => {{
        showToast('✓ Đã sao chép email: ' + email);
        const emailText = document.getElementById('copyEmailText');
        if (emailText) {{
          const orig = emailText.textContent;
          emailText.textContent = 'ĐÃ SAO CHÉP!';
          setTimeout(() => {{ emailText.textContent = orig; }}, 2000);
        }}
      }}).catch(() => {{
        showToast('bkchoc230801@gmail.com');
      }});
    }}

    document.getElementById('copyEmailBtn').addEventListener('click', copyEmail);

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    mobileBtn.addEventListener('click', () => {{
      mobileDrawer.classList.toggle('hidden');
    }});
    document.querySelectorAll('.mobile-nav-link').forEach(link => {{
      link.addEventListener('click', () => {{
        mobileDrawer.classList.add('hidden');
      }});
    }});

    // Tab Switching
    function switchTab(tabKey) {{
      playBeep(640, 0.05);
      currentTab = tabKey;
      
      // Update Tab Buttons UI
      const tabs = [
        {{ key: 'cinematic', btn: document.getElementById('tabBtnCinematic') }},
        {{ key: 'thunglong', btn: document.getElementById('tabBtnThungLong') }},
        {{ key: 'freelance', btn: document.getElementById('tabBtnFreelance') }}
      ];

      tabs.forEach(t => {{
        if (t.key === tabKey) {{
          t.btn.className = 'tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-neon-cyan text-obsidian-950 shadow-neon-glow';
        }} else {{
          t.btn.className = 'tab-btn px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2.5 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10';
        }}
      }});

      // Update Banner Description
      const bannerText = document.getElementById('tabBannerText');
      if (tabKey === 'cinematic') {{
        bannerText.textContent = 'THƯ MỤC: videos/mv/ • TỈ LỆ KHUNG NGANG 16:9 CHUẨN CINEMATIC • TÍCH HỢP TRÌNH PHÁT FULL CONTROLS';
      }} else if (tabKey === 'thunglong') {{
        bannerText.textContent = 'THƯ MỤC: videos/thunglong/ • TỈ LỆ KHUNG DỌC 9:16 (TIKTOK / REELS) • BỐ CỤC LƯỚI BẮT MẮT';
      }} else {{
        bannerText.textContent = 'THƯ MỤC: videos/freelance/ • ĐỊNH DẠNG LINH HOẠT THEO KÍCH THƯỚC GỐC DỰ ÁN';
      }}

      renderProjects();
    }}

    // Render Projects Grid
    function renderProjects() {{
      const grid = document.getElementById('projectsGrid');
      const emptyState = document.getElementById('emptySearchState');
      grid.innerHTML = '';

      let list = PORTFOLIO_DATA[currentTab] || [];

      // Update tab counter numbers
      document.getElementById('countCinematic').textContent = (PORTFOLIO_DATA['cinematic'] || []).length;
      document.getElementById('countThungLong').textContent = (PORTFOLIO_DATA['thunglong'] || []).length;
      document.getElementById('countFreelance').textContent = (PORTFOLIO_DATA['freelance'] || []).length;

      // Filter by search query if any
      if (searchQuery.trim() !== '') {{
        const q = searchQuery.toLowerCase();
        list = list.filter(item => {{
          return (item.title && item.title.toLowerCase().includes(q)) ||
                 (item.role && item.role.toLowerCase().includes(q)) ||
                 (item.badge && item.badge.toLowerCase().includes(q));
        }});
      }}

      if (list.length === 0) {{
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
      }} else {{
        grid.classList.remove('hidden');
        emptyState.classList.add('hidden');
      }}

      // TAB 1: MUSIC VIDEOS (MV) - 16:9 Cinematic with Embedded Video Player
      if (currentTab === 'cinematic') {{
        grid.className = 'grid grid-cols-1 gap-8';

        list.forEach(item => {{
          const card = document.createElement('div');
          card.className = 'glass-card rounded-3xl p-5 sm:p-7 flex flex-col gap-5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300';
          
          card.innerHTML = `
            <div class="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <!-- Video Player with controls and preload="none" -->
              <video controls preload="none" playsinline poster="${{item.thumbnail}}" class="w-full h-full object-cover">
                <source src="${{item.video_src}}" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
              </video>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div>
                <div class="flex items-center gap-2.5 mb-2">
                  <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                    ${{item.badge}}
                  </span>
                  <span class="text-xs font-mono text-slate-400">16:9 CINEMATIC</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                  ${{item.title}}
                </h3>
                <p class="text-sm text-slate-400 mt-1.5 leading-relaxed">
                  ${{item.description || ''}}
                </p>
              </div>

              <div class="shrink-0 flex items-center gap-3">
                <span class="text-xs font-mono text-neon-cyan font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
                  ${{item.role}}
                </span>
                <button onclick="openCinemaModalBySrc('${{item.title}}', '${{item.badge}}', '${{item.role}}', '${{item.video_src}}')" class="p-2.5 rounded-xl bg-white/10 hover:bg-neon-cyan hover:text-black text-white transition-colors" title="Mở Rạp Chiếu Fullscreen">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </button>
              </div>
            </div>
          `;
          grid.appendChild(card);
        }});
        return;
      }}

      // TAB 2: THUNG LONG FAMILY - 9:16 Vertical Grid
      if (currentTab === 'thunglong') {{
        grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6';

        list.forEach(item => {{
          const card = document.createElement('div');
          card.className = 'glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer relative';
          card.onclick = () => openCinemaModal(item);

          card.innerHTML = `
            <div class="relative w-full aspect-[9/16] bg-black overflow-hidden">
              <img src="${{item.thumbnail}}" alt="${{item.title}}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              
              <!-- Badge -->
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span class="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-rose-500/40 text-rose-300 truncate max-w-[85%]">
                  ${{item.badge}}
                </span>
                <span class="text-[9px] font-mono text-slate-400 bg-black/60 px-1.5 py-0.5 rounded">
                  9:16
                </span>
              </div>

              <!-- Play Button Center Overlay -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <div class="w-12 h-12 rounded-full bg-white/90 text-obsidian-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-110 group-hover:bg-neon-cyan transition-all duration-300">
                  <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              <!-- Bottom Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                <h3 class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2 leading-snug">
                  ${{item.title}}
                </h3>
                <div class="mt-2 text-[10px] font-mono text-neon-cyan/90 truncate">
                  ${{item.role}}
                </div>
              </div>
            </div>
          `;
          grid.appendChild(card);
        }});
        return;
      }}

      // TAB 3: FREELANCE & COMMERCIAL - Flexible Display
      if (currentTab === 'freelance') {{
        grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6';

        list.forEach(item => {{
          const card = document.createElement('div');
          card.className = 'glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer relative';
          card.onclick = () => openCinemaModal(item);

          card.innerHTML = `
            <div class="relative w-full aspect-[9/16] bg-black overflow-hidden">
              <img src="${{item.thumbnail}}" alt="${{item.title}}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              
              <!-- Badge -->
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span class="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-cyan-400/40 text-cyan-300 truncate max-w-[85%]">
                  ${{item.badge}}
                </span>
                <span class="text-[9px] font-mono text-slate-400 bg-black/60 px-1.5 py-0.5 rounded">
                  HD
                </span>
              </div>

              <!-- Play Button Center Overlay -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <div class="w-12 h-12 rounded-full bg-neon-cyan text-obsidian-950 flex items-center justify-center shadow-neon-glow transform scale-90 group-hover:scale-110 transition-all duration-300">
                  <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              <!-- Bottom Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                <h3 class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2 leading-snug">
                  ${{item.title}}
                </h3>
                <div class="mt-2 text-[10px] font-mono text-neon-cyan/90 truncate">
                  ${{item.role}}
                </div>
              </div>
            </div>
          `;
          grid.appendChild(card);
        }});
        return;
      }}
    }}

    // Search Input Listener
    document.getElementById('projectSearchInput').addEventListener('input', (e) => {{
      searchQuery = e.target.value;
      renderProjects();
    }});

    // Cinema Modal Functions
    const modal = document.getElementById('cinemaModal');
    const modalVideo = document.getElementById('modalVideoPlayer');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const modalTitle = document.getElementById('modalTitle');
    const modalBadge = document.getElementById('modalBadge');
    const modalRole = document.getElementById('modalRole');
    const modalExternalLink = document.getElementById('modalExternalLink');

    function openCinemaModal(item) {{
      openCinemaModalBySrc(item.title, item.badge || 'VIDEO', item.role || 'Video Editor & VFX', item.video_src, item.url);
    }}

    function openCinemaModalBySrc(title, badge, role, videoSrc, externalUrl = '') {{
      playBeep(750, 0.08);
      modalTitle.textContent = title;
      modalBadge.textContent = badge;
      modalRole.textContent = role;
      
      // External link setup
      if (externalUrl && externalUrl !== '#' && externalUrl !== '') {{
        modalExternalLink.href = externalUrl;
        modalExternalLink.classList.remove('hidden');
      }} else {{
        modalExternalLink.classList.add('hidden');
      }}

      // Load Video Source with controls, preload, playsinline
      if (videoSrc) {{
        modalVideoSource.src = videoSrc;
        modalVideo.load();
        modalVideo.play().catch(() => {{
          modalVideo.muted = true;
          modalVideo.play().catch(() => {{}});
        }});
      }}

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }}

    function closeCinemaModal() {{
      modalVideo.pause();
      modalVideoSource.src = '';
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }}

    // Close on click backdrop
    modal.addEventListener('click', (e) => {{
      if (e.target === modal) {{
        closeCinemaModal();
      }}
    }});

    // Keyboard navigation (ESC to close, Space to pause/play)
    window.addEventListener('keydown', (e) => {{
      if (!modal.classList.contains('hidden')) {{
        if (e.key === 'Escape') {{
          closeCinemaModal();
        }} else if (e.key === ' ' && e.target !== modalVideo) {{
          e.preventDefault();
          if (modalVideo.paused) {{
            modalVideo.play();
          }} else {{
            modalVideo.pause();
          }}
        }}
      }}
    }});

    // Quick Contact Form Handler
    function handleFormSubmit(e) {{
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const type = document.getElementById('projectType').value;
      const message = document.getElementById('projectMessage').value;

      showToast('✓ Yêu cầu đã được ghi nhận thành công!');

      // Create Mailto Link
      const subject = encodeURIComponent(`[Hợp Tác Dự Án] - ${{type}} - ${{name}}`);
      const body = encodeURIComponent(
        `Chào Vinh Kacer,\\n\\nTôi là ${{name}} (${{email}}).\\nTôi muốn trao đổi về dự án: ${{type}}.\\n\\nNội dung chi tiết:\\n${{message}}\\n\\n---\\nGửi từ Portfolio Vinh Kacer`
      );
      const mailtoUrl = `mailto:bkchoc230801@gmail.com?subject=${{subject}}&body=${{body}}`;
      
      const successBox = document.getElementById('formSuccessMessage');
      const mailtoLink = document.getElementById('mailtoLink');
      mailtoLink.href = mailtoUrl;
      successBox.classList.remove('hidden');

      // Attempt window open
      window.location.href = mailtoUrl;
    }}

    // Initial render
    document.addEventListener('DOMContentLoaded', () => {{
      renderProjects();
    }});
  </script>
</body>
</html>'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Generated index.html successfully! Size: {os.path.getsize('index.html')} bytes")
