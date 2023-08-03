function trocarnomeDiv01() {
    var area = document.getElementById("area").innerHTML = "Botão Clicado 2"
}

function trocarnomeDiv02() {
    var area = document.getElementById("area");
    var texto = prompt("Qual o novo nome da div?")

    area.innerHTML = texto;
}

function trocarnomeDiv03() {
    var area = document.getElementById("area")
    var form1 = document.getElementById("form1").value

    area.innerHTML = form1
}

function modificaEstilo(corDeFundo, l, a) {
    document.getElementById('quadrado').style.backgroundColor = corDeFundo;
    document.getElementById('quadrado').style.width = l;
    document.getElementById('quadrado').style.height = a;
}