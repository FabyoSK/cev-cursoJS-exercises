function carregar() {
  var msg = window.document.getElementById('msg') // Armazena a div "mensagem" numa variavel
  var img = window.document.getElementById('imagem')
  var data = new Date() // usa o método "new Date" para adquirir configurações do tempo
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} Horas.`
  if (hora >= 0 && hora < 12){ // se a hora for entre às 0h e as 12h será usado a imagem "fotomanha.png"
    img.src = 'fotomanha.png'
    document.body.style.background = '#698133'
  } else if (hora >= 12 && hora <= 18) { // se a hora for entre as 12h e às 18h será usado a imagem "fototarde.png"
    img.src = 'fototarde.png'
    document.body.style.background = '#E1C090'
  } else { // se a hora for entre as 18h e às 23h será usado a imagem "fotonoite.png"
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}

