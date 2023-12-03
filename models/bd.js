const { Sequelize } = require("sequelize")

const sequelize =  new Sequelize ("railway", "root", "-Bg4Fa6HDGe-cG544Df13F25G4d2aCA4", {
    host: "viaduct.proxy.rlwy.net",
    port:"22445",
    dialect: "mysql"
})



module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}

// usuario.sync()

