/* Il programma dovrà mostrare una form (a piacere) da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.27 € al km)
va applicato uno sconto del 17% per i minorenni
va applicato uno sconto del 33% per gli over 65.
L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
In questo caso richiederà un minimo di ricerca l'uso della select.
Vi allego un'immagine esplicativa, ma potete usare la creatività e implementare layout diversi e creativi!! */


function calculatorPrice()  {
    const userId = document.getElementById(`user`).value;
    const distance = document.getElementById(`km`).value;
    const age = document.getElementById(`age`).value;
    let ticketType = "";

    const fullPrice = distance * 0.27;
    let ticketPrice; //dichiarazione senza inizializzazione

    if ( age === "1" ) {
        ticketPrice = fullPrice * 0.83;
        ticketType = `Biglietto Smart `
    } else if (age === "3") {
        ticketPrice = fullPrice * 0.67;
        ticketType = `Biglietto SmartOver `
    } else {
        ticketPrice = fullPrice;
        ticketType = `Biglietto Standard `
    }

    console.log(ticketPrice);

    document.getElementById(`user-credits`).innerHTML = userId;
    document.getElementById(`ticket-type`).innerHTML = ticketType;
    
}

document.getElementById(`submit`).addEventListener(`click`, calculatorPrice);





/* const userId = document.getElementById(`user`).value;
const distance = document.getElementById(`km`).value;
const age = document.getElementById(`age`).value; */


/* console.log(userId);
console.log(distance);
console.log(age); */





