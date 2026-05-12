{
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

{
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = ["home", "about", "services", "skills", "projects", "contact"];

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
  const iconOpen = document.getElementById("menuIconOpen");
  const iconClose = document.getElementById("menuIconClose");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      if (iconOpen) iconOpen.style.display = open ? "none" : "block";
      if (iconClose) iconClose.style.display = open ? "block" : "none";
    });

    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        if (iconOpen) iconOpen.style.display = "block";
        if (iconClose) iconClose.style.display = "none";
      })
    );
  }
}

{
  const glow = document.getElementById("cursor-glow");
  if (glow) {
    let mouseX = -300, mouseY = -300;
    let currentX = -300, currentY = -300;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGlow() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }
}

const skillsData = [
  { icon: "globe", name: "HTML / CSS", level: 89, desc: "Semantic, responsive layouts" },
  { icon: "code", name: "JavaScript", level: 67, desc: "Interactive web experiences" },
  { icon: "terminal", name: "Python", level: 77, desc: "Scripts & mini projects" },
  { icon: "database", name: "Web Scraping", level: 90, desc: "Apify, XPath, extraction" },
  { icon: "cpu", name: "C Programming", level: 70, desc: "Fundamentals & logic" },
  { icon: "brain", name: "Problem Solving", level: 87, desc: "Analytical thinking" },
];

const skillIcons = {
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>`,
};

const skillsGrid = document.getElementById("skillsGrid");
if (skillsGrid) {
  skillsGrid.innerHTML = skillsData
    .map(
      (s, i) => `
    <div class="skill-card reveal-on-scroll" style="transition-delay:${i * 80}ms">
      <div class="skill-glow"></div>
      <div class="skill-header">
        <div class="skill-icon">${skillIcons[s.icon]}</div>
        <div class="skill-info">
          <div class="skill-name">${s.name}</div>
          <div class="skill-desc">${s.desc}</div>
        </div>
        <div class="skill-pct">${s.level}%</div>
      </div>
      <div class="skill-bar"><div class="skill-fill" data-level="${s.level}"></div></div>
    </div>`
    )
    .join("");
}

const projectsData = [
  { title: "Web Scraping Suite", image: "assets/scraper_ai.png", desc: "A collection of scrapers for Bluemercury, Macy's, NARS Cosmetics & more. Built using Apify, XPath and clean data extraction pipelines.", tags: ["Apify", "Python", "XPath"], gradient: "linear-gradient(135deg, oklch(0.85 0.2 200), oklch(0.65 0.27 305))", emoji: "🕷️" },
  { title: "Car Booking Website", image: "assets/car_booking_ai.png", desc: "Multi-page web app with index, about and login flows. Clean responsive UI with form validation and modern layout.", tags: ["HTML", "CSS", "JavaScript"], gradient: "linear-gradient(135deg, oklch(0.65 0.27 305), oklch(0.72 0.25 350))", emoji: "🚗" },
  { title: "Anime Themed Website", image: "assets/anime_ai.png", desc: "Modern UI with bold visuals, glass effects and smooth scrolling — built around an immersive anime aesthetic.", tags: ["HTML", "CSS", "Animation"], gradient: "linear-gradient(135deg, oklch(0.72 0.25 350), oklch(0.85 0.2 200))", emoji: "⛩️" },
  { title: "Minecraft Subpage", image: "assets/minecraft_ai.png", desc: "Themed landing subpage inspired by Minecraft — pixel vibes meets modern layout with creative design.", tags: ["HTML", "CSS"], gradient: "linear-gradient(135deg, oklch(0.85 0.2 200), oklch(0.78 0.2 145))", emoji: "⛏️" },
  { title: "Quiz Game", image: "assets/quiz_ai.png", desc: "Interactive quiz game with multiple difficulty levels, dynamic scoring, and a replay system for endless fun.", tags: ["JavaScript", "Logic"], gradient: "linear-gradient(135deg, oklch(0.85 0.18 70), oklch(0.72 0.25 350))", emoji: "🎮" },
  { title: "Python Mini Projects", image: "assets/python_ai.png", desc: "A growing collection of bite-sized Python experiments — automation scripts, CLI tools, and tiny games.", tags: ["Python", "CLI"], gradient: "linear-gradient(135deg, oklch(0.65 0.27 305), oklch(0.7 0.2 240))", emoji: "🐍" },
];

const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projectsGrid.innerHTML = projectsData
    .map(
      (p, i) => `
    <article class="project-card reveal-on-scroll" style="transition-delay:${i * 80}ms">
      <div class="project-header" style="background:${p.gradient}">
        <img src="${p.image}" alt="${p.title}" class="project-image" loading="lazy" />
        <div class="project-header-overlay"></div>
        <span class="project-emoji">${p.emoji}</span>
        <span class="project-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L19 9l-4.6 1.9L12 16l-1.9-5.1L5 9l5.1-1.4L12 3z"/></svg>
          Featured
        </span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
        <div class="project-links">
          <a href="#" class="project-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Live Demo</a>
          <a href="#" class="project-link"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3C5.4.3 0 5.7 0 12.4c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.2 24 17.7 24 12.4 24 5.7 18.6.3 12 .3z"/></svg> Source</a>
        </div>
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
          entry.target.classList.add("visible");
          const fill = entry.target.querySelector(".skill-fill");
          if (fill) {
            requestAnimationFrame(() => {
              fill.style.width = fill.dataset.level + "%";
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
}

{
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const btnIcon = document.getElementById("btnIcon");

  if (form) {
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.closest(".form-group").style.transform = "translateX(4px)";
      });
      input.addEventListener("blur", function () {
        this.closest(".form-group").style.transform = "translateX(0)";
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      if (btnText) btnText.textContent = "Sending...";
      submitBtn.style.pointerEvents = "none";
      submitBtn.style.opacity = "0.7";

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network error");
          if (btnText) btnText.textContent = "Message Sent!";
          if (btnIcon) {
            btnIcon.innerHTML = `<polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2.5" fill="none"/>`;
          }
          submitBtn.style.background = "linear-gradient(135deg, oklch(0.75 0.2 145), oklch(0.85 0.2 200))";
          submitBtn.style.opacity = "1";
        })
        .catch(() => {
          if (btnText) btnText.textContent = "Failed — try again";
          submitBtn.style.background = "linear-gradient(135deg, oklch(0.72 0.25 25), oklch(0.78 0.18 55))";
          submitBtn.style.opacity = "1";
          setTimeout(() => {
            if (btnText) btnText.textContent = "Send Message";
            submitBtn.style.background = "";
            submitBtn.style.pointerEvents = "";
            if (btnIcon) {
              btnIcon.innerHTML = `<line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2" fill="none"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor"/>`;
            }
          }, 3000);
          return;
        });

      setTimeout(() => {
        if (btnText) btnText.textContent = "Send Message";
        btnIcon.innerHTML = `<line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2" fill="none"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor"/>`;
        submitBtn.style.background = "";
        submitBtn.style.pointerEvents = "";
        submitBtn.style.opacity = "1";
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
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

{
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

{
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("is-resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("is-resizing");
    }, 200);
  });
}
