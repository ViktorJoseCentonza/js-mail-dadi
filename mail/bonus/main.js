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

if (mail_list.indexOf(user_mail) != -1) {
    alert("access granted!")
} else {
    alert("access denied.");
}
