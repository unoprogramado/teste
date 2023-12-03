const db = require("./bd")
const usuario = db.sequelize.define('usuarios', {
    Nome:{
        type:db.Sequelize.STRING
    },
    Senha:{
        type:db.Sequelize.TEXT
    }
})
 


module.exports = usuario