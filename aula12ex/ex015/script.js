function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                // Criança
                img.setAttribute('src' , 'imagens/criançam.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'imagens/jovemm.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'imagens/adultom.jpg')
            } else {
                // Idoso
                img.setAttribute('src' , 'imagens/idosom.jpg')
            }
            } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                // Criança
                img.setAttribute('src' , 'imagens/criançaf.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'imagens/jovemf.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'imagens/adultof.jpg')
            } else {
                // Idoso
                img.setAttribute('src' , 'imagens/idosof.jpg')
            }
        }     
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }    
    
}