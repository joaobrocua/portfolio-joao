// Ano dinâmico no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Relógio de Rondonópolis-MT (America/Cuiaba)
const horaEl = document.getElementById("hora");
function atualizarHora() {
  horaEl.textContent = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Cuiaba",
  });
}
atualizarHora();
setInterval(atualizarHora, 20000);

// Efeito de digitação alternando o cargo no hero
const typedRole = document.getElementById("typedRole");
const PAPEIS = [
  "Estudante de Sistemas da Informação",
  "Agente de Registro ICP-Brasil",
  "Entusiasta de análise de dados",
];

if (prefersReducedMotion) {
  typedRole.textContent = PAPEIS[0];
} else {
  let papelIndex = 0;
  let charIndex = 0;
  let fase = "digita";
  let esperaTicks = 0;

  function tickPapel() {
    const alvo = PAPEIS[papelIndex];
    if (fase === "digita") {
      if (charIndex < alvo.length) {
        charIndex += 1;
        typedRole.textContent = alvo.slice(0, charIndex);
      } else {
        fase = "espera";
        esperaTicks = 0;
      }
    } else if (fase === "espera") {
      esperaTicks += 1;
      if (esperaTicks > 28) fase = "apaga";
    } else {
      if (charIndex > 0) {
        charIndex -= 1;
        typedRole.textContent = alvo.slice(0, charIndex);
      } else {
        papelIndex = (papelIndex + 1) % PAPEIS.length;
        fase = "digita";
      }
    }
    setTimeout(tickPapel, 62);
  }
  tickPapel();
}

// Copiar e-mail
const copyEmailBtn = document.getElementById("copyEmailBtn");
const EMAIL = "jbrocua@gmail.com";
copyEmailBtn.addEventListener("click", () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(EMAIL).catch(() => {});
  }
  copyEmailBtn.textContent = "E-mail copiado ✓";
  setTimeout(() => {
    copyEmailBtn.textContent = "Copiar e-mail";
  }, 2200);
});

// Abas de experiência
const VAGAS = [
  {
    cargo: "Agente de Registro",
    periodo: "2023 — Atual",
    empresa: "Facilita Certificadora Digital · Rondonópolis, MT",
    atividades: [
      "Emissão e validação de certificados digitais (SOLUTI), garantindo conformidade e agilidade no processo.",
      "Atendimento presencial a clientes, esclarecendo dúvidas sobre certificação digital e documentação necessária.",
      "Conferência e organização de documentos, assegurando precisão antes da emissão dos certificados.",
    ],
  },
  {
    cargo: "Assistente Administrativo",
    periodo: "2022 — 2023",
    empresa: "Escritório Carvalho Contabilidade · Rondonópolis, MT",
    atividades: [
      "Suporte às rotinas administrativas, contribuindo para a organização do fluxo de trabalho.",
      "Digitalização e organização de documentos, otimizando o processo de arquivamento.",
      "Atendimento a clientes, auxiliando em demandas administrativas do dia a dia.",
    ],
  },
];

const tabAgente = document.getElementById("tabAgente");
const tabAssistente = document.getElementById("tabAssistente");
const jobContent = document.getElementById("jobContent");
const jobPeriodo = document.getElementById("jobPeriodo");
const jobCargo = document.getElementById("jobCargo");
const jobEmpresa = document.getElementById("jobEmpresa");
const jobAtividades = document.getElementById("jobAtividades");

let vagaAtual = 0;

function preencherVaga(index) {
  const vaga = VAGAS[index];
  jobPeriodo.textContent = vaga.periodo;
  jobCargo.textContent = vaga.cargo;
  jobEmpresa.textContent = vaga.empresa;
  jobAtividades.innerHTML = "";
  vaga.atividades.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="job-panel__marker">▚</span>${item}`;
    jobAtividades.appendChild(li);
  });

  [tabAgente, tabAssistente].forEach((tab, i) => {
    const ativo = i === index;
    tab.classList.toggle("is-active", ativo);
    tab.setAttribute("aria-selected", String(ativo));
  });
}

function mostrarVaga(index) {
  if (index === vagaAtual) return;
  vagaAtual = index;

  if (prefersReducedMotion) {
    preencherVaga(index);
    return;
  }

  jobContent.classList.add("is-switching");
  setTimeout(() => {
    preencherVaga(index);
    jobContent.classList.remove("is-switching");
  }, 180);
}

tabAgente.addEventListener("click", () => mostrarVaga(0));
tabAssistente.addEventListener("click", () => mostrarVaga(1));
