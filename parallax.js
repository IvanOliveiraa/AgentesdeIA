document.addEventListener('DOMContentLoaded', () => {

  // Altura da seção Hero (usada como ponto de referência para o desaparecimento)
  const heroHeight = window.innerHeight;

  // Seleciona as camadas específicas
  const robotLeftLayer = document.querySelector('.robot-left-layer');
  const robotRightLayer = document.querySelector('.robot-right-layer');
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

    const yOffset = -(scrollRatio * diagonalSpeedY);

    if (robotLeftLayer) {
      const xOffsetLeft = scrollRatio * diagonalSpeedX;

      robotLeftLayer.style.opacity = opacity;
      robotLeftLayer.style.transform = `translate3d(${xOffsetLeft}px, ${yOffset}px, 0)`;
    }

    if (robotRightLayer) {

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
