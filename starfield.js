//arquivo geração estrelas
document.addEventListener("DOMContentLoaded", () => {

  const starfield = document.getElementById("starfield");

  const starfieldoverlay = document.getElementById("starfieldoverlay");
  const numStars = 150;
  //geração estrelas bg
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starfield.appendChild(star);
  }
  //geração estrelas por cima do fade overlay da hero section
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starfieldoverlay.appendChild(star);
  }
});
