// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



let pcNumber;

let numbersList = [];


for ( let i = 0; i < 5; i++){
    pcNumber = randomNumberOnly(numbersList, 1, 100);

    numbersList.push(pcNumber);

    document.getElementById("numbers").innerHTML += ` ${pcNumber} `;
}

setTimeout(function (){
    document.getElementById("numbers").innerHTML = ``;
}, 2990);

setTimeout(function (){

    let counter = 0;

    let listRightNumbers = [];

    for ( let i = 1; i <= 5; i++){

        let userNumber = parseInt( prompt( `Inserisci il ${i}° numero che hai visto`));

        console.log(userNumber);

        if ((numbersList.includes(userNumber))){

            counter ++;

            listRightNumbers.push(userNumber);

        }

    }

    if(counter == 0){

        document.getElementById("numbers").innerHTML = `Mi dispiace hai una cattiva memoria non hai indovinato nemmeno un numero`;
    }
    else{
        document.getElementById("numbers").innerHTML = `Bravo! Numeri indovinati: ${counter} ; numeri : ${listRightNumbers}`;
    }

    


}, 3000);














/**
 * function that generates a random number that is not present in the list given as an argument and that is between a minimum number and a maximum number also passed as arguments
 * 
 * @param {*} listUnavailableNumber 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */

 function randomNumberOnly (listUnavailableNumber,min, max){

    let randomNumber;

    let flag = false;

    while (!flag){

        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

        if(!(listUnavailableNumber.includes(randomNumber))){
            flag = true;
        }

    }

    return randomNumber;
}