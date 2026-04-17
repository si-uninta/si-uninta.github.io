/**
 * SI.UNINTA — main.js
 * Módulos: Navbar, Reveal, Counter, Disciplinas, Accordion, Filter
 */

'use strict';

/* ═══════════════════════════════════════
   DADOS — Disciplinas
   ═══════════════════════════════════════ */
const DISCIPLINAS = [
  {
    icon: '🧮', title: 'Lógica Matemática Computacional',
    desc: 'Fundamentos da lógica proposicional, predicados, autômatos e prova formal aplicados à computação.',
    sem: '1º Sem', cat: 'prog', tag: 'Fundamentos', link: '#'
  },
  {
    icon: '💻', title: 'Algoritmos e Programação',
    desc: 'Lógica de programação, estruturas de controle, funções e introdução a linguagens de programação.',
    sem: '1º Sem', cat: 'prog', tag: 'Programação', link: '#'
  },
  {
    icon: '🗄️', title: 'Banco de Dados I',
    desc: 'Modelagem entidade-relacionamento, normalização, SQL e sistemas gerenciadores de banco de dados.',
    sem: '2º Sem', cat: 'bd', tag: 'Banco de Dados', link: '#'
  },
  {
    icon: '🗃️', title: 'Banco de Dados II',
    desc: 'Transações, concorrência, otimização de consultas, banco de dados NoSQL e distribuído.',
    sem: '3º Sem', cat: 'bd', tag: 'Banco de Dados', link: '#'
  },
  {
    icon: '🏗️', title: 'Engenharia de Software I',
    desc: 'Modelos de processo, elicitação de requisitos, UML, padrões de projeto e testes de software.',
    sem: '3º Sem', cat: 'es', tag: 'Eng. Software', link: '#'
  },
  {
    icon: '🔧', title: 'Engenharia de Software II',
    desc: 'Gerência de configuração, qualidade de software, métricas e manutenção de sistemas.',
    sem: '4º Sem', cat: 'es', tag: 'Eng. Software', link: '#'
  },
  {
    icon: '🌐', title: 'Programação Web',
    desc: 'HTML, CSS, JavaScript, frameworks front-end, back-end com Node.js/PHP e APIs RESTful.',
    sem: '3º Sem', cat: 'prog', tag: 'Programação', link: '#'
  },
  {
    icon: '📱', title: 'Tópicos em Desenvolvimento Mobile',
    desc: 'Android, iOS, React Native, Flutter e publicação nas lojas de aplicativos.',
    sem: '6º Sem', cat: 'prog', tag: 'Programação', link: '#'
  },
  {
    icon: '⚙️', title: 'DevOps',
    desc: 'CI/CD, Docker, Kubernetes, monitoramento, DevSecOps e infraestrutura como código.',
    sem: '7º Sem', cat: 'es', tag: 'Eng. Software', link: '#'
  },
  {
    icon: '📋', title: 'Gestão de Projetos de TI',
    desc: 'PMBOK, Scrum, Kanban, gestão de riscos, custos e planejamento de projetos de software.',
    sem: '4º Sem', cat: 'ges', tag: 'Gestão', link: '#'
  },
  {
    icon: '🤖', title: 'Inteligência Artificial',
    desc: 'Algoritmos de busca, aprendizado de máquina, redes neurais e aplicações em SI.',
    sem: '5º Sem', cat: 'prog', tag: 'Programação', link: '#'
  },
  {
    icon: '🌱', title: 'UCE IV — Meio Ambiente',
    desc: 'Curricularização da extensão: ESG, e-lixo, responsabilidade socioambiental e projetos comunitários.',
    sem: '4º Sem', cat: 'ext', tag: 'Extensão', link: '#'
  },
];

/* ═══════════════════════════════════════
   DADOS — Semestres
   ═══════════════════════════════════════ */
