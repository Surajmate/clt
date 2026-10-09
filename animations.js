(function () {
  var themes = ["dark", "light", "colorful"];
  var themeColors = {
    dark: "#050816",
    light: "#f4f6fb",
    colorful: "#0b0820"
  };

  function applyTheme(theme, persist) {
    if (themes.indexOf(theme) === -1) return;
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll("[data-theme-select]").forEach(function (select) {
      select.value = theme;
    });
    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", themeColors[theme]);
    if (persist) {
      try {
        localStorage.setItem("clt-theme", theme);
      } catch (error) {
        console.warn("Theme preference could not be saved.", error);
      }
    }
  }

  var initialTheme = document.documentElement.dataset.theme || "dark";
  applyTheme(initialTheme, false);

  document.querySelectorAll("[data-theme-select]").forEach(function (select) {
    select.addEventListener("change", function () {
      applyTheme(select.value, true);
      window.closeMobileMenu();
    });
  });

  window.scrollToSection = function (id) {
    window.closeMobileMenu();
    var section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  window.toggleMobileMenu = function () {
    var menu = document.getElementById("mobile-menu");
    var icon = document.getElementById("mobile-menu-icon");
    if (!menu) return;
    menu.classList.toggle("hidden");
    if (icon) {
      icon.setAttribute(
        "data-lucide",
        menu.classList.contains("hidden") ? "menu" : "x"
      );
      if (window.lucide) window.lucide.createIcons();
    }
  };

  window.closeMobileMenu = function () {
    var menu = document.getElementById("mobile-menu");
    var icon = document.getElementById("mobile-menu-icon");
    if (menu) menu.classList.add("hidden");
    if (icon) icon.setAttribute("data-lucide", "menu");
    if (icon && window.lucide) window.lucide.createIcons();
  };

  window.openWhatsApp = function () {
    window.location.assign("https://wa.me/919226283699");
  };

  var backToTop = document.createElement("button");
  backToTop.type = "button";
  backToTop.className = "back-to-top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.setAttribute("aria-hidden", "true");
  backToTop.tabIndex = -1;
  backToTop.innerHTML = '<i data-lucide="arrow-up" class="h-5 w-5"></i>';
  document.body.appendChild(backToTop);

  function updateBackToTop() {
    var visible = window.scrollY > 400;
    backToTop.classList.toggle("is-visible", visible);
    backToTop.setAttribute("aria-hidden", String(!visible));
    backToTop.tabIndex = visible ? 0 : -1;
  }

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  var siteFooter = document.querySelector("[data-site-footer]");
  if (siteFooter) {
    siteFooter.innerHTML = `
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="index.html#home" class="flex items-center gap-3 text-white/80 transition hover:text-white">
              <img src="logo.png" alt="" class="h-10 w-10 rounded-xl object-cover">
              <span><span class="block font-semibold">Codelaunch Technologies</span><span class="mt-1 block text-xs text-white/35">Engineering the digital future</span></span>
            </a>
            <p class="mt-4 max-w-sm text-sm leading-6 text-white/45">Digital engineering, enterprise integration, cloud platforms, AI and automation for organizations building the future.</p>
            <div class="mt-5 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/135757823" target="_blank" rel="noopener noreferrer" aria-label="Codelaunch Technologies on LinkedIn" class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white/55 transition hover:bg-white/10 hover:text-white">in</a>
              <button type="button" onclick="openWhatsApp()" aria-label="Contact Codelaunch on WhatsApp" class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/55 transition hover:bg-white/10 hover:text-white"><i data-lucide="message-circle" class="h-[17px] w-[17px]"></i></button>
              <a href="mailto:info@codelaunchtechnologies.com" aria-label="Email Codelaunch Technologies" class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/55 transition hover:bg-white/10 hover:text-white"><i data-lucide="mail" class="h-[17px] w-[17px]"></i></a>
            </div>
          </div>
          <div>
            <h2 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/35">Company</h2>
            <div class="space-y-2.5 text-sm text-white/50">
              <a class="block transition hover:text-white" href="index.html#about">About</a>
              <a class="block transition hover:text-white" href="index.html#team">Our team</a>
              <a class="block transition hover:text-white" href="careers.html">Careers</a>
              <a class="block transition hover:text-white" href="index.html#work">Our work</a>
            </div>
          </div>
          <div>
            <h2 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/35">Explore</h2>
            <div class="space-y-2.5 text-sm text-white/50">
              <a class="block transition hover:text-white" href="index.html#services">Services</a>
              <a class="block transition hover:text-white" href="index.html#solutions">Solutions</a>
              <a class="block transition hover:text-white" href="index.html#aidlc">AIDLC</a>
              <a class="block transition hover:text-white" href="index.html#technology">Technology</a>
            </div>
          </div>
          <div>
            <h2 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/35">Contact</h2>
            <div class="space-y-3 text-sm text-white/50">
              <a class="flex items-center gap-2 transition hover:text-white" href="mailto:info@codelaunchtechnologies.com"><i data-lucide="mail" class="h-4 w-4"></i>info@codelaunchtechnologies.com</a>
              <a class="flex items-center gap-2 transition hover:text-white" href="tel:+919226283699"><i data-lucide="phone" class="h-4 w-4"></i>+91 9226283699</a>
              <div class="flex items-center gap-2"><i data-lucide="map-pin" class="h-4 w-4"></i>Pune, Maharashtra, India</div>
              <button type="button" onclick="openWhatsApp()" class="flex items-center gap-2 transition hover:text-white"><i data-lucide="message-circle" class="h-4 w-4"></i>Chat with us on WhatsApp</button>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/35 sm:flex-row sm:items-center">
          <span>© ${new Date().getFullYear()} Codelaunch Technologies. All rights reserved.</span>
          <span>Engineering · Integration · Cloud · AI</span>
        </div>
      </div>`;
    if (window.lucide) window.lucide.createIcons();
  }

  var heroVisual = document.querySelector(".hero-visual");
  if (heroVisual) {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function setChipPosition(chip, x, y, unit, persistPosition) {
      chip.style.setProperty("--drag-x", x + unit);
      chip.style.setProperty("--drag-y", y + unit);
      if (persistPosition) {
        chip.classList.add("is-manually-positioned");
      }
    }

    function resumeOrbitAt(chip, angle) {
      var duration = parseFloat(window.getComputedStyle(chip).animationDuration);
      if (!Number.isFinite(duration)) duration = 0;

      var progress = (angle / (Math.PI * 2) + 1) % 1;
      if (window.getComputedStyle(chip).animationDirection === "reverse") {
        progress = (1 - progress) % 1;
      }

      chip.classList.remove("is-manually-positioned");
      chip.style.removeProperty("--drag-x");
      chip.style.removeProperty("--drag-y");
      chip.style.animationDelay = "-" + duration * progress + "s";
    }

    function percentPosition(x, y, bounds) {
      return {
        x: (x / bounds.width) * 100,
        y: (y / bounds.height) * 100
      };
    }

    heroVisual.querySelectorAll(".hero-float").forEach(function (chip) {
      var label = chip.textContent.trim();
      chip.setAttribute("role", "button");
      chip.setAttribute("aria-label", "Drag to reposition " + label + " around the orbit");
      chip.setAttribute("aria-keyshortcuts", "ArrowUp ArrowDown ArrowLeft ArrowRight");
      chip.tabIndex = 0;

      var dragState = null;

      function finishDrag(event) {
        if (!dragState || (event && event.pointerId !== dragState.pointerId)) return;
        var state = dragState;
        dragState = null;
        chip.classList.remove("is-dragging");
        chip.style.removeProperty("animation-play-state");

        var visualBounds = heroVisual.getBoundingClientRect();
        if (reducedMotion.matches) {
          var position = percentPosition(state.x, state.y, visualBounds);
          setChipPosition(chip, position.x, position.y, "%", true);
        } else {
          resumeOrbitAt(chip, Math.atan2(state.y, state.x));
        }
      }

      chip.addEventListener("pointerdown", function (event) {
        if (!event.isPrimary || event.button !== 0) return;
        var visualBounds = heroVisual.getBoundingClientRect();
        var chipBounds = chip.getBoundingClientRect();
        var centerX = visualBounds.left + visualBounds.width / 2;
        var centerY = visualBounds.top + visualBounds.height / 2;
        var chipX = chipBounds.left + chipBounds.width / 2;
        var chipY = chipBounds.top + chipBounds.height / 2;

        event.preventDefault();
        chip.classList.remove("is-manually-positioned");
        chip.classList.add("is-dragging");
        chip.style.animationPlayState = "paused";
        chip.setPointerCapture(event.pointerId);
        dragState = {
          pointerId: event.pointerId,
          grabX: event.clientX - chipX,
          grabY: event.clientY - chipY,
          radius: Math.hypot(chipX - centerX, chipY - centerY),
          x: chipX - centerX,
          y: chipY - centerY
        };
      });

      chip.addEventListener("pointermove", function (event) {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        var visualBounds = heroVisual.getBoundingClientRect();
        var dx = event.clientX - dragState.grabX - (visualBounds.left + visualBounds.width / 2);
        var dy = event.clientY - dragState.grabY - (visualBounds.top + visualBounds.height / 2);
        var angle = Math.atan2(dy, dx);
        dragState.x = Math.cos(angle) * dragState.radius;
        dragState.y = Math.sin(angle) * dragState.radius;
        setChipPosition(chip, dragState.x, dragState.y, "px", false);
      });

      chip.addEventListener("pointerup", finishDrag);
      chip.addEventListener("pointercancel", finishDrag);
      chip.addEventListener("lostpointercapture", finishDrag);

      chip.addEventListener("keydown", function (event) {
        var step = {
          ArrowRight: 0.08,
          ArrowDown: 0.08,
          ArrowLeft: -0.08,
          ArrowUp: -0.08
        }[event.key];
        if (step === undefined) return;
        event.preventDefault();

        var visualBounds = heroVisual.getBoundingClientRect();
        var chipBounds = chip.getBoundingClientRect();
        var x = chipBounds.left + chipBounds.width / 2 - (visualBounds.left + visualBounds.width / 2);
        var y = chipBounds.top + chipBounds.height / 2 - (visualBounds.top + visualBounds.height / 2);
        var radius = Math.hypot(x, y);
        var angle = Math.atan2(y, x) + step;
        if (reducedMotion.matches) {
          var position = percentPosition(Math.cos(angle) * radius, Math.sin(angle) * radius, visualBounds);
          setChipPosition(chip, position.x, position.y, "%", true);
        } else {
          resumeOrbitAt(chip, angle);
        }
      });
    });
  }

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  document.documentElement.classList.add("has-reveal");

  var observer = new IntersectionObserver(
    function (entries, revealObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach(function (element) {
    observer.observe(element);
  });
})();
