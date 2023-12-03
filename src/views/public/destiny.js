// const { default: axios } = require("axios")





//const Atribuicao = document.getElementById("Atribuicao")
// const Desligamento = document.getElementById("Desligamento")
// const Promocao = document.getElementById("Promocao")
// const AssinaturaParagrafo = document.getElementById("AssinaturaParagrafo")
// const nav = document.getElementById("nav")
// const Destinatario = document.getElementById("Destinatario")
// const Cadastro = document.getElementById("Cadastro")
// const Atividades = document.getElementById("Atividades")
// const Voltar = document.getElementById("Voltar")
const Gerar = document.getElementById("Gerar")
// const Logo = document.getElementById("Logo")
// const pdf = document.getElementById("Pdf")
// const baixar = document.getElementById("Baixar")
const baixara = document.getElementById("Baixar-a")
 const Paragrafo1 = document.getElementById("Paragrafo-1")
// const calendario = document.getElementById("data")





html2canvas(document.body, {
    allowTaint: true,
    scrollY: -window.scrollY,
    useCORS: true,

    
    }).then(canvas => {
        
        
        baixara.href = canvas.toDataURL("imagem/png")
        baixara.download = "cortex"
    });