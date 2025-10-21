document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animação para todas as seções.
  // Usamos .from() aqui porque .section não tem um estado inicial de opacidade 0 no CSS.
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Animação para os cards com stagger.
  // Usamos .to() aqui porque .card já tem opacity: 0 e transform no CSS.
  gsap.utils.toArray(".cards-grid").forEach((grid) => {
    gsap.to(grid.querySelectorAll(".card"), {
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  // Animação para os boxes de impacto.
  // Usamos .to() aqui porque .impact-box já tem opacity: 0 e transform no CSS.
  if (document.querySelector(".impact-grid")) {
    gsap.to(".impact-box.positive", {
      scrollTrigger: {
        trigger: ".impact-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    });

    gsap.to(".impact-box.negative", {
      scrollTrigger: {
        trigger: ".impact-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
  }
});
