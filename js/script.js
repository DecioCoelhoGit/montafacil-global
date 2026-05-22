document.addEventListener("DOMContentLoaded", () => {
  window.toggleTheme = () => document.body.classList.toggle("light-mode");
  window.toggleAccess = () => document.body.classList.toggle("access-premium");

  window.setLang = function (lang) {
  document.querySelectorAll("[data-pt][data-en][data-es]").forEach((el) => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  document.documentElement.lang = lang;
  localStorage.setItem("montafacil_lang", lang);
};

  document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("montafacil_lang") || "pt";
  setLang(savedLang);
});
  
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
