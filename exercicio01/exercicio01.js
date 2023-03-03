var alturas = [];
var sexos = [];

var contador = 0;

while (contador < 3) {
    
    alturas.push(prompt("Insira o sua altura em cm:"));
   
    sexos.push(prompt("Insira o seu sexo: (M ou F)"));
    contador++;
};


alturas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });

sexos.forEach(function (item, indice, array) {
    console.log(item, indice);
});



