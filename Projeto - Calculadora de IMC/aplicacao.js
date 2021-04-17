function Calcular() {
    let n1 = parseFloat(document.getElementById('txtn1').value)
    let n2 = parseFloat(document.getElementById('txtn2').value)
    var peso = n2 * n2
    let resultado = (n1 / peso).toFixed(1)
    let m = ""

    res.innerHTML = `${resultado}`

    if (resultado < 18.5){
        res.innerHTML =`${resultado} <br> Você está abaixo do peso ideal`
        
    }else if(resultado > 18.6 || resultado < 24.9) {
    res.innerHTML =`${resultado} <br> Você está com o peso normal`
    
    } else if(resultado == 25 || resultado < 30) {
        res.innerHTML =`${resultado} <br> Você está com sobrepeso`
    
    } else if(resultado == 30 || resultado < 34.9) {
        res.innerHTML =`${resultado} <br> Você está com obesidade grau I`
    
    }else if(resultado == 35 || resultado <  39.9) {
        res.innerHTML =`${resultado} <br> Você está com obesidade grau II`

    } else  { 
        res.innerHTML =`${resultado} <br> Você está com obesidade grau III ou mórbida` 
    }
    }
    // Corrigir erro de lógica //
