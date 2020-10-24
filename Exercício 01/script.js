alert('t')
function carregar() {
  const url = 'https://fskbot.herokuapp.com'
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} Horas.`
  if (hora == 1){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})


  } else if (hora >= 12 && hora <= 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#E1C090'
  } else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}

