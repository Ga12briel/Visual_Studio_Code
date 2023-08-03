window.alert("Este algoritmo realiza cálculos matemáticos");
window.alert("Veja qual o número respectivo ao cálculo que deseja fazer: ");
window.alert("1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Potenciação \n 6 - Radiciação \n 7 - Porcentagem \n 8 - Média Aritmética \n 9 - Média Ponderada \n 10 - Média Geométrica \n 11 - Média Harmônica");
let op = prompt("Digite o número respectivo ao calculo que deseja fazer: ");
let a = 0;
let b = 0;
let c = 0;
let n = 0;
let r = 0;
let d = 0;
op = parseInt(op);
switch (op) {
	case 1:
  	n = prompt("Digite quantos números você ira usar na conta: ");
    do {
    	c += 1;
      a = prompt("Digite o "+c+"° número: ");
      a = parseInt(a)
      r = r + a;
    } while (c != n);
    break;
  case 2:
  	n = prompt("Digite quantos números você ira usar na conta: ");
    do {
    	c += 1;
      a = prompt("Digite o "+c+"° número: ");
      a = parseInt(a)
      r = a - r
    } while (c != n);
    break;
  case 3:
  	a = prompt("Digite o primeiro número: ");
		b = prompt("Digite o segundo número: ");
  	r = a * b;
    break;
  case 4:
  	a = prompt("Digite o primeiro número: ");
		b = prompt("Digite o segundo número: ");
  	r = a / b;
    break;
  case 5:
  	a = prompt("Digite o número: ");
		b = prompt("Digite a potência do número: ");
  	r = a**b;
  	break;
  case 6:
  	a = prompt("Digite o radicando: ");
		b = prompt("Digite o índice: ");
  	r = Math.pow(a,1/b)
  	break;
  case 7:
  	a = prompt("Digite quanto porcento você quer saber de um número: ");
		b = prompt("Digite o número: ");
  	r = (a/100)*b;
  	break;
	case 8:
  	n = prompt("Digite quantos números você ira usar na conta: ");
    do {
    	c += 1;
      a = prompt("Digite o "+c+"° número: ");
      a = parseInt(a);
      r = a + r;
    } while (c != n);
    r = r / c;
  	break;
	case 9:
  	n = prompt("Digite quantos números você ira usar na conta: ");
    do {
    	c += 1;
      a = prompt("Digite o "+c+"° número: ");
      b = prompt("Digite o peso desse número: ")
      a = parseInt(a);
      b = parseInt(b);
      r = a*b + r;
      d = b+d;
    } while (c != n);
    r = r / d;  	
  	break;
	case 10:
  	n = prompt("Digite quantos números você ira usar na conta: ");
    r = 1
    do {
    	c += 1;
      a = prompt("Digite o "+c+"° número: ");
      a = parseInt(a);
      r = a*r;
    } while (c != n);
    r = Math.pow(r,1/c)
  	break;
	case 11:
  	n = prompt("Digite quantos números você ira usar na conta: ");
    do {
    	c += 1;
      a = prompt("Digite o "+c+"° número: ");
      a = parseInt(a);
      r = (1/a)+r;
    } while (c != n);
    r = c / r;
  	break;
}
document.getElementById('texto').innerHTML = ('O resultado é: '+r)