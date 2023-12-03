const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
//models
const Usuario = require("../models/Usuario") 





module.exports = function(passport){
    passport.use(new localStrategy({usernameField:"nome", passwordField:"senha"}, (nome,senha,done) =>{

        Usuario.findOne({where:{nome: nome}}).then((usuario) => {
            
            if(!usuario){
                
                
                return done(null,false,{message:"Está conta não existe"})
            }



              
                bcrypt.compare(senha, usuario.dataValues.Senha, (erro,verificado)=>{
                    if(verificado){
                        
                        return done (null,usuario.dataValues)
                    }else{
                        
                        return done(null,false,{message:"senha icorreta"})
                    }
                })
            
            // }else if(senha == usuario.Senha){
            //     return done (null,usuario)
            // }else{
            //     return done(null,false,{message:"senha icorreta"})
            // }
 
            

            // if(senha == usuario.Senha){
              
            //     return done (null,usuario)
            // }
            // else{
            //     console.log("errada")
             
                
            // }
           

        })
    }))

    passport.serializeUser((usuario,done) => {
       
        done(null,usuario.id)
    })

    passport.deserializeUser((id, done)=>{
        Usuario.findOne({where: {id: id}}).then((res) =>{
            if(res){
                
                return done(null, res.dataValues)
            }else {
                return done (null, false)
            }
        })
        
    })
}

