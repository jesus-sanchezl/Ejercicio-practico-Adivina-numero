"use strict";

function quiz() {
  const secretNum = Math.floor(Math.random() * 21);


  for (let intentos = 5; intentos >= 1; intentos--) {
    const userNum = +prompt(
      `Te quedan ${intentos} intentos. Introduce un número entre 0 y 20:`
    );

    if (userNum === secretNum) {
      return alert("¡Has ganado! 🎉");
    }

    if (userNum < secretNum) {
      alert("El número secreto es más alto...");
    } else {
      alert("El número secreto es más bajo...");
    }
  }

  alert("Has perdido... ☠");
}

quiz();