const SEMESTRES = [
  {
    num: '01', title: 'Bases da Computação',
    info: '6 disciplinas · 330h',
    discs: ['Algoritmos e Programação', 'Lógica Matemática Computacional', 'Fundamentos de SI', 'Matemática Discreta', 'Comunicação e Expressão', 'Introdução à Administração']
  },
  {
    num: '02', title: 'Estruturas e Dados',
    info: '6 disciplinas · 330h',
    discs: ['Estruturas de Dados', 'Banco de Dados I', 'Programação Orientada a Objetos', 'Sistemas Operacionais', 'Cálculo', 'Comportamento Organizacional']
  },
  {
    num: '03', title: 'Sistemas e Engenharia',
    info: '6 disciplinas · 330h',
    discs: ['Banco de Dados II', 'Engenharia de Software I', 'Programação Web', 'Redes de Computadores', 'Teoria da Computação', 'Estatística Aplicada']
  },
  {
    num: '04', title: 'Gestão e Extensão',
    info: '6 disciplinas · 345h',
    discs: ['Engenharia de Software II', 'Gestão de Projetos de TI', 'Sistemas de Informação Gerenciais', 'UCE IV — Meio Ambiente', 'Arquitetura de Software', 'Segurança da Informação']
  },
  {
    num: '05', title: 'Inteligência e Dados',
    info: '6 disciplinas · 330h',
    discs: ['Inteligência Artificial', 'Mineração de Dados', 'Computação em Nuvem', 'Interação Humano-Computador', 'Empreendedorismo em TI', 'Auditoria de SI']
  },
  {
    num: '06', title: 'Aplicações Avançadas',
    info: '6 disciplinas · 330h',
    discs: ['Tópicos em Desenvolvimento Mobile', 'Sistemas Distribuídos', 'Governança de TI', 'Análise e Projeto de Sistemas', 'Tópicos Especiais em ES', 'UCE VI']
  },
  {
    num: '07', title: 'Especialização',
    info: '5 disciplinas + PS I · 345h',
    discs: ['DevOps', 'Computação Gráfica', 'Direito e TI', 'Projeto Supervisionado I', 'Sistemas de Informação e Sustentabilidade']
  },
  {
    num: '08', title: 'TCC e Formatura',
    info: '4 disciplinas + PS II · 345h',
    discs: ['Projeto Supervisionado II (TCC)', 'Tópicos em Inovação', 'Estágio Supervisionado', 'Atividades Complementares', 'Defesa do TCC']
  },
];

/* ═══════════════════════════════════════
   MÓDULO: Tema Claro/Escuro
   ═══════════════════════════════════════ */
function initTheme() {
  const html   = document.documentElement;
  const btn    = document.getElementById('themeToggle');
  const KEY    = 'si-uninta-theme';

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    // Troca todas as logos para a versão correta
    document.querySelectorAll('.brand-logo').forEach(img => {
      img.src = theme === 'light'
        ? 'images/logo_blue.png'
        : 'images/logo_white.png';
    });
  }

  // Aplica tema salvo ou dark por padrão
  const saved = localStorage.getItem(KEY) || 'dark';
  applyTheme(saved);

  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(KEY, next);
  });
}

/* ═══════════════════════════════════════
   MÓDULO: Navbar
   ═══════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Fechar ao clicar em link
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ═══════════════════════════════════════
   MÓDULO: Reveal on Scroll
   ═══════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay por posição na lista
          const delay = (i % 4) * 80;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════
   MÓDULO: Counter Animation
   ═══════════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quint
    const eased = 1 - Math.pow(1 - progress, 5);
    el.textContent = Math.round(eased * target).toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(c => observer.observe(c));
}

/* ═══════════════════════════════════════
   MÓDULO: Render Disciplinas
   ═══════════════════════════════════════ */
function renderDisciplinas() {
  const grid = document.getElementById('discGrid');
  if (!grid) return;

  grid.innerHTML = DISCIPLINAS.map((d, i) => `
    <article class="disc-card" data-cat="${d.cat}" style="animation-delay:${(i % 6) * 60}ms">
      <div class="disc-card-header">
        <div class="disc-icon">${d.icon}</div>
        <span class="disc-sem">${d.sem}</span>
      </div>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
      <div class="disc-card-footer">
        <span class="disc-tag">${d.tag}</span>
        <a href="${d.link}" class="disc-link">Ver mais →</a>
      </div>
    </article>
  `).join('');
}

/* ═══════════════════════════════════════
   MÓDULO: Filtro de Disciplinas
   ═══════════════════════════════════════ */
function initFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('discGrid');
  if (!grid) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards = grid.querySelectorAll('.disc-card');

      cards.forEach((card, i) => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          card.style.animationDelay = `${(i % 6) * 60}ms`;
          card.style.animation = 'none';
          // Force reflow
          void card.offsetWidth;
          card.style.animation = '';
        }
      });
    });
  });
}

/* ═══════════════════════════════════════
   MÓDULO: Accordion de Semestres
   ═══════════════════════════════════════ */
function renderSemestres() {
  const container = document.getElementById('semAccordion');
  if (!container) return;

  container.innerHTML = SEMESTRES.map((s, i) => `
    <div class="sem-item reveal" style="transition-delay:${i * 50}ms">
      <button class="sem-header" data-idx="${i}" aria-expanded="false">
        <div class="sem-header-left">
          <span class="sem-num">${s.num}</span>
          <div class="sem-title-info">
            <h4>${s.title}</h4>
            <span>${s.info}</span>
          </div>
        </div>
        <div class="sem-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>
      <div class="sem-body">
        <div class="sem-body-inner">
          ${s.discs.map(d => `<div class="sem-disc-item">${d}</div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.sem-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.sem-item');
      const isOpen = item.classList.contains('open');

      // Fechar todos
      container.querySelectorAll('.sem-item').forEach(i => i.classList.remove('open'));
      container.querySelectorAll('.sem-header').forEach(b => b.setAttribute('aria-expanded', 'false'));

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ═══════════════════════════════════════
   MÓDULO: Ano no Footer
   ═══════════════════════════════════════ */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  renderDisciplinas();
  renderSemestres();
  initReveal();
  initCounters();
  initFilter();
  initYear();
});
