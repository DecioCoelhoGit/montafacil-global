document.addEventListener("DOMContentLoaded", () => {
  window.toggleTheme = () => document.body.classList.toggle("light-mode");
  window.toggleAccess = () => document.body.classList.toggle("access-premium");

  window.setLang = (lang) => {
    const textos = {
      pt: "Ecossistema Inteligente de Serviços, Logística e Integração Comercial",
      en: "Intelligent Ecosystem for Services, Logistics and Commercial Integration",
      es: "Ecosistema Inteligente de Servicios, Logística e Integración Comercial"
    };

    document.querySelectorAll("[data-i18n='hero-subtitle']").forEach(el => {
      el.textContent = textos[lang] || textos.pt;
    });
  };

  document.querySelectorAll("nav a, .menu a, .hero-actions a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
