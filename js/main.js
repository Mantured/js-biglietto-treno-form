/* Il programma dovrà mostrare una form (a piacere) da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.27 € al km)
va applicato uno sconto del 17% per i minorenni
va applicato uno sconto del 33% per gli over 65.
L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
In questo caso richiederà un minimo di ricerca l'uso della select.
Vi allego un'immagine esplicativa, ma potete usare la creatività e implementare layout diversi e creativi!! */

function calculatorPrice() {
    /* const calculator = document.querySelector(`calculator`); */
    const userId = document.getElementById(`user`).value;
    const distance = document.getElementById(`km`).value;
    const age = document.getElementById(`age`).value;

    let ticketType = "";


    let vagon = Math.floor(Math.random() * 20) + 1;
    let id = Math.floor(Math.random() * 100000) + 1;


    const fullPrice = distance * 0.27;
    let ticketPrice; 

    ticketPrice = fullPrice * 0.83;
    if ( age === "minorenne" ) {
        ticketType = `Biglietto Smart `
    } else if (age === "anziano") {
        ticketPrice = fullPrice * 0.67;
        ticketType = `Biglietto SmartOver `
    } else {
        ticketPrice = fullPrice;
        ticketType = `Biglietto Standard `
    }
    
    ticketPrice = (ticketPrice).toFixed(2);

    document.getElementById(`user-credits`).innerHTML = userId;
    document.getElementById(`ticket-type`).innerHTML = ticketType;
    document.getElementById(`my-vagon`).innerHTML = vagon;
    document.getElementById(`my-id`).innerHTML = id;
    document.getElementById(`ticket-price`).innerHTML = `${ticketPrice}€`;
    document.getElementById(`user-ticket`).classList.remove(`invisible`);

    console.log(userId);
    console.log(ticketType);
    console.log(vagon);
    console.log(id);
    console.log(ticketPrice);
}


function clear() {
    document.getElementById(`user-ticket`).classList.add(`invisible`);
    document.getElementById(`credentials`).innerHTML+= "";
    document.getElementById(`tripdistance`).innerHTML += "";
    document.getElementById(`age`).innerHTML += "";


}

document.getElementById(`submit`).addEventListener(`click`, calculatorPrice);
document.getElementById(`reset`).addEventListener(`click`, clear);


function saveInfo() {
    let newRow = document.createElement(`div`);
    const saveUser = document.getElementById(`user`).value;
    const saveKm = document.getElementById(`km`).value;
    const saveAge = document.getElementById(`age`).value;
    const savePrice = document.getElementById(`ticket-price`).value;

    newRow.innerHTML = `<span> ${saveUser}</span> <span> ${saveKm} Km </span> <span> ${saveAge} </span> <span> ${savePrice} € </span>`;
    document.querySelector(`#user-ticket`).appendChild(newRow); 
} 


document.getElementById(`save`).addEventListener(`click`, saveInfo);








