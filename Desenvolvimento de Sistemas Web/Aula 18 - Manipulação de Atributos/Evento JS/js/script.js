function clicou() {
  console.log('Clicou no botão!');
}
let botao = document.querySelector('.button');

// Primeira Forma
botao.addEventListener('click', clicou);

// Segunda forma
botao.addEventListener('click', function() {
  console.log('Clicou no botão!');
});

// Terceira forma
botao.addEventListener('click', () => {
  console.log('Clicou no botão!');
});

// Quarta forma
document.querySelector('.button').addEventListener('click', clicou);