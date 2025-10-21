
document.addEventListener("DOMContentLoaded", () => {


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
                const statNumber = child.querySelector(".stat-number");
                if (statNumber) {
                  animateStat(statNumber);
                }
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
