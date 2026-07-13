{
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

/* ===== THEME TOGGLE ===== */
{
  const toggle = document.getElementById("themeToggle");
  const moonIcon = toggle?.querySelector(".moon-icon");
  const sunIcon = toggle?.querySelector(".sun-icon");

  function setTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    if (moonIcon) moonIcon.style.display = isDark ? "none" : "block";
    if (sunIcon) sunIcon.style.display = isDark ? "block" : "none";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  // Load saved preference
  const saved = localStorage.getItem("theme");
  if (saved === "dark") setTheme(true);

  if (toggle) {
    toggle.addEventListener("click", () => {
      setTheme(!document.body.classList.contains("dark"));
    });
  }
}

{
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = ["home", "about", "services", "work", "projects", "contact"];

  function onScroll() {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 30);

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const threshold = window.innerWidth < 768 ? 80 : 120;
      if (rect.top <= threshold && rect.bottom >= threshold) {
        navLinks.forEach((l) => l.classList.toggle("active", l.dataset.target === id));
        break;
      }
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

{
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      })
    );
  }
}

const projectsData = [
  {
    title: "ScraperStack",
    desc: "Scrapes beauty product data from Bluemercury, Macy's, and NARS — handling JS-rendered pages, pagination loops, and aggressive rate limits. Outputs clean CSVs with pricing, stock status, and reviews via Apify.",
    tags: ["Apify", "Python", "XPath"],
    svg: '<svg viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="#0d1a1a"/><rect x="20" y="20" width="180" height="130" rx="6" fill="#142222" stroke="#2a4a4a" stroke-width="1"/><rect x="20" y="20" width="180" height="24" rx="6" fill="#1a2f2f"/><rect x="20" y="36" width="180" height="8" fill="#1a2f2f"/><circle cx="34" cy="32" r="3" fill="#e85d3a" opacity="0.7"/><circle cx="44" cy="32" r="3" fill="#f0c040" opacity="0.7"/><circle cx="54" cy="32" r="3" fill="#5ca85c" opacity="0.7"/><rect x="66" y="29" width="60" height="5" rx="2" fill="#2a4a4a" opacity="0.6"/><rect x="34" y="52" width="40" height="4" rx="2" fill="#4a8c8c" opacity="0.7"/><rect x="34" y="62" width="100" height="4" rx="2" fill="#3a6a6a" opacity="0.4"/><rect x="34" y="72" width="70" height="4" rx="2" fill="#4a8c8c" opacity="0.5"/><rect x="34" y="82" width="120" height="4" rx="2" fill="#3a6a6a" opacity="0.3"/><rect x="34" y="92" width="50" height="4" rx="2" fill="#4a8c8c" opacity="0.5"/><rect x="34" y="102" width="90" height="4" rx="2" fill="#3a6a6a" opacity="0.3"/><rect x="34" y="112" width="60" height="4" rx="2" fill="#5ca0a0" opacity="0.6"/><rect x="34" y="126" width="80" height="4" rx="2" fill="#4a8c8c" opacity="0.4"/><rect x="34" y="136" width="110" height="4" rx="2" fill="#3a6a6a" opacity="0.3"/><path d="M215 90 L256 60 L256 80 L300 50" stroke="#4a8c8c" stroke-width="1.5" stroke-linecap="round" opacity="0.5" fill="none"/><polygon points="300,50 294,46 294,54" fill="#4a8c8c" opacity="0.6"/><rect x="280" y="75" width="100" height="100" rx="6" fill="#142222" stroke="#2a4a4a" stroke-width="1"/><ellipse cx="330" cy="130" rx="30" ry="20" fill="#1a2f2f" stroke="#4a8c8c" stroke-width="1" opacity="0.6"/><rect x="305" y="118" width="50" height="6" rx="3" fill="#4a8c8c" opacity="0.4"/><rect x="310" y="128" width="40" height="6" rx="3" fill="#4a8c8c" opacity="0.3"/><rect x="308" y="138" width="44" height="6" rx="3" fill="#4a8c8c" opacity="0.2"/><rect x="295" y="155" width="70" height="14" rx="3" fill="#4a8c8c" opacity="0.15"/><text x="300" y="165" fill="#4a8c8c" font-size="6" font-family="monospace" opacity="0.8">CSV</text><rect x="285" y="80" width="90" height="14" rx="3" fill="#1a2f2f" stroke="#3a6a6a" stroke-width="0.5"/><text x="290" y="90" fill="#5ca0a0" font-size="6" font-family="monospace">export.json</text><circle cx="240" cy="185" r="3" fill="#4a8c8c" opacity="0.4"/><circle cx="260" cy="195" r="2" fill="#4a8c8c" opacity="0.3"/><circle cx="280" cy="190" r="2.5" fill="#4a8c8c" opacity="0.35"/><circle cx="310" cy="195" r="2" fill="#4a8c8c" opacity="0.3"/><path d="M240 185 L260 195 L280 190 L310 195" stroke="#4a8c8c" stroke-width="0.5" opacity="0.25" fill="none"/></svg>',
  },
  {
    title: "RideReserve",
    desc: "Multi-page car booking platform with form validation, a responsive gallery, and an auth flow. Uses localStorage to persist user sessions and booking data across pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    svg: '<svg viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="#0d0a1a"/><rect x="20" y="20" width="160" height="140" rx="8" fill="#14102a" stroke="#2a2060" stroke-width="1"/><rect x="34" y="34" width="132" height="16" rx="4" fill="#1a1440"/><text x="40" y="45" fill="#6a5acd" font-size="6" font-family="monospace" font-weight="600">BOOKING DASHBOARD</text><rect x="34" y="58" width="60" height="8" rx="2" fill="#2a2060" opacity="0.5"/><rect x="102" y="58" width="64" height="8" rx="2" fill="#4a3a8a" opacity="0.3"/><rect x="34" y="74" width="132" height="50" rx="4" fill="#1a1440" stroke="#2a2060" stroke-width="0.5"/><rect x="44" y="82" width="30" height="4" rx="2" fill="#6a5acd" opacity="0.4"/><rect x="44" y="92" width="50" height="4" rx="2" fill="#6a5acd" opacity="0.3"/><rect x="44" y="102" width="40" height="4" rx="2" fill="#6a5acd" opacity="0.25"/><rect x="44" y="112" width="110" height="4" rx="2" fill="#8a7ae0" opacity="0.2"/><rect x="130" y="82" width="26" height="26" rx="4" fill="#2a2060"/><text x="138" y="98" fill="#6a5acd" font-size="10" font-family="monospace">16</text><rect x="34" y="132" width="132" height="18" rx="4" fill="#4a3a8a" opacity="0.2"/><text x="40" y="144" fill="#8a7ae0" font-size="6" font-family="monospace">CONFIRMED &#x2192; Mar 28</text><path d="M200 110 L230 90 L230 98 L260 75" stroke="#6a5acd" stroke-width="1.5" stroke-linecap="round" opacity="0.4" fill="none"/><polygon points="260,75 254,71 254,79" fill="#6a5acd" opacity="0.5"/><rect x="240" y="20" width="145" height="160" rx="8" fill="#14102a" stroke="#2a2060" stroke-width="1"/><rect x="250" y="30" width="125" height="14" rx="4" fill="#1a1440"/><text x="256" y="40" fill="#6a5acd" font-size="6" font-family="monospace">MAP VIEW</text><rect x="250" y="50" width="125" height="100" rx="4" fill="#1a1440" stroke="#2a2060" stroke-width="0.5"/><path d="M260 85 Q280 65 300 80 Q320 95 340 75" stroke="#6a5acd" stroke-width="1.5" opacity="0.5" fill="none"/><circle cx="280" cy="78" r="3" fill="#6a5acd" opacity="0.6"/><circle cx="310" cy="85" r="3" fill="#8a7ae0" opacity="0.4"/><circle cx="330" cy="72" r="2" fill="#6a5acd" opacity="0.3"/><rect x="260" y="115" width="105" height="28" rx="4" fill="#2a2060"/><text x="270" y="133" fill="#8a7ae0" font-size="7" font-family="monospace">&#x25B6; 15 min away</text><rect x="250" y="158" width="125" height="16" rx="4" fill="#4a3a8a" opacity="0.15"/><text x="256" y="169" fill="#6a5acd" font-size="5" font-family="monospace">RESERVATION #R-2847</text></svg>',
  },
  {
    title: "OtakuVerse",
    desc: "Anime community landing page with layered CSS animations, a custom scroll-triggered character gallery, and a theme-switcher that cycles through color palettes inspired by popular series.",
    tags: ["HTML", "CSS", "Animation"],
    svg: '<svg viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="#0d0515"/><line x1="0" y1="250" x2="400" y2="250" stroke="#1a0a30" stroke-width="1"/><rect x="0" y="180" width="400" height="70" fill="#1a0a30"/><rect x="0" y="190" width="400" height="60" fill="#140820"/><path d="M0 190 Q80 170 160 185 Q240 200 320 180 Q360 170 400 180 L400 250 L0 250Z" fill="#1a0a30"/><path d="M0 200 Q100 180 200 195 Q300 210 400 190 L400 250 L0 250Z" fill="#0d0515"/><circle cx="320" cy="80" r="40" fill="#ff6b9d" opacity="0.06"/><circle cx="320" cy="80" r="30" fill="#ff6b9d" opacity="0.1"/><circle cx="320" cy="80" r="20" fill="#ff6b9d" opacity="0.15"/><circle cx="320" cy="80" r="10" fill="#ff6b9d" opacity="0.25"/><circle cx="60" cy="70" r="50" fill="#a855f7" opacity="0.04"/><circle cx="60" cy="70" r="35" fill="#a855f7" opacity="0.08"/><circle cx="60" cy="70" r="20" fill="#a855f7" opacity="0.12"/><rect x="30" y="140" width="90" height="40" rx="6" fill="#1a0a30" stroke="#ff6b9d" stroke-width="0.5" opacity="0.5"/><rect x="30" y="146" width="90" height="5" rx="2" fill="#ff6b9d" opacity="0.2"/><rect x="35" y="156" width="50" height="3" rx="1.5" fill="#a855f7" opacity="0.3"/><rect x="35" y="163" width="70" height="3" rx="1.5" fill="#a855f7" opacity="0.2"/><rect x="35" y="170" width="40" height="3" rx="1.5" fill="#ff6b9d" opacity="0.25"/><rect x="280" y="130" width="90" height="50" rx="6" fill="#1a0a30" stroke="#a855f7" stroke-width="0.5" opacity="0.5"/><rect x="280" y="136" width="90" height="5" rx="2" fill="#a855f7" opacity="0.2"/><rect x="285" y="146" width="60" height="3" rx="1.5" fill="#a855f7" opacity="0.3"/><rect x="285" y="153" width="80" height="3" rx="1.5" fill="#ff6b9d" opacity="0.2"/><rect x="285" y="160" width="50" height="3" rx="1.5" fill="#a855f7" opacity="0.25"/><rect x="285" y="167" width="70" height="3" rx="1.5" fill="#a855f7" opacity="0.15"/><circle cx="50" cy="62" r="2" fill="#ff6b9d" opacity="0.4"/><circle cx="350" cy="55" r="2.5" fill="#a855f7" opacity="0.35"/><circle cx="200" cy="50" r="2" fill="#ff6b9d" opacity="0.3"/><circle cx="150" cy="68" r="1.5" fill="#a855f7" opacity="0.25"/><circle cx="250" cy="95" r="2" fill="#ff6b9d" opacity="0.3"/><circle cx="100" cy="110" r="1.5" fill="#a855f7" opacity="0.2"/></svg>',
  },
  {
    title: "BlockCraft",
    desc: "Minecraft-themed landing page with a pixel-art style guide, custom blocky UI components, and a resource pack showcase. Built as a fun crossover between game culture and responsive web design.",
    tags: ["HTML", "CSS"],
    svg: '<svg viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="#1a2a3a"/><rect x="0" y="160" width="400" height="90" fill="#2a4a2a"/><rect x="0" y="165" width="400" height="85" fill="#3a5a3a"/><rect x="0" y="190" width="400" height="60" fill="#2a4a2a"/><rect x="0" y="220" width="400" height="30" fill="#1a3a1a"/><rect x="340" y="100" width="60" height="60" fill="#6b8a5a" stroke="#4a6a3a" stroke-width="1"/><rect x="340" y="100" width="60" height="15" fill="#5a7a4a" stroke="#4a6a3a" stroke-width="1"/><rect x="340" y="160" width="60" height="30" fill="#8a6a4a" stroke="#6a4a2a" stroke-width="1"/><rect x="340" y="160" width="60" height="10" fill="#7a5a3a" stroke="#6a4a2a" stroke-width="1"/><rect x="310" y="130" width="30" height="30" fill="#7a9a6a" stroke="#5a7a4a" stroke-width="1"/><rect x="310" y="130" width="30" height="8" fill="#6a8a5a" stroke="#5a7a4a" stroke-width="1"/><rect x="280" y="160" width="60" height="30" fill="#7a9a6a" stroke="#5a7a4a" stroke-width="1"/><rect x="280" y="160" width="60" height="10" fill="#6a8a5a" stroke="#5a7a4a" stroke-width="1"/><rect x="220" y="160" width="60" height="30" fill="#8a6a4a" stroke="#6a4a2a" stroke-width="1"/><rect x="220" y="160" width="60" height="10" fill="#7a5a3a" stroke="#6a4a2a" stroke-width="1"/><rect x="160" y="160" width="60" height="30" fill="#6b8a5a" stroke="#4a6a3a" stroke-width="1"/><rect x="160" y="160" width="60" height="10" fill="#5a7a4a" stroke="#4a6a3a" stroke-width="1"/><rect x="100" y="160" width="60" height="30" fill="#8a6a4a" stroke="#6a4a2a" stroke-width="1"/><rect x="100" y="160" width="60" height="10" fill="#7a5a3a" stroke="#6a4a2a" stroke-width="1"/><rect x="40" y="160" width="60" height="30" fill="#7a9a6a" stroke="#5a7a4a" stroke-width="1"/><rect x="40" y="160" width="60" height="10" fill="#6a8a5a" stroke="#5a7a4a" stroke-width="1"/><rect x="120" y="130" width="40" height="30" fill="#6b8a5a" stroke="#4a6a3a" stroke-width="1"/><rect x="120" y="130" width="40" height="8" fill="#5a7a4a" stroke="#4a6a3a" stroke-width="1"/><rect x="40" y="120" width="40" height="40" fill="#7a9a6a" stroke="#5a7a4a" stroke-width="1"/><rect x="40" y="120" width="40" height="10" fill="#6a8a5a" stroke="#5a7a4a" stroke-width="1"/><rect x="40" y="50" width="40" height="70" fill="#5a7a4a" stroke="#3a5a3a" stroke-width="1"/><rect x="40" y="50" width="40" height="15" fill="#4a6a3a" stroke="#3a5a3a" stroke-width="1"/><rect x="40" y="50" width="40" height="10" fill="#6a8a5a" stroke="#3a5a3a" stroke-width="1"/><circle cx="60" cy="85" r="8" fill="#4a8a4a" opacity="0.5"/><rect x="120" y="60" width="30" height="70" fill="#5a7a4a" stroke="#3a5a3a" stroke-width="1"/><rect x="120" y="60" width="30" height="12" fill="#6a8a5a" stroke="#3a5a3a" stroke-width="1"/><rect x="120" y="60" width="30" height="8" fill="#4a6a3a" stroke="#3a5a3a" stroke-width="1"/><circle cx="135" cy="90" r="6" fill="#4a8a4a" opacity="0.5"/><rect x="200" y="80" width="30" height="80" fill="#5a7a4a" stroke="#3a5a3a" stroke-width="1"/><rect x="200" y="80" width="30" height="10" fill="#6a8a5a" stroke="#3a5a3a" stroke-width="1"/><rect x="200" y="80" width="30" height="8" fill="#4a6a3a" stroke="#3a5a3a" stroke-width="1"/><circle cx="215" cy="110" r="7" fill="#4a8a4a" opacity="0.4"/><circle cx="175" cy="145" r="25" fill="#ffd700" opacity="0.08"/><circle cx="175" cy="145" r="15" fill="#ffd700" opacity="0.12"/><rect x="0" y="236" width="400" height="14" fill="#1a2a1a" opacity="0.5"/><rect x="20" y="238" width="40" height="10" rx="2" fill="#4a6a4a" opacity="0.3"/><rect x="70" y="238" width="40" height="10" rx="2" fill="#6a8a5a" opacity="0.3"/><rect x="120" y="238" width="30" height="10" rx="2" fill="#4a6a4a" opacity="0.2"/></svg>',
  },
  {
    title: "TriviaArena",
    desc: "A timed quiz engine with three difficulty tiers, a scoring system that tracks streaks, and a results dashboard. Questions load from a local bank with shuffle and replay support.",
    tags: ["JavaScript", "Logic"],
    svg: '<svg viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="#0a0a14"/><rect x="20" y="30" width="230" height="160" rx="8" fill="#14142a" stroke="#2a2a5a" stroke-width="1"/><rect x="34" y="44" width="202" height="20" rx="4" fill="#1a1a3a"/><text x="44" y="58" fill="#4a4aff" font-size="7" font-family="monospace" font-weight="600">QUESTION 4 OF 10</text><rect x="34" y="72" width="202" height="60" rx="6" fill="#1a1a3a" stroke="#2a2a5a" stroke-width="0.5"/><text x="44" y="90" fill="#c0c0e0" font-size="7" font-family="sans-serif">Which sorting algorithm has</text><text x="44" y="104" fill="#c0c0e0" font-size="7" font-family="sans-serif">the best average time</text><text x="44" y="118" fill="#c0c0e0" font-size="7" font-family="sans-serif">complexity?</text><rect x="34" y="140" width="96" height="18" rx="4" fill="#1a1a3a" stroke="#4a4aff" stroke-width="0.5" opacity="0.6"/><text x="42" y="153" fill="#6a6aff" font-size="6" font-family="monospace">A. Quick Sort</text><rect x="140" y="140" width="96" height="18" rx="4" fill="#1a1a3a" stroke="#2a2a5a" stroke-width="0.5"/><text x="148" y="153" fill="#8080a0" font-size="6" font-family="monospace">B. Bubble Sort</text><rect x="34" y="164" width="96" height="18" rx="4" fill="#1a1a3a" stroke="#2a2a5a" stroke-width="0.5"/><text x="42" y="177" fill="#8080a0" font-size="6" font-family="monospace">C. Merge Sort</text><circle cx="310" cy="55" r="24" fill="none" stroke="#2a2a5a" stroke-width="4"/><circle cx="310" cy="55" r="24" fill="none" stroke="#4a4aff" stroke-width="4" stroke-dasharray="120 40" stroke-linecap="round" transform="rotate(-90 310 55)"/><text x="310" y="60" fill="#6a6aff" font-size="14" font-family="monospace" font-weight="700" text-anchor="middle">45</text><text x="310" y="90" fill="#8080a0" font-size="5" font-family="monospace" text-anchor="middle">SECONDS</text><rect x="270" y="110" width="100" height="14" rx="4" fill="#2a2a1a" stroke="#4a4a2a" stroke-width="0.5"/><text x="280" y="120" fill="#c0c040" font-size="6" font-family="monospace">&#x2605; SCORE: 2,400</text><rect x="270" y="130" width="100" height="14" rx="4" fill="#1a2a1a" stroke="#2a4a2a" stroke-width="0.5"/><text x="280" y="140" fill="#40c040" font-size="6" font-family="monospace">&#x25B6; STREAK: 3</text><rect x="270" y="150" width="100" height="14" rx="4" fill="#2a1a1a" stroke="#4a2a2a" stroke-width="0.5"/><text x="280" y="160" fill="#c04040" font-size="6" font-family="monospace">&#x2665; LIVES: 2</text><rect x="270" y="180" width="100" height="16" rx="4" fill="#ffd700" opacity="0.1" stroke="#ffd700" stroke-width="0.5" opacity="0.3"/><text x="310" y="192" fill="#ffd700" font-size="6" font-family="monospace" text-anchor="middle" font-weight="600">&#x1F3C6; LEADERBOARD</text></svg>',
  },
  {
    title: "PyLab",
    desc: "A growing collection of Python experiments — a CLI todo app, an automated file organizer, a weather fetcher using public APIs, and a terminal-based snake game. Each script is self-contained with inline docs.",
    tags: ["Python", "CLI"],
    svg: '<svg viewBox="0 0 400 250" fill="none"><rect width="400" height="250" fill="#0d0d12"/><rect x="20" y="15" width="360" height="145" rx="6" fill="#1a1a22" stroke="#2a2a3a" stroke-width="1"/><rect x="20" y="15" width="360" height="28" rx="6" fill="#22222e"/><rect x="20" y="35" width="360" height="8" fill="#22222e"/><circle cx="36" cy="29" r="4" fill="#e85d3a" opacity="0.7"/><circle cx="50" cy="29" r="4" fill="#f0c040" opacity="0.7"/><circle cx="64" cy="29" r="4" fill="#5ca85c" opacity="0.7"/><rect x="80" y="26" width="140" height="6" rx="3" fill="#2a2a3a" opacity="0.5"/><rect x="20" y="43" width="80" height="117" fill="#1a1a22" stroke="#2a2a3a" stroke-width="0.5"/><rect x="24" y="48" width="72" height="10" rx="2" fill="#2a2a3a"/><text x="28" y="55" fill="#6a6a8a" font-size="5" font-family="monospace">EXPLORER</text><text x="28" y="70" fill="#4a8a4a" font-size="5" font-family="monospace">&#x25B6; pylab</text><text x="32" y="80" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C4; todo.py</text><text x="32" y="90" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C4; organizer.py</text><text x="32" y="100" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C4; weather.py</text><text x="32" y="110" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C4; snake.py</text><text x="32" y="120" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C1; data/</text><text x="32" y="130" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C1; tests/</text><text x="32" y="140" fill="#8a8aaa" font-size="5" font-family="monospace">&#x1F4C4; readme.md</text><rect x="100" y="43" width="280" height="117" fill="#1a1a22"/><rect x="108" y="52" width="50" height="4" rx="2" fill="#4a8a8a" opacity="0.5"/><rect x="108" y="62" width="110" height="4" rx="2" fill="#6a6a8a" opacity="0.25"/><rect x="108" y="72" width="80" height="4" rx="2" fill="#4a8a8a" opacity="0.4"/><rect x="108" y="82" width="150" height="4" rx="2" fill="#6a6a8a" opacity="0.2"/><rect x="108" y="92" width="60" height="4" rx="2" fill="#4a8a8a" opacity="0.4"/><rect x="108" y="102" width="130" height="4" rx="2" fill="#6a6a8a" opacity="0.2"/><rect x="108" y="112" width="90" height="4" rx="2" fill="#4a8a8a" opacity="0.35"/><rect x="108" y="122" width="70" height="4" rx="2" fill="#6a6a8a" opacity="0.2"/><rect x="108" y="132" width="100" height="4" rx="2" fill="#4a8a8a" opacity="0.3"/><rect x="108" y="142" width="50" height="4" rx="2" fill="#6a6a8a" opacity="0.2"/><rect x="20" y="160" width="360" height="75" rx="6" fill="#14141a" stroke="#2a2a3a" stroke-width="1"/><rect x="20" y="160" width="360" height="20" rx="6" fill="#1a1a22"/><rect x="20" y="172" width="360" height="8" fill="#1a1a22"/><text x="28" y="175" fill="#6a6a8a" font-size="6" font-family="monospace" font-weight="600">TERMINAL</text><text x="32" y="195" fill="#4a8a4a" font-size="6" font-family="monospace" opacity="0.8">$ python weather.py --city Pokhara</text><text x="32" y="208" fill="#8a8aaa" font-size="6" font-family="monospace" opacity="0.6">&gt; Fetching weather data...</text><text x="32" y="221" fill="#4a8a4a" font-size="6" font-family="monospace" opacity="0.7">&gt; 22&#xB0;C | Humidity: 65% | Clear sky</text><rect x="290" y="190" width="8" height="8" rx="1" fill="#4a8a4a" opacity="0.4"/><rect x="302" y="190" width="8" height="8" rx="1" fill="#6a6a8a" opacity="0.2"/><rect x="314" y="190" width="8" height="8" rx="1" fill="#6a6a8a" opacity="0.15"/><rect x="326" y="190" width="8" height="8" rx="1" fill="#6a6a8a" opacity="0.1"/></svg>',
  },
];

