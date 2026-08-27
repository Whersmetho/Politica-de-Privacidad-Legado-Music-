/**
 * Vista previa interactiva del dashboard.
 * No hay backend conectado todavía: esto solo demuestra la interacción
 * (pestañas, contadores animados) para que la maqueta se sienta viva.
 * Punto de integración futura: OAuth2 de Discord + API de Legado Music.
 */
(function () {
  "use strict";

  var panels = {
    resumen: {
      title: "Resumen del servidor",
      sub: "Vista previa de la futura administración.",
      stats: [
        { label: "Canciones reproducidas", value: 1284, suffix: "" },
        { label: "Tiempo de reproducción", value: 47, suffix: " h" },
        { label: "Comandos utilizados", value: 3092, suffix: "" },
      ],
    },
    musica: {
      title: "Música",
      sub: "Cola y controles de reproducción por servidor.",
      stats: [
        { label: "En cola ahora", value: 6, suffix: "" },
        { label: "Canal de voz activo", value: 1, suffix: "" },
        { label: "Volumen", value: 80, suffix: "%" },
      ],
    },
    configuracion: {
      title: "Configuración",
      sub: "Prefijos, canales permitidos y comportamiento del bot.",
      stats: [
        { label: "Comandos habilitados", value: 24, suffix: "" },
        { label: "Canales configurados", value: 5, suffix: "" },
        { label: "Idiomas activos", value: 1, suffix: "" },
      ],
    },
    permisos: {
      title: "Permisos",
      sub: "Roles con acceso a comandos administrativos.",
      stats: [
        { label: "Roles con acceso", value: 3, suffix: "" },
        { label: "Usuarios con veto", value: 2, suffix: "" },
        { label: "Comandos restringidos", value: 7, suffix: "" },
      ],
    },
    estadisticas: {
      title: "Estadísticas",
      sub: "Actividad agregada de los últimos 30 días.",
      stats: [
        { label: "Miembros activos", value: 412, suffix: "" },
        { label: "Sesiones de escucha", value: 189, suffix: "" },
        { label: "Errores registrados", value: 3, suffix: "" },
      ],
    },
  };

  var tabs = document.querySelectorAll("[data-tab]");
  var titleEl = document.querySelector("[data-dash-title]");
  var subEl = document.querySelector("[data-dash-sub]");
  var statEls = document.querySelectorAll("[data-stat]");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateValue(el, target, suffix) {
    if (reduceMotion) {
      el.textContent = target.toLocaleString("es-ES") + suffix;
      return;
    }
    var start = 0;
    var duration = 700;
    var startTime = null;
    function step(ts) {
      if (startTime === null) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (target - start) * eased);
      el.textContent = current.toLocaleString("es-ES") + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function renderPanel(key) {
    var panel = panels[key];
    if (!panel) return;
    if (titleEl) titleEl.textContent = panel.title;
    if (subEl) subEl.textContent = panel.sub;
    statEls.forEach(function (el, i) {
      var data = panel.stats[i];
      if (!data) return;
      var labelEl = el.querySelector("small");
      var valueEl = el.querySelector("b");
      if (labelEl) labelEl.textContent = data.label;
      if (valueEl) animateValue(valueEl, data.value, data.suffix);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderPanel(tab.getAttribute("data-tab"));
    });
  });

  if (tabs.length) {
    renderPanel(tabs[0].getAttribute("data-tab"));
  }

  var connectBtn = document.querySelector("[data-connect-discord]");
  if (connectBtn) {
    connectBtn.addEventListener("click", function (e) {
      e.preventDefault();
      connectBtn.textContent = "Próximamente";
      connectBtn.classList.add("is-disabled");
      connectBtn.setAttribute("aria-disabled", "true");
    });
  }
})();
