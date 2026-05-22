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


.secondary-menu {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  padding: 10px 14px 14px;
  background: rgba(3, 10, 24, 0.96);
  border-bottom: 1px solid rgba(0, 255, 120, 0.18);
  scrollbar-width: none;
}

.secondary-menu::-webkit-scrollbar {
  display: none;
}

.secondary-menu a {
  flex: 0 0 auto;
  text-decoration: none;
  color: #00ff88;
  font-weight: 800;
  padding: 10px 18px;
  border: 1px solid rgba(0, 255, 120, 0.35);
  border-radius: 999px;
  background: rgba(0, 255, 120, 0.06);
  box-shadow: 0 0 18px rgba(0, 255, 120, 0.12);
}

.secondary-menu a:hover {
  color: #ffd24a;
  border-color: rgba(255, 210, 74, 0.55);
}

document.addEventListener("DOMContentLoaded", () => {
  window.toggleTheme = function () {
    document.body.classList.toggle("light-mode");
  };

  window.toggleAccess = function () {
    document.body.classList.toggle("access-premium");
  };

  window.setLang = function (lang) {
    document.documentElement.lang = lang;
    alert("Idioma selecionado: " + lang.toUpperCase());
  };
});
