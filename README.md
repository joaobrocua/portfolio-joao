# João Pedro Brocuá — Portfólio Pessoal

Site pessoal de apresentação, feito com **HTML, CSS e JavaScript puro** (sem
frameworks ou build tools).

## 🔗 Sobre

Portfólio de página única (single-page) com informações pessoais, formação
acadêmica, experiência profissional, projetos, habilidades técnicas e canais
de contato.

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, Grid, Flexbox, animações)
- JavaScript vanilla (sem dependências)
- Fontes: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)
  e [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), via Google Fonts

## 📁 Estrutura de arquivos

├── index.html → estrutura e conteúdo do site
├── style.css → estilos, paleta de cores, responsividade
├── script.js → interações (digitação, relógio, abas, cópia de e-mail, scroll)
└── assets/
├── foto-perfil.jpeg
└── projetos/ → screenshots dos projetos exibidos na seção Projetos


## ✨ Seções

| Seção | Conteúdo |
|---|---|
| **Hero** | Nome gigante, cargo (com efeito de digitação), foto e selo de disponibilidade |
| **Marquee** | Faixa animada com a stack técnica |
| **Sobre (01)** | Apresentação pessoal + cards de destaque (experiência, graduação, especialidade) |
| **Stack (02)** | Tecnologias, ferramentas e idiomas |
| **Projetos (03)** | Repositórios fixados: FinTrack, Portal Contábil e Caderno de Cinema, com preview, tags e links de código/demo |
| **Experiência (04)** | Trajetória profissional em abas (cargo ativo + painel de atividades) |
| **Formação (05)** | Graduação em destaque + grid de cursos complementares |
| **Contato (06)** | Bloco de destaque com email, LinkedIn e GitHub |

## 🎨 Identidade visual

O portfólio é desenhado com uma linguagem de **perfil de desenvolvedor / editor
de código** — fundo quase-preto, tipografia grande e confiante, e um acento
verde-limão usado para tudo que é interativo ou "vivo" no site.

- Paleta: fundo `#0B0C0D`, texto principal `#EFEDE6`, tons secundários
  `#C9C7BE` / `#A8A69C` / `#7C7A70`, acento verde-limão `#C6F24E`
- Tipografia: **Bricolage Grotesque** (display, caixa-alta, bem grande) e
  **IBM Plex Mono** (texto e interface)
- Grid de fundo sutil (linhas finas de 72px) em vez de texturas ou blobs
- Elementos de assinatura: relógio local de Rondonópolis-MT, ponto pulsante de
  "disponível", digitação do cargo no hero e marquee infinito com a stack
- Experiência apresentada em abas (cargo ativo tem borda/fundo verde
  translúcido), com transição suave ao trocar de cargo
- Bloco de contato como um "cartão cheio" verde-limão, com cards que invertem
  cor no hover
- Micro-interações: `IntersectionObserver` não é mais necessário (layout
  sem seções escondidas), mas mantém `prefers-reduced-motion` respeitado no
  marquee, na digitação e no ponto pulsante
