alert('t')
function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = 19//data.getHours()
  msg.innerHTML = `Agora são ${hora} Horas.`
  if (hora >= 0 && hora < 12){
    img.src = 'fotomanha.png'
    document.body.style.background = '#698133'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#E1C090'
  } else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}

