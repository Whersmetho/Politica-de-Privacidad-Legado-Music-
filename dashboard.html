(function () {
  "use strict";

  var cfg = window.LEGADO_CONFIG || {};

  // 1) Aplica la configuración central a cualquier elemento marcado con data-config
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    var value = cfg[key];
    if (!value) return;
    if (el.hasAttribute("href")) {
      el.setAttribute("href", value);
    } else {
      el.textContent = value;
    }
  });

  // 2) Menú móvil accesible
  var toggle = document.querySelector(".nav-toggle");
  var navlinks = document.querySelector(".navlinks");
  if (toggle && navlinks) {
    toggle.addEventListener("click", function () {
      var open = navlinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    navlinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navlinks.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // 3) Resalta el enlace de navegación activo
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here) {
      a.setAttribute("aria-current", "page");
    }
  });

  // 4) Revela elementos al hacer scroll (respeta prefers-reduced-motion)
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    }
  }
})();
