import { SnakeGame, startSnake } from "./games/snake";

document.addEventListener("DOMContentLoaded", () => {

  // bouton mini-jeu
  const gameBtn = document.querySelector(".secondary");

  if (!gameBtn) return;

  gameBtn.addEventListener("click", () => {

    // évite plusieurs snakes
    if (document.getElementById("snake")) return;

    // injecte le jeu à la fin de la page
    document.body.insertAdjacentHTML(
      "beforeend",
      SnakeGame()
    );

    startSnake();
  });

});