var a = parseFloat(prompt("Digite o primeiro número"))
var b = parseFloat(prompt("Digite o segundo número"))
var c = parseFloat(prompt("Digite o terceiro número"))

if (a >= b && a >= c && b >= c) {
  alert(a+", "+b+", "+c)
} else if (a >= b && a >= c && c >= b) {
  alert(a+", "+c+", "+b)
} else if (b >= a && b >= c && a >= c) {
  alert(b+", "+a+", "+c)
} else if (b >= c && b >= a && c >= a) {
  alert(b+", "+c+", "+a)
} else if (c >= a && c >= b && a >= b) {
  alert(c+", "+a+", "+b)
} else if (c >= b && c >= a && b >= a) {
  alert(c+", "+b+", "+a)
}
