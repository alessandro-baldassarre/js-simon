// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// variables
let pcNumber;

let numbersList = [];

let output = document.getElementById("numbers");

// for loop to create 5 random numbers and display them on the screen
for ( let i = 0; i < 5; i++){
    pcNumber = randomNumberOnly(numbersList, 1, 100);

    numbersList.push(pcNumber);

    output.innerHTML += `  ${pcNumber}  `;
}

// timingfunction to reset the display of numbers from the screen
setTimeout(function (){
    output.innerHTML = ``;
    output.classList.remove("border", "border-primary");
}, 2990);

// timingfunction that starts after 30 seconds
setTimeout(function (){

    let counter = 0;

    let listRightNumbers = [];

    let listUnavailableNumber = [];

    // for loop to have the user enter the numbers to guess five times

    for ( let i = 1; i <= 5; i++){

        let flag = false;

        // check that verifies that the user does not enter the same number more than once
        while (!flag){

            let userNumber = parseInt( prompt( `Inserisci il ${i}° numero che hai visto`));
            
            // when the number is available I insert it in the list of numbers entered by the user and compare it with the random number list created previously
            if(!(listUnavailableNumber.includes(userNumber))){
                flag = true;
                listUnavailableNumber.push(userNumber);
                if ((numbersList.includes(userNumber))){

                    // when a number corresponds to one of the random list I increase the counter and insert it in the list of guessed numbers
                    counter ++;
        
                    listRightNumbers.push(userNumber);
        
                }
            }
    
        } 

    }

    // check with the counter how many numbers the user has guessed and print it on the screen
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