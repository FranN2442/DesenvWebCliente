let palabra = "Ana an a";

let correctWord = ""

let inputReverse ="";

let longitudPalabra = palabra.length;

function comprobarPalindromo(){


    //PASAR NIVEL 2:
    for(let e = 0; e < palabra.length; e++){

        if(palabra.charAt(e) == " "){

            console.log("Es _")

        } else {

            correctWord = correctWord + palabra.charAt(e);

        }

    }

    console.log(correctWord);

    for(let i = 0; i < longitudPalabra; i++){


        console.log(palabra);

        inputReverse = correctWord.charAt(i) + inputReverse;

        


    }

    console.log(inputReverse);

    if(correctWord.toLowerCase() == inputReverse.toLowerCase()){

        console.log("Es palindromo")

    } else {

        console.log("No es palindromo")
    }

}



