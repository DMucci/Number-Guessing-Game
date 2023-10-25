// Good luck!

// Variables de estado iniciales. 

let correctNumber = Math.floor(Math.random() * 101);
let remainingAttempts = 10;
let previousGuesses = [];

// Actualizar el textContent de los nodos iniciales 
document.querySelector("#remaining-guesses").textContent = remainingAttempts

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Impedimos que el formulario haga un petición GET(PreventDefault-->Previene lo que tiene que hacer ese evento)

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el correctNumber. Tomar decisiones
  let userValueInput = +document.querySelector("#guessField").value;

  //1. Si el numero es mayor que correctNumber,tenemos que decirle que el numero que tiene que poner es menor.
  //1.1 Actualizar el elemento del DOM. lowOrHi, propiedad .textContent, con el mensaje adecuado

  //3. Decrementar el numero de intentos (remainingAttempts)
  remainingAttempts--

  if (userValueInput > correctNumber
  ) {
    document.querySelector(".lowOrHi").textContent = "To High! Try again!"
  }
  //2. Si el numero es menor que correctNumber,tenemos que decirle que el numero que tiene que poner es mayor.
  //2.1 Actualizar el elemento del DOM. lowOrHi, propiedad .textContent, con el mensaje adecuado
  else if (userValueInput < correctNumber) {
    document.querySelector(".lowOrHi").textContent = "To Low! Try again!"
  }
  else if (userValueInput == correctNumber) {
    document.querySelector(".lowOrHi").textContent = "You Win!"
    // Actualizar el mensaje con un mensaje de victoria. 
    // Desactivar el input donde el usuario pone el numero. Teneis que ver por internet como podemos poner como disabled ese input.
    document.getElementById("guessField").disabled = true;
    // Ocultamos mediante la propiedad .style adecuada, el boton "Submit Guess"
    document.querySelector("#subt").style.visibility = "hidden"
    // document.querySelector("#subt").style.display = "none"

  } else if (remainingAttempts==0) {
    document.querySelector(".lowOrHi").textContent = "You Lose!"
    // Actualizar el mensaje con un mensaje de derrota. 
    // Desactivar el input donde el usuario pone el numero. Teneis que ver por internet como podemos poner como disabled ese input.
    document.getElementById("guessField").disabled = true;
    // Ocultamos mediante la propiedad .style adecuada, el boton "Submit Guess"
    document.querySelector("#subt").style.visibility = "hidden"
    // document.querySelector("#subt").style.display ="none"
  }
  //4. Actualizar el elemento del DOM donde se ven el número de intentos en el nodo "remaining-guesses"
  document.querySelector("#remaining-guesses").textContent = remainingAttempts

  //5. Cada vez que probamos un nuevo numero, tenemos que añadirlo al array previousGuesses
  previousGuesses.push(userValueInput);

  //6. Tenemos que actualizar el nodo #previous-guesses con el valor del array anterior
  document.querySelector("#previous-guesses").textContent = previousGuesses.join(" - ")  //(join es para añadir otro elemento siempre que hacemos el push)
  //Limpiamos el input
  document.querySelector("#guessField").value= "";
});

