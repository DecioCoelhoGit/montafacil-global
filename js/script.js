document.addEventListener("DOMContentLoaded", () => {
  window.toggleTheme = function () {
    document.body.classList.toggle("light-mode");
  };

  window.toggleAccess = function () {
    document.body.classList.toggle("access-premium");
  };

  window.setLang = function (lang) {
    const dict = {
      pt: "Ecossistema Inteligente de Serviços, Logística e Integração Comercial",
      en: "Intelligent Ecosystem for Services, Logistics and Commercial Integration",
      es: "Ecosistema Inteligente de Servicios, Logística e Integración Comercial"
    };

    const el = document.querySelector("[data-i18n='hero-subtitle']");
    if (el) el.textContent = dict[lang];
  };

  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
0

