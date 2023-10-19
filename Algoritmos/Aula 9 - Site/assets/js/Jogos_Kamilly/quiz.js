function voltar(id) {
  window.location.href = '../hist.html'
}

var pont = 0;
var i = 0;

// pergunta1
function conf1() {
  var resp1 = document.getElementById('resp1').value;

  if((resp1=="b" || resp1=="B") && i==0) {
    document.getElementById('classe1').style.backgroundColor = '#3CB371';
    document.getElementById('h41').style.backgroundColor = '#3CB371';
    document.getElementById('p1').style.backgroundColor = '#3CB371';
    document.getElementById('ol1').style.backgroundColor = '#3CB371';
    document.getElementById('resp1').style.backgroundColor = '#3CB371';
    document.getElementById('li1').style.backgroundColor = '#3CB371';
    document.getElementById('li12').style.backgroundColor = '#3CB371';
    document.getElementById('li13').style.backgroundColor = '#3CB371';
    document.getElementById('li14').style.backgroundColor = '#3CB371';

    pont++
  }else {
    document.getElementById('classe1').style.backgroundColor = '#E64444';
    document.getElementById('h41').style.backgroundColor = '#E64444';
    document.getElementById('p1').style.backgroundColor = '#E64444';
    document.getElementById('ol1').style.backgroundColor = '#E64444';
    document.getElementById('resp1').style.backgroundColor = '#E64444';
    document.getElementById('li1').style.backgroundColor = '#E64444';
    document.getElementById('li12').style.backgroundColor = '#E64444';
    document.getElementById('li13').style.backgroundColor = '#E64444';
    document.getElementById('li14').style.backgroundColor = '#E64444';
  }
  
  i++
  document.getElementById('resp1').style.display = 'none';
  document.getElementById('respA').style.display = 'none';
}
// pergunta2
function conf2() {
  var resp2 = document.getElementById('resp2').value;

  if((resp2=="c" || resp2=="C") && i==1) {
    document.getElementById('classe2').style.backgroundColor = '#3CB371';
    document.getElementById('h42').style.backgroundColor = '#3CB371';
    document.getElementById('p2').style.backgroundColor = '#3CB371';
    document.getElementById('ol2').style.backgroundColor = '#3CB371';
    document.getElementById('resp2').style.backgroundColor = '#3CB371';
    document.getElementById('li2').style.backgroundColor = '#3CB371';
    document.getElementById('li22').style.backgroundColor = '#3CB371';
    document.getElementById('li23').style.backgroundColor = '#3CB371';
    document.getElementById('li24').style.backgroundColor = '#3CB371';

    pont++
  }else {
    document.getElementById('classe2').style.backgroundColor = '#E64444';
    document.getElementById('h42').style.backgroundColor = '#E64444';
    document.getElementById('p2').style.backgroundColor = '#E64444';
    document.getElementById('ol2').style.backgroundColor = '#E64444';
    document.getElementById('resp2').style.backgroundColor = '#E64444';
    document.getElementById('li2').style.backgroundColor = '#E64444';
    document.getElementById('li22').style.backgroundColor = '#E64444';
    document.getElementById('li23').style.backgroundColor = '#E64444';
    document.getElementById('li24').style.backgroundColor = '#E64444';
  }
  
  i++
  document.getElementById('resp2').style.display = 'none';
  document.getElementById('respB').style.display = 'none';
}
// pergunta3
function conf3() {
  var resp3 = document.getElementById('resp3').value;

  if((resp3=="d" || resp3=="D") && i==2) {
    document.getElementById('classe3').style.backgroundColor = '#3CB371';
    document.getElementById('h43').style.backgroundColor = '#3CB371';
    document.getElementById('p3').style.backgroundColor = '#3CB371';
    document.getElementById('ol3').style.backgroundColor = '#3CB371';
    document.getElementById('resp3').style.backgroundColor = '#3CB371';
    document.getElementById('li3').style.backgroundColor = '#3CB371';
    document.getElementById('li32').style.backgroundColor = '#3CB371';
    document.getElementById('li33').style.backgroundColor = '#3CB371';
    document.getElementById('li34').style.backgroundColor = '#3CB371';

    pont++
  }else {
    document.getElementById('classe3').style.backgroundColor = '#E64444';
    document.getElementById('h43').style.backgroundColor = '#E64444';
    document.getElementById('p3').style.backgroundColor = '#E64444';
    document.getElementById('ol3').style.backgroundColor = '#E64444';
    document.getElementById('resp3').style.backgroundColor = '#E64444';
    document.getElementById('li3').style.backgroundColor = '#E64444';
    document.getElementById('li32').style.backgroundColor = '#E64444';
    document.getElementById('li33').style.backgroundColor = '#E64444';
    document.getElementById('li34').style.backgroundColor = '#E64444';
  }
  
  i++
  document.getElementById('resp3').style.display = 'none';
  document.getElementById('respC').style.display = 'none';
}
// pergunta4
function conf4() {
  var resp4 = document.getElementById('resp4').value;

  if((resp4=="c" || resp4=="C") && i==3) {
    document.getElementById('classe4').style.backgroundColor = '#3CB371';
    document.getElementById('h44').style.backgroundColor = '#3CB371';
    document.getElementById('p4').style.backgroundColor = '#3CB371';
    document.getElementById('ol4').style.backgroundColor = '#3CB371';
    document.getElementById('resp4').style.backgroundColor = '#3CB371';
    document.getElementById('li4').style.backgroundColor = '#3CB371';
    document.getElementById('li42').style.backgroundColor = '#3CB371';
    document.getElementById('li43').style.backgroundColor = '#3CB371';
    document.getElementById('li44').style.backgroundColor = '#3CB371';

    pont++
  }else {
    document.getElementById('classe4').style.backgroundColor = '#E64444';
    document.getElementById('h44').style.backgroundColor = '#E64444';
    document.getElementById('p4').style.backgroundColor = '#E64444';
    document.getElementById('ol4').style.backgroundColor = '#E64444';
    document.getElementById('resp4').style.backgroundColor = '#E64444';
    document.getElementById('li4').style.backgroundColor = '#E64444';
    document.getElementById('li42').style.backgroundColor = '#E64444';
    document.getElementById('li43').style.backgroundColor = '#E64444';
    document.getElementById('li44').style.backgroundColor = '#E64444';
  }
  
  i++
  document.getElementById('resp4').style.display = 'none';
  document.getElementById('respD').style.display = 'none';
}
// pergunta5
function conf5() {
  var resp5 = document.getElementById('resp5').value;

  if((resp5=="d" || resp5=="D") && i==4) {
    document.getElementById('classe5').style.backgroundColor = '#3CB371';
    document.getElementById('h45').style.backgroundColor = '#3CB371';
    document.getElementById('p5').style.backgroundColor = '#3CB371';
    document.getElementById('ol5').style.backgroundColor = '#3CB371';
    document.getElementById('resp5').style.backgroundColor = '#3CB371';
    document.getElementById('li5').style.backgroundColor = '#3CB371';
    document.getElementById('li52').style.backgroundColor = '#3CB371';
    document.getElementById('li53').style.backgroundColor = '#3CB371';
    document.getElementById('li54').style.backgroundColor = '#3CB371';

    pont++
  }else {
    document.getElementById('classe5').style.backgroundColor = '#E64444';
    document.getElementById('h45').style.backgroundColor = '#E64444';
    document.getElementById('p5').style.backgroundColor = '#E64444';
    document.getElementById('ol5').style.backgroundColor = '#E64444';
    document.getElementById('resp5').style.backgroundColor = '#E64444';
    document.getElementById('li5').style.backgroundColor = '#E64444';
    document.getElementById('li52').style.backgroundColor = '#E64444';
    document.getElementById('li53').style.backgroundColor = '#E64444';
    document.getElementById('li54').style.backgroundColor = '#E64444';
  }
  
  i++
  document.getElementById('resp5').style.display = 'none';
  document.getElementById('respE').style.display = 'none';
}
// pergunta6
function conf6() {
  var resp6 = document.getElementById('resp6').value;

  if((resp6=="b" || resp6=="B") && i==5) {
    document.getElementById('classe6').style.backgroundColor = '#3CB371';
    document.getElementById('h46').style.backgroundColor = '#3CB371';
    document.getElementById('p6').style.backgroundColor = '#3CB371';
    document.getElementById('ol6').style.backgroundColor = '#3CB371';
    document.getElementById('resp6').style.backgroundColor = '#3CB371';
    document.getElementById('li6').style.backgroundColor = '#3CB371';
    document.getElementById('li62').style.backgroundColor = '#3CB371';
    document.getElementById('li63').style.backgroundColor = '#3CB371';
    document.getElementById('li64').style.backgroundColor = '#3CB371';

    pont++
  }else {
    document.getElementById('classe6').style.backgroundColor = '#E64444';
    document.getElementById('h46').style.backgroundColor = '#E64444';
    document.getElementById('p6').style.backgroundColor = '#E64444';
    document.getElementById('ol6').style.backgroundColor = '#E64444';
    document.getElementById('resp6').style.backgroundColor = '#E64444';
    document.getElementById('li6').style.backgroundColor = '#E64444';
    document.getElementById('li62').style.backgroundColor = '#E64444';
    document.getElementById('li63').style.backgroundColor = '#E64444';
    document.getElementById('li64').style.backgroundColor = '#E64444';
  }
  
  i++
  document.getElementById('resp6').style.display = 'none';
  document.getElementById('respF').style.display = 'none';
}
function ponto(id) {
  document.getElementById('ponto').innerHTML = pont;

  if(i=6) {
  document.getElementById('mens').style.display = 'block';
  document.getElementById('classe1').style.display = 'none';
  document.getElementById('classe2').style.display = 'none';
  document.getElementById('classe3').style.display = 'none';
  document.getElementById('classe4').style.display = 'none';
  document.getElementById('classe5').style.display = 'none';
  document.getElementById('classe6').style.display = 'none';
}
}
function reiniciar(id) {
  document.getElementById('mens').style.display = 'none';
  document.getElementById('classe1').style.display = 'block';
  document.getElementById('classe2').style.display = 'block';
  document.getElementById('classe3').style.display = 'block';
  document.getElementById('classe4').style.display = 'block';
  document.getElementById('classe5').style.display = 'block';
  document.getElementById('classe6').style.display = 'block';
  document.getElementById('ponto').innerHTML = 'Pontuação';

  //per1
  document.getElementById('classe1').style.background = 'lightgrey';
  document.getElementById('h41').style.backgroundColor = 'lightgrey';
  document.getElementById('p1').style.backgroundColor = 'lightgrey';
  document.getElementById('ol1').style.backgroundColor = 'lightgrey';
  document.getElementById('resp1').style.backgroundColor = 'lightgrey';
  document.getElementById('li1').style.backgroundColor = 'lightgrey';
  document.getElementById('li12').style.backgroundColor = 'lightgrey';
  document.getElementById('li13').style.backgroundColor = 'lightgrey';
  document.getElementById('li14').style.backgroundColor = 'lightgrey';

  //per2
  document.getElementById('classe2').style.backgroundColor = 'lightgrey';
  document.getElementById('h42').style.backgroundColor = 'lightgrey';
  document.getElementById('p2').style.backgroundColor = 'lightgrey';
  document.getElementById('ol2').style.backgroundColor = 'lightgrey';
  document.getElementById('resp2').style.backgroundColor = 'lightgrey';
  document.getElementById('li2').style.backgroundColor = 'lightgrey';
  document.getElementById('li22').style.backgroundColor = 'lightgrey';
  document.getElementById('li23').style.backgroundColor = 'lightgrey';
  document.getElementById('li24').style.backgroundColor = 'lightgrey';

  //per3
  document.getElementById('classe3').style.backgroundColor = 'lightgrey';
  document.getElementById('h43').style.backgroundColor = 'lightgrey';
  document.getElementById('p3').style.backgroundColor = 'lightgrey';
  document.getElementById('ol3').style.backgroundColor = 'lightgrey';
  document.getElementById('resp3').style.backgroundColor = 'lightgrey';
  document.getElementById('li3').style.backgroundColor = 'lightgrey';
  document.getElementById('li32').style.backgroundColor = 'lightgrey';
  document.getElementById('li33').style.backgroundColor = 'lightgrey';
  document.getElementById('li34').style.backgroundColor = 'lightgrey';

  //per4
  document.getElementById('classe4').style.backgroundColor = 'lightgrey';
  document.getElementById('h44').style.backgroundColor = 'lightgrey';
  document.getElementById('p4').style.backgroundColor = 'lightgrey';
  document.getElementById('ol4').style.backgroundColor = 'lightgrey';
  document.getElementById('resp4').style.backgroundColor = 'lightgrey';
  document.getElementById('li4').style.backgroundColor = 'lightgrey';
  document.getElementById('li42').style.backgroundColor = 'lightgrey';
  document.getElementById('li43').style.backgroundColor = 'lightgrey';
  document.getElementById('li44').style.backgroundColor = 'lightgrey';

  //per5
  document.getElementById('classe5').style.backgroundColor = 'lightgrey';
  document.getElementById('h45').style.backgroundColor = 'lightgrey';
  document.getElementById('p5').style.backgroundColor = 'lightgrey';
  document.getElementById('ol5').style.backgroundColor = 'lightgrey';
  document.getElementById('resp5').style.backgroundColor = 'lightgrey';
  document.getElementById('li5').style.backgroundColor = 'lightgrey';
  document.getElementById('li52').style.backgroundColor = 'lightgrey';
  document.getElementById('li53').style.backgroundColor = 'lightgrey';
  document.getElementById('li54').style.backgroundColor = 'lightgrey';

  //per6
  document.getElementById('classe6').style.backgroundColor = 'lightgrey';
  document.getElementById('h46').style.backgroundColor = 'lightgrey';
  document.getElementById('p6').style.backgroundColor = 'lightgrey';
  document.getElementById('ol6').style.backgroundColor = 'lightgrey';
  document.getElementById('resp6').style.backgroundColor = 'lightgrey';
  document.getElementById('li6').style.backgroundColor = 'lightgrey';
  document.getElementById('li62').style.backgroundColor = 'lightgrey';
  document.getElementById('li63').style.backgroundColor = 'lightgrey';
  document.getElementById('li64').style.backgroundColor = 'lightgrey';

  pont = 0;
  i = 0;
}