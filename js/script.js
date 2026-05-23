function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

function toggleAccess() {
  document.body.classList.toggle("access-premium");
}

function setLang(lang) {
  document.querySelectorAll("[data-pt][data-en][data-es]").forEach((el) => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  document.documentElement.lang = lang;
  localStorage.setItem("montafacil_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("montafacil_lang") || "pt";
  setLang(savedLang);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
