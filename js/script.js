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

function shareSite() {
  const shareData = {
    title: "MontaFácil Global",
    text: "Conheça a MontaFácil Global — Ecossistema Inteligente de Serviços, Logística, Marketplace e IA.",
    url: "https://deciocoelhogit.github.io/montafacil-global/"
  };

  if (navigator.share) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(shareData.url);
    alert("Link copiado para compartilhar!");
  }
}

function copyEmail() {
  navigator.clipboard.writeText("montafacilglobal@gmail.com");
  alert("E-mail copiado: montafacilglobal@gmail.com");
}