const featuredSvg = '<svg viewBox="0 0 500 320" fill="none"><rect width="500" height="320" fill="#060612"/><rect width="500" height="320" fill="url(#fg)" opacity="0.3"/><defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4a3aff" stop-opacity="0.15"/><stop offset="50%" stop-color="#a855f7" stop-opacity="0.08"/><stop offset="100%" stop-color="#3a8aff" stop-opacity="0.12"/></linearGradient></defs><rect x="0" y="0" width="500" height="320" fill="url(#fg)"/><circle cx="250" cy="150" r="80" fill="none" stroke="#4a3aff" stroke-width="0.5" opacity="0.2"/><circle cx="250" cy="150" r="70" fill="none" stroke="#a855f7" stroke-width="0.3" opacity="0.15"/><circle cx="250" cy="150" r="50" fill="#4a3aff" opacity="0.04"/><ellipse cx="250" cy="150" rx="45" ry="8" fill="none" stroke="#4a3aff" stroke-width="0.5" opacity="0.3"/><ellipse cx="250" cy="150" rx="60" ry="8" fill="none" stroke="#a855f7" stroke-width="0.3" opacity="0.2" transform="rotate(30 250 150)"/><ellipse cx="250" cy="150" rx="60" ry="8" fill="none" stroke="#4a3aff" stroke-width="0.3" opacity="0.2" transform="rotate(-30 250 150)"/><path d="M40 270 Q80 260 120 265 Q160 270 200 260 Q240 250 280 258 Q320 266 360 255 Q400 244 440 252 Q460 256 480 250" stroke="#4a3aff" stroke-width="1" opacity="0.15" fill="none"/><path d="M60 280 Q100 272 140 276 Q180 280 220 270 Q260 260 300 268 Q340 276 380 265 Q420 254 460 262" stroke="#a855f7" stroke-width="0.8" opacity="0.1" fill="none"/><path d="M80 290 Q120 284 160 286 Q200 288 240 280 Q280 272 320 278 Q360 284 400 274 Q440 264 470 270" stroke="#4a3aff" stroke-width="0.5" opacity="0.08" fill="none"/><circle cx="100" cy="100" r="3" fill="#4a3aff" opacity="0.4"/><circle cx="160" cy="70" r="2" fill="#a855f7" opacity="0.35"/><circle cx="340" cy="80" r="2.5" fill="#4a3aff" opacity="0.3"/><circle cx="400" cy="110" r="2" fill="#a855f7" opacity="0.35"/><circle cx="130" cy="200" r="2" fill="#3a8aff" opacity="0.25"/><circle cx="370" cy="210" r="2.5" fill="#3a8aff" opacity="0.3"/><path d="M100 100 L160 70 L250 150 L250 150" stroke="#4a3aff" stroke-width="0.3" opacity="0.15" fill="none"/><path d="M160 70 L340 80 L250 150" stroke="#a855f7" stroke-width="0.3" opacity="0.1" fill="none"/><path d="M340 80 L400 110 L250 150" stroke="#4a3aff" stroke-width="0.3" opacity="0.12" fill="none"/><path d="M130 200 L250 150 L370 210" stroke="#3a8aff" stroke-width="0.3" opacity="0.1" fill="none"/><circle cx="250" cy="150" r="18" fill="none" stroke="#4a3aff" stroke-width="1" opacity="0.4"/><circle cx="250" cy="150" r="12" fill="none" stroke="#a855f7" stroke-width="0.5" opacity="0.3"/><circle cx="250" cy="150" r="5" fill="#4a3aff" opacity="0.5"/><rect x="60" y="45" width="80" height="50" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/><rect x="60" y="45" width="80" height="16" rx="6" fill="rgba(255,255,255,0.06)"/><rect x="60" y="55" width="80" height="6" fill="rgba(255,255,255,0.06)"/><circle cx="72" cy="53" r="3" fill="#e85d3a" opacity="0.6"/><rect x="82" y="51" width="30" height="4" rx="2" fill="rgba(255,255,255,0.08)"/><rect x="68" y="68" width="60" height="4" rx="2" fill="rgba(255,255,255,0.06)"/><rect x="68" y="76" width="40" height="4" rx="2" fill="rgba(255,255,255,0.04)"/><rect x="68" y="84" width="50" height="4" rx="2" fill="rgba(255,255,255,0.06)"/><rect x="360" y="40" width="80" height="45" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/><rect x="360" y="40" width="80" height="14" rx="6" fill="rgba(255,255,255,0.04)"/><rect x="360" y="48" width="80" height="6" fill="rgba(255,255,255,0.04)"/><circle cx="372" cy="47" r="2.5" fill="#5ca85c" opacity="0.5"/><rect x="368" y="62" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.05)"/><rect x="368" y="70" width="35" height="3" rx="1.5" fill="rgba(255,255,255,0.03)"/><rect x="375" y="78" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.04)"/><rect x="44" y="220" width="90" height="35" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/><text x="52" y="236" fill="rgba(255,255,255,0.3)" font-size="6" font-family="monospace">&#x25B6; Voice input ready</text><text x="52" y="246" fill="rgba(255,255,255,0.2)" font-size="6" font-family="monospace">Listening for wake word...</text><rect x="360" y="220" width="90" height="35" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/><circle cx="370" cy="240" r="8" fill="none" stroke="#5ca85c" stroke-width="1.5" opacity="0.4"/><circle cx="370" cy="240" r="3" fill="#5ca85c" opacity="0.5"/><text x="384" y="236" fill="rgba(255,255,255,0.25)" font-size="6" font-family="monospace">Camera active</text><text x="384" y="246" fill="rgba(255,255,255,0.15)" font-size="6" font-family="monospace">Vision ready</text></svg>';

