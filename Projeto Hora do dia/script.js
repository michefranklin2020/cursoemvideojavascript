function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()      
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = `bomdia1.jpg` /* Comando para buscar a imagem de bom dia*/
        document.body.style.background = '#F0E68C' //Aqui eu utilizo o CSS dentro do javascript
    } else if (hora >= 12 && hora < 18) {
        img.src = `boatarde1.jpg` 
        document.body.style.background = '#FF7F50'
    } else {
        img.src = `boanoite1.jpg` 
        document.body.style.background = '#696969'
    }    
    

}