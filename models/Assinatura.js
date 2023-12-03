const db = require("./bd")
const Assinatura =  db.sequelize.define('assinaturas',{
    Nome:{
        type:db.Sequelize.STRING
    },
    Sobrenome:{
        type:db.Sequelize.STRING
    }

})

// Assinatura.sync({force:true})
//  console.log("criou")