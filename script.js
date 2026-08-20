// Ano dinâmico no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Tela de "boot" rápida ao carregar a página
const bootScreen = document.getElementById("bootScreen");
const bootText = document.getElementById("bootText");
const bootMessage = "carregando_perfil.exe";
let bootIndex = 0;

function typeBoot() {
  if (bootIndex <= bootMessage.length) {
    bootText.textContent = bootMessage.slice(0, bootIndex);
    bootIndex += 1;
    setTimeout(typeBoot, 45);
  } else {
    setTimeout(() => bootScreen.classList.add("is-hidden"), 350);
  }
}
typeBoot();

// Efeito de "digitação" alternando o cargo no hero
const typedRole = document.getElementById("typedRole");
const roles = [
  "Estudante de Sistemas da Informação",
  "Agente de Registro na Facilita Certificadora Digital",
  "Explorando Python, dados e web",
  "Sempre pronto para o próximo desafio",
];
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;

function tickRole() {
  const current = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typedRole.textContent = current.slice(0, charIndex);

  let delay = deleting ? 30 : 55;

  if (!deleting && charIndex === current.length) {
    deleting = true;
    delay = 1800;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(tickRole, delay);
}
setTimeout(tickRole, 1800);

// Menu mobile (hambúrguer)
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu mobile ao clicar em um link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Navbar com fundo mais sólido ao rolar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? "0 6px 24px -12px rgba(0,0,0,0.5)"
    : "none";
});

// Animações de entrada (fade/slide) via IntersectionObserver
const revealEls = document.querySelectorAll("[data-reveal]");
const barFills = document.querySelectorAll(".bar-fill");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

barFills.forEach((el) => barObserver.observe(el));

// Toast de "conquista desbloqueada" ao ver a seção de Experiência pela 1ª vez
const toast = document.getElementById("toast");
const experienceSection = document.getElementById("experiencia");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

if (experienceSection) {
  const achievementObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showToast("🏆 Conquista desbloqueada: Experiência Profissional");
          achievementObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  achievementObserver.observe(experienceSection);
}