const featuredEl = document.getElementById("featuredProject");
if (featuredEl) {
  featuredEl.innerHTML = `
    <div class="featured-inner">
      <div class="featured-visual">
        ${featuredSvg}
      </div>
      <div class="featured-body">
        <h3 class="featured-title">Liya AI Assistant</h3>
        <p class="featured-desc">A locally running AI assistant designed to provide natural conversations, voice interaction, memory, desktop automation, application launching, and intelligent assistance.</p>
        <div class="featured-features">
          <span class="featured-feature">Voice Interaction</span>
          <span class="featured-feature">Memory</span>
          <span class="featured-feature">Desktop Automation</span>
          <span class="featured-feature">Real-time Info</span>
          <span class="featured-feature">AI Conversations</span>
          <span class="featured-feature">Fast Local Performance</span>
        </div>
        <div class="project-buttons">
          <a href="https://github.com/TMGsulav/Liya-Ai" target="_blank" rel="noopener" class="project-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3C5.4.3 0 5.7 0 12.4c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.2 24 17.7 24 12.4 24 5.7 18.6.3 12 .3z"/></svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>`;
}

const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projectsGrid.innerHTML = projectsData
    .map(
      (p, i) => `
    <article class="project-card obs" style="transition-delay:${i * 80}ms">
      <div class="project-visual">
        ${p.svg}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-meta">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
      </div>
    </article>`
    )
    .join("");
}

{
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vis");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".obs").forEach((el) => observer.observe(el));
}

{
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      if (btnText) btnText.textContent = "Sending...";
      submitBtn.style.pointerEvents = "none";

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network error");
          if (btnText) btnText.textContent = "Sent! Thanks.";
        })
        .catch(() => {
          if (btnText) btnText.textContent = "Failed — try again";
          submitBtn.style.borderColor = "#e85d3a";
          submitBtn.style.color = "#e85d3a";
        });

      setTimeout(() => {
        if (btnText) btnText.textContent = "Send message";
        submitBtn.style.pointerEvents = "";
        submitBtn.style.borderColor = "";
        submitBtn.style.color = "";
        form.reset();
      }, 4000);
    });
  }
}

{
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

{
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            let current = 0;
            const increment = Math.ceil(target / 40);
            const duration = 1500;
            const stepTime = Math.floor(duration / 40);
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = target >= 1000 ? current.toLocaleString() : current;
            }, stepTime);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNumbers.forEach((el) => counterObserver.observe(el));
  }
}
