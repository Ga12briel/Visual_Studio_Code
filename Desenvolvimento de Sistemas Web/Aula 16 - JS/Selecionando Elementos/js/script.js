// Selecionando o elemento por ID no JS
console.log("Selecionando o elemento por ID");
var tituloSecao = document.getElementById("titulo-secao");
console.log(tituloSecao);

// Selecionado o elemento por classe
console.log("Selecionando o elemento por Classe");
var paragrafos = document.getElementsByClassName("descricao");
console.log(paragrafos);
var paragrafos2 = document.getElementsByClassName("descricao2");
console.log(paragrafos2);

// Selecionado o elemento por Tag
console.log("Selecionando o elemento por Tag");
var paragrafos3 = document.getElementsByTagName("p")
console.log(paragrafos3)

// Seletores por CSS
console.log("Seletores CSS");
var itensLista = document.querySelectorAll("#lista .item");
console.log(itensLista);
var itensLista2 = document.querySelectorAll(".item");
console.log(itensLista2);
var paragrafos4 = document.querySelectorAll("p");
console.log(paragrafos4);
var tituloSecao2 = document.querySelector("#titulo-secao")
console.log(tituloSecao2);
var itensLista3 = document.querySelector("#lista")
console.log(itensLista3);
