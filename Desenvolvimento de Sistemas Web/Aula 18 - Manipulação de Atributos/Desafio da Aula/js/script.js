function mostrarSenha() {
  var senha = document.getElementById('senha')
  var icone = document.getElementById('btnSenha')
  if (senha.type === 'password') {
    senha.setAttribute('type', 'text')
    icone.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
    senha.setAttribute('type', 'password')
    icone.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
  }
}

function logar() {
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  if (email == 'admin@admin' && senha == 'admin') {
    window.location = '../html/home.html'
  } else {
    alert("Dados Incorretos!")
  }
}