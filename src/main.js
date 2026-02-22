// ===== MENU MOBILE (PROFISSIONAL E SEGURO) =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {

  // Abrir / fechar menu
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("nav--open");
    burger.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");
  });

  // Fechar ao clicar em link (mobile)
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    nav.classList.remove("nav--open");
    burger.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove("nav--open");
      burger.classList.remove("is-active");
      document.body.classList.remove("no-scroll");
    }
  });

  // Se voltar para desktop, garantir que feche
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      nav.classList.remove("nav--open");
      burger.classList.remove("is-active");
      document.body.classList.remove("no-scroll");
    }
  });
}