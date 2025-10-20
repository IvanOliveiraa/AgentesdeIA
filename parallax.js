document.addEventListener('DOMContentLoaded', () => {

  // Altura da seção Hero (usada como ponto de referência para o desaparecimento)
  const heroHeight = window.innerHeight;

  // Seleciona as camadas específicas
  const backgroundLayer = document.querySelector('.background-layer');
  const robotLeftLayer = document.querySelector('.robot-left-layer');
  const robotRightLayer = document.querySelector('.robot-right-layer'); // RESTAURADO
  const heroContent = document.querySelector('.hero-content');

  function updateParallax() {
    // Posição de rolagem atual
    const scrollPosition = window.scrollY;

    // ------------------ 1. Fundo (Movimento Y Simples) ------------------

    // Seção da Hero está fora da tela? (Define o ponto final do efeito)
    const scrollRatio = Math.min(scrollPosition / heroHeight, 1);

    // ------------------ 2. Robôs (Movimento Diagonal e Opacidade) ------------------

    // Parâmetros de Movimento Diagonal 
    const diagonalSpeedY = 400;
    const diagonalSpeedX = 400;

    // Calcula Opacidade (diminui de 1 para 0)
    const opacity = 1 - scrollRatio;

    if (heroContent) {
      heroContent.style.opacity = 1 - scrollRatio;
    }

    // Movimento Vertical (Y): Sempre sobe (negativo)
    const yOffset = -(scrollRatio * diagonalSpeedY);

    // Aplica transformações ao Robô da Esquerda
    if (robotLeftLayer) {
      // Movimento Horizontal (X): Para a direita (em direção ao centro)
      const xOffsetLeft = scrollRatio * diagonalSpeedX;

      robotLeftLayer.style.opacity = opacity;
      robotLeftLayer.style.transform = `translate3d(${xOffsetLeft}px, ${yOffset}px, 0)`;
    }

    // Aplica transformações ao Robô da Direita (RESTAURADO)
    if (robotRightLayer) {
      // Movimento Horizontal (X): Para a esquerda (em direção ao centro)
      const xOffsetRight = -(scrollRatio * diagonalSpeedX);

      robotRightLayer.style.opacity = opacity;
      robotRightLayer.style.transform = `translate3d(${xOffsetRight}px, ${yOffset}px, 0)`;
    }
  }

  // Listener
  window.addEventListener('scroll', updateParallax);

  // Chamada inicial
  updateParallax();
});


// ========================================
// Adiciona Estrelas
// ========================================
document.addEventListener("DOMContentLoaded", () => {

  const starfield = document.getElementById("starfield");

  const starfieldoverlay = document.getElementById("starfieldoverlay");
  const numStars = 150;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starfield.appendChild(star);
  }

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starfieldoverlay.appendChild(star);
  }
  // ========================================
  // 2. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ========================================
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Visível quando 20% do elemento aparece
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // Revela as Seções (Sections)
        if (target.classList.contains("section")) {
          target.classList.add("visible");
        }

        // Animação Sequencial de Cards (O Que São)
        if (
          target.classList.contains("cards-grid") ||
          target.classList.contains("stats-grid")
        ) {
          const children = target.querySelectorAll(".card, .stat-box");
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("visible");
              // Inicia o contador se for a seção de stats
              if (child.classList.contains("stat-box")) {
                animateStat(child.querySelector(".stat-number"));
              }
            }, 150 * index);
          });
        }

        // Animação Sequencial dos Nós do Ciclo E SETAS
        if (target.classList.contains("cycle-container")) {
          const nodes = target.querySelectorAll(".cycle-node");
          const arrows = target.querySelectorAll(".cycle-arrow");

          nodes.forEach((node, index) => {
            setTimeout(() => {
              node.classList.add("visible");
              // Anima a seta após o nó (se existir)
              if (arrows[index]) {
                arrows[index].classList.add("visible");
              }
            }, 200 * index);
          });
        }

        // Animação da Timeline
        if (target.classList.contains("timeline")) {
          const items = target.querySelectorAll(".timeline-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
              item
                .querySelector(".timeline-dot")
                .classList.add("visible");
            }, 300 * index);
          });
        }

        // Animação dos Boxes de Impacto
        if (target.classList.contains("impact-grid")) {
          target.querySelectorAll(".impact-box").forEach((box, index) => {
            setTimeout(() => {
              box.classList.add("visible");
            }, 300 * index);
          });
        }
      }
    });
  }, observerOptions);

  // Observar os containers para disparar as animações dos filhos
  document
    .querySelectorAll(
      ".section, .cards-grid, .cycle-container, .timeline, .impact-grid, .stats-grid"
    )
    .forEach((el) => {
      observer.observe(el);
    });
});