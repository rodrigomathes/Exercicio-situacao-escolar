function notas() {
    var botao = document.getElementById('botao')
    var nota1 = document.getElementById('txtn1')
    var nota2 = document.getElementById('txtn2')
    var nome = document.getElementById('txtnome').value
    var txtmedia = document.getElementById('media')
    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var media = (n1 + n2) / 2
    if (n1 == 0 || n2 == 0 || nome == 0) {
        window.alert('Preencha todos os campos!')
    } else {
        if (media > 6) { // APROVADO
            txtmedia.innerText = `A média de ${nome} foi ${media} pontos. [APROVADO]`
        } else if (media <=6 && media >= 3) { //RECUPERAÇÃO
            txtmedia.innerText = `A média de ${nome} foi ${media} pontos. [RECUPERAÇÃO]`
        } else { //REPROVADO
            txtmedia.innerText = `A média de ${nome} foi ${media} pontos. [REPROVADO]`
        }
    }
}