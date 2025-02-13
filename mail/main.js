/*
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio)
----------------------------------
Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
*/

const mail_list = ["giovanni@gmail.com", "francesco@gmail.com", "ludovico@gmail.com", "paolo@gmail.com"];
const user_mail = prompt("inserisci la tua mail per la verifica a database.")
let found = false;


for (let i = 0; found == false; i++) { //keep going until email is found
    console.log(`check n*${i + 1}`);
    console.log(mail_list[i]);
    if (typeof mail_list[i] == 'undefined') { //break if array cell is empty (end of array)
        alert(`access denied. ${user_mail} does not exist`)
        break;
    } else if (mail_list[i] == user_mail) { //break if email found
        alert(`access granted! Welcome ${user_mail}`)
        found = true;
        break;
    }
}

