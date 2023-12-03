const express = require("express")
const app = express()
const path = require("path")
const {engine}  = require("express-handlebars");
const expressHbs = require("express-handlebars");
// const Sequelize = require("sequelize")
// const session = require("express-session")
// const usuarioDb = require("./models/Usuario")
// var data =  new Date()
// var Data =`Destiny, ${data.getDate()} De ${data.toLocaleString("pt-BR", {month: 'long'})} ${data.getFullYear()}`
// const passport = require("passport")
// require("./config/auth")(passport)

// app.use(session({
//     secret: "dfasjkfefu33483j437387fcef77F7fyDF6868767FDFfDdf67df678d6fD7FF",
//     resave: false,
//     saveUninitialized: true
// }))

// app.use(passport.initialize())
// app.use(passport.session())

app.engine('handlebars',engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// var hbs = expressHbs.create({});

// app.use(express.static(path.join(__dirname + '../../' + '/public')))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(bodyParser.json())
  



// var tipo 

// app.get("/login",function(req, res){
    
//       res.render('login')
   
//    })

// app.post("/login",function(req, res,next){

    
//     passport.authenticate("local",{
//         successRedirect: "/",
//         failureRedirect: "/login",
        
        
//     })(req,res,next)
    
// })
app.get("/",function(req, res){
    // console.log(req.user.Nome)
    res.render("desligamento")

})

// app.get("/atribuicao",isAuthenticated,function(req, res){
    
//  tipo = "atribuicao"
//    res.render('atribuicao', {user: req.user.Nome})
   
// })
  
// app.get("/desligamento",isAuthenticated,function(req, res){
//     tipo = "Desligamento"
//     res.render('desligamento', {user: req.user.Nome})
 
//  })

//  app.get("/promocao",isAuthenticated,function(req, res){
//     tipo = "Promocao"
//     res.render('promocao',{user: req.user.Nome})
 
//  })
 
// app.post("/pdf",isAuthenticated,function(req, res){
    
   
       
//         var dados = req.body
        
//         hbs.handlebars.registerHelper("if", function(a) {
//             if(a == "atribuicao" ){
//              return `Eu, <strong>${dados.FuncaoResponsavel.toUpperCase()}</strong>da academia de polícia <strong>${dados.NomeResponsavel.toUpperCase()} </strong> portador(a) do RG de Nº <strong>${dados.RgResponsavel.toUpperCase()}</strong> no uso de minhas atribuições, decido por: Atribuir o Sr.(a) <strong>${dados.NomeDoPromovido.toUpperCase()}</strong> portador do RG de Nº <strong>${dados.RGDoPromovido.toUpperCase()}</strong> atual <strong>${dados.CargoDPD.toUpperCase()}</strong> do Departamento de Polícia do Destiny, para funções de <strong>${dados.NovaFunção.toUpperCase()}</strong> da Academia De Policia, com atribuições de auxiliar e promover as necessidades do setor.`
            
//             }else if(a == "Desligamento"){
//                 return ` Eu, <strong>${dados.FuncaoResponsavel.toUpperCase()}</strong> da academia de polícia <strong>${dados.NomeResponsavel.toUpperCase()} </strong> portador(a) do <strong>RG</strong> de Nº <strong>${dados.RgResponsavel.toUpperCase()}</strong> no uso de minhas atribuições, decido por: Desligar de suas funções exercidas na academia de polícia o atual <strong>${dados.CargoPunido.toUpperCase()}</strong>  <strong>${dados.NomeDoPunido.toUpperCase()}</strong> portador do <strong>RG</strong> de Nº <strong>${dados.RGDoPunido.toUpperCase()}</strong> das funções  <strong>${dados.FuncaoDoPunido.toUpperCase()}</strong> Agradecemos seus serviços em prol da academia.`
//             }
//             else if(a == "Promocao"){
//                 return `Eu, <strong>${dados.FuncaoResponsavel.toUpperCase()}</strong> da academia de polícia <strong>${dados.NomeResponsavel.toUpperCase()} </strong> portador(a) do RG de Nº <strong>${dados.RgResponsavel.toUpperCase()}</strong> no uso de 

//                 minhas atribuições, decido por: Promover o Sr.(a) <strong>${dados.NomeDoPromovido.toUpperCase()}</strong> portador do RG de Nº <strong>${dados.RGDoPromovido.toUpperCase()}</strong>  atual <strong>${dados.AtualCargo.toUpperCase()}</strong> , para funções de <strong>${dados.NovoCargo.toUpperCase()}</strong> , e responsável por <strong>${dados.FuncaoDoPromovido.toUpperCase()}</strong> durante o período na ACADEPOL em consonância com a decisão conjunta da direção acadepol.`
//             }
             
//            });
  
//         res.render('pdf',{assinatura:req.user.Nome,tipo:tipo, data:Data
        
//         })
   
    
//     // console.log(typeof(req.body.lucas))
   
//  })

// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/login');
//   }

// app.listen(8081, function(){
//     console.log("Servidor rondando ")
// })


