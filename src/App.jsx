import './App.css';

const skills = {
  backend: [
    ['Java', 'Linguagem principal'],
    ['Spring Boot', 'APIs REST'],
    ['PostgreSQL', 'Persistência'],
    ['Arquitetura em Camadas', 'Código escalável']
  ],
  cloud: [
    ['AWS', 'Em evolução'],
    ['Docker', 'Containers'],
    ['CI/CD', 'Entrega contínua'],
    ['Observabilidade', 'Métricas e logs']
  ],
  frontend: [
    ['React', 'UI moderna'],
    ['HTML5', 'Estrutura'],
    ['CSS3', 'Estilo']
  ]
};

const projectHighlights = [
  'Arquitetura em camadas (Controller, Service, Repository)',
  'Regras de negócio centralizadas na Service Layer',
  'Tratamento global de exceções',
  'Boas práticas para APIs REST',
  'Testes unitários'
];

function SkillSection({ title, subtitle, items }) {
  return (
    <div className="skill-block">
      <h3>{title}</h3>
      <p className="muted">{subtitle}</p>
      <div className="skills-grid">
        {items.map(([name, detail]) => (
          <article className="skill-card" key={name}>
            <h4>{name}</h4>
            <small>{detail}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="space-bg" aria-hidden="true" />

      <header>
        <div className="container nav-wrap">
          <div className="logo">Lucas Figueiredo Cabral</div>
          <nav>
            <a href="#about">Sobre</a>
            <a href="#skills">Competências</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-content">
            <p className="eyebrow">Portfolio • Backend + Cloud</p>
            <h1>
              Construindo sistemas robustos
              <span> com visão de escala.</span>
            </h1>
            <p>
              Sou Lucas Cabral, estudante de Análise e Desenvolvimento de Sistemas no IFPE,
              focado em engenharia de software para backend com Java e Spring Boot — e em evolução
              contínua para cloud computing.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Ver Projetos</a>
              <a className="btn ghost" href="https://github.com/Lucasfcz" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>Sobre Mim</h2>
            <div className="cards-2">
              <article className="panel">
                <h3>Objetivo Profissional</h3>
                <p>
                  Tenho 18 anos e meu foco é atuar como Software Engineer com especialização
                  em backend e cloud, desenvolvendo sistemas confiáveis, bem arquitetados e
                  preparados para crescimento.
                </p>
              </article>
              <article className="panel">
                <h3>Abordagem</h3>
                <p>
                  Aprendo de forma prática, transformando teoria em projetos reais. Valorizo
                  código limpo, responsabilidade técnica e evolução constante em arquitetura,
                  infraestrutura e qualidade de software.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2>Competências Técnicas</h2>
            <SkillSection
              title="Backend"
              subtitle="Arquitetura, regras de negócio e APIs REST."
              items={skills.backend}
            />
            <SkillSection
              title="Cloud Journey"
              subtitle="Evoluindo para engenharia de software orientada a nuvem."
              items={skills.cloud}
            />
            <SkillSection
              title="Frontend"
              subtitle="Base para construir interfaces claras e funcionais."
              items={skills.frontend}
            />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Projeto em Destaque</h2>
            <article className="project-card">
              <p className="tag">Java • Spring Boot • PostgreSQL</p>
              <h3>Fluxbank API</h3>
              <p>
                API REST em Java com Spring Boot, desenhada com foco em organização,
                consistência de regras financeiras e manutenibilidade no longo prazo.
              </p>
              <ul>
                {projectHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="https://github.com/Lucasfcz/FluxbankAPI" target="_blank" rel="noreferrer" className="btn primary">
                Ver repositório
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-wrap">
          <h2>Contato</h2>
          <div className="links">
            <a href="mailto:lucasfc080@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lucas-cabral-2432633a6/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Lucasfcz" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p>© 2026 Lucas Figueiredo Cabral — Software Engineer</p>
        </div>
      </footer>
    </>
  );
}