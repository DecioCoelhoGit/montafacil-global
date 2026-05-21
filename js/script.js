document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // MENU MOBILE
  // =========================

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });

  }

  // =========================
  // TEMA CLARO/ESCURO
  // =========================

  const themeBtn = document.querySelector("#theme-toggle");

  if(themeBtn){

    const savedTheme =
      localStorage.getItem("montafacil-theme") || "dark";

    applyTheme(savedTheme);

    themeBtn.addEventListener("click", () => {

      const current =
        document.body.classList.contains("light-mode")
          ? "light"
          : "dark";

      const next =
        current === "dark"
          ? "light"
          : "dark";

      applyTheme(next);

    });

  }

  function applyTheme(theme){

    document.body.classList.remove(
      "light-mode",
      "dark-mode"
    );

    document.body.classList.add(`${theme}-mode`);

    localStorage.setItem(
      "montafacil-theme",
      theme
    );

  }

  // =========================
  // ACESSIBILIDADE
  // =========================

  const accessBtn =
    document.querySelector("#access-toggle");

  if(accessBtn){

    accessBtn.addEventListener("click", () => {
      document.body.classList.toggle("high-access");
    });

  }

  // =========================
  // IDIOMAS
  // =========================

  window.setLanguage = function(lang){

    console.log("Idioma:", lang);

  };

  // =========================
  // SCROLL SUAVE
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if(target){

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});

