// // Versão do Slide;
// var count = 11;
// do {
//   document.write(count);
//   count++;
// } while (count <= 10)
// document.write('<br>');

// // Versão Modificada 1;
// var count = 0;
// do {
//   document.write(count);
//   count++;
// } while (count <= 10)
// document.write('<br>');

// Versão Modificada 2;
do {
  R = 0
  var count = 0;
  do {
    count++;
    alert(count);
  } while (count <= 10)
  var R = parseInt(prompt('Quer que repita o processo? \n \n (1) Sim \n (2) Não'))
} while (R == 1)
