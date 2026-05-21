document.addEventListener("DOMContentLoaded", () => {
  window.toggleTheme = () => document.body.classList.toggle("light-mode");
  window.toggleAccess = () => document.body.classList.toggle("access-premium");

  window.setLang = (lang) => {
    const t = {
      pt: "Ecossistema Inteligente de Serviços, Logística e Integração Comercial",
      en: "Intelligent ecosystem for services, logistics and commercial integration",
      es: "Ecosistema inteligente de servicios, logística e integración comercial"
    };
    const el = document.querySelector("[data-i18n='hero-subtitle']");
    if (el) el.textContent = t[lang] || t.pt;
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
