// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



let pcNumber;

let numbersList = [];

let output = document.getElementById("numbers");


for ( let i = 0; i < 5; i++){
    pcNumber = randomNumberOnly(numbersList, 1, 100);

    numbersList.push(pcNumber);

    output.innerHTML += ` ${pcNumber}    `;
}

setTimeout(function (){
    output.innerHTML = ``;
    output.classList.remove("border", "border-primary");
}, 2990);

setTimeout(function (){

    let counter = 0;

    let listRightNumbers = [];

    let listUnavailableNumber = [];

    for ( let i = 1; i <= 5; i++){

        let flag = false;

        while (!flag){

            let userNumber = parseInt( prompt( `Inserisci il ${i}° numero che hai visto`));
    
            if(!(listUnavailableNumber.includes(userNumber))){
                flag = true;
                listUnavailableNumber.push(userNumber);
                if ((numbersList.includes(userNumber))){

                    counter ++;
        
                    listRightNumbers.push(userNumber);
        
                }
            }
    
        } 

    }

    if(counter == 0){

        output.innerHTML = `Mi dispiace hai una cattiva memoria non hai indovinato nemmeno un numero`;
        output.classList.add("border", "border-danger");
    }
    else{
        output.innerHTML = `Bravo! Numeri indovinati: ${counter} ; numeri : ${listRightNumbers}`;
        output.classList.add("border", "border-success");
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