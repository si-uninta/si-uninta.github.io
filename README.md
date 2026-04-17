# SI.UNINTA — Sistemas de Informação

> Site institucional do curso de Bacharelado em Sistemas de Informação da **UNINTA Campus Tianguá**, com materiais, disciplinas e recursos acadêmicos para os estudantes.

---

## Sobre o Projeto

Este é um site estático hospedado via **GitHub Pages** que centraliza informações do curso de SI da UNINTA Tianguá:

- Apresentação do curso (grau, turno, duração, campus)
- Catálogo de disciplinas em destaque com filtros por categoria
- Grade curricular completa dos 8 semestres (acordeão interativo)
- Recursos acadêmicos: Template ABNT, Guia do Estudante, Extensão, ENADE, etc.

## Estrutura

```
si-uninta.github.io/
├── index.html       # Página única (SPA-like)
├── css/
│   └── style.css    # Estilos (tema dark, variáveis CSS, responsivo)
└── js/
    └── main.js      # Módulos: Navbar, Reveal, Counter, Disciplinas, Accordion, Filter
```

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Markup | HTML5 semântico |
| Estilos | CSS3 com Custom Properties (sem framework) |
| Scripts | JavaScript vanilla (ES6+, módulos funcionais) |
| Fontes | Google Fonts — Syne, DM Sans, DM Mono |
| Hospedagem | GitHub Pages |

## Funcionalidades

- **Navbar fixa** com scroll detection e menu hambúrguer responsivo
- **Animações de entrada** via IntersectionObserver (`.reveal`)
- **Contadores animados** com easing suave (Semestres, Horas/Aula, Disciplinas)
- **Filtro de disciplinas** por categoria (Programação, BD, Gestão, Eng. Software, Extensão)
- **Acordeão de semestres** com animação de altura via CSS (`max-height`)
- **Design responsivo** com breakpoints em 900px, 700px e 480px

## Curso

| | |
|---|---|
| **Grau** | Bacharel em Sistemas de Informação |
| **Turno** | Noturno |
| **Campus** | UNINTA Tianguá — Ceará |
| **Duração** | 8 semestres (4 anos) |
| **Carga Horária** | 3.200 horas/aula |
| **Disciplinas** | ~45 |

## Desenvolvimento local

Basta abrir `index.html` no navegador — não há dependências de build.

```bash
# Com Python (qualquer versão):
python -m http.server 8080

# Com Node.js (npx):
npx serve .
```

Acesse em `http://localhost:8080`.

## Deploy

O site é publicado automaticamente pelo **GitHub Pages** a partir da branch `main`. Qualquer push para `main` atualiza o site em `https://si-uninta.github.io`.

---

*Conteúdo para fins acadêmicos — Sistemas de Informação · UNINTA Tianguá*
