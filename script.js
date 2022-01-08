function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  var seg = data.getSeconds()

  var tempoTotal = hora + ":" + min + ":" + seg 

  if(hora >= 0 && hora <12){
    msg.innerHTML = `<strong>Bom dia</strong> <br> agora são ${tempoTotal}`
    img.src = 'manha.png'
    document.body.style.background = 'rgb(147, 190, 207)'
  }else if(hora >= 12 && hora <= 18){
    msg.innerHTML = `<strong>Boa tarde</strong> <br> agora são ${tempoTotal}`
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(84, 1, 109)'
  }else{
    msg.innerHTML = `<strong>Boa noite</strong> <br> agora são ${tempoTotal}`
    img.src = 'noite.png'
    document.body.style.background = 'rgb(0, 45, 129)'

  }

}
setInterval(carregar,500) //atualizando em tempo real