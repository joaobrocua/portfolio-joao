# teste-portfolio

# João Pedro Brocuá — Portfólio Pessoal

Site pessoal de apresentação, feito com **HTML, CSS e JavaScript puro** (sem
frameworks ou build tools).

## 🔗 Sobre

Portfólio de página única (single-page) com informações pessoais, formação
acadêmica, experiência profissional, habilidades técnicas e canais de contato.

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Grid, Flexbox, animações)
- JavaScript vanilla (sem dependências)
- Fontes: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk),
  [Inter](https://fonts.google.com/specimen/Inter) e
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), via Google Fonts

## 📁 Estrutura de arquivos

├── index.html → estrutura e conteúdo do site
├── style.css → estilos, paleta de cores, responsividade
├── script.js → interações (menu, animações, scroll)
└── assets/
└── foto-perfil.jpeg


## ✨ Seções

| Seção | Conteúdo |
|---|---|
| **Hero** | Nome, cargo (com efeito de digitação), foto e status de disponibilidade |
| **Sobre mim** | Apresentação pessoal e área de atuação |
| **Habilidades** | Tecnologias, ferramentas, idiomas e comportamentos, em painel compacto |
| **Experiência** | Trajetória profissional em formato de linha do tempo |
| **Formação** | Graduação e cursos complementares |
| **Contato** | Email, LinkedIn e GitHub |

## 🎨 Identidade visual

- Tema claro, com paleta **âmbar (`#c2660a`) + violeta (`#6d4aff`)**
- Fundo com textura sutil (grid) e elementos decorativos (anéis, blobs de luz,
  glifo `</>`) para fugir do visual genérico
- Micro-interações: efeito de digitação no cargo, animações de entrada ao
  rolar a página (fade/slide via `IntersectionObserver`), e uma notificação
  "conquista desbloqueada" ao chegar na seção de Experiência
