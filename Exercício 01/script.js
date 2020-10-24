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
  elif (hora == 2){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 3){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 4){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 5){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 6){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 7){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
elif (hora == 8){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 9){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
elif (hora == 10){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})
  elif (hora == 11){
    fetch(url).then(data=>{ return data.json()}).then(res=>{ console.log(res)})


}
