/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
*/

const user_numb = Math.floor(Math.random() * 6) + 1;
const pc_numb = Math.floor(Math.random() * 6) + 1;

if (pc_numb < user_numb) {
    alert(`you won! `)
} else if (pc_numb > user_numb) {
    alert(`you lost! `)
} else {
    alert(`it's a draw! `)
}

alert(`your number ${user_numb} pc's number ${pc_numb}`)
