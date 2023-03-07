
//Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:
//
//- A maior e a menor altura do grupo;
//- A média de altura dos homens;
//- O número de mulheres. 

var maiorAltura;
var menorAltura;
var numeroF = 0;
var numeroM = 0;
var somaAlturasM = 0;


for (let i = 0; i < 15; i++) {

    let recebeAltura = parseInt(prompt("Insira sua altura por favor: (em cm)"));

    let recebeSexo = prompt("Insira o seu sexo por favor: (M/F)");


    // Início da estrutura para achar maior e menor altura

    if (i == 0) {
        maiorAltura = recebeAltura;
        menorAltura = recebeAltura;
    }

    if (i > 0) {

        if (recebeAltura > maiorAltura) {
            maiorAltura = recebeAltura;
        }

        if (recebeAltura < menorAltura) {
            menorAltura = recebeAltura;
        }

    }

    // Final da estrutura para achar maior e menor altura


    // Inicio da primeira parte estrutura para achar a média da altura dos homens

    if (recebeSexo == "M") {
        somaAlturasM = somaAlturasM + recebeAltura;
    }

    if (recebeSexo == "M") {
        numeroM++
    }

    // Final da primeira parte estrutura para achar a média da altura dos homens


    // Inicio do contador do número de mulheres

    if (recebeSexo == "F") {
        numeroF++
    }

    // Final do contador do número de mulheres





}



// Inicio da segunda parte estrutura para achar a média da altura dos homens

var mediaAlturasM = (somaAlturasM / numeroM).toFixed(2);

// final da segunda parte estrutura para achar a média da altura dos homens



console.log("A maior altura é " + maiorAltura);
console.log("A menor altura é " + menorAltura);

console.log("A média das alturas de todos os homens é " + mediaAlturasM + "cm");

console.log("O número de mulheres é " + numeroF);
