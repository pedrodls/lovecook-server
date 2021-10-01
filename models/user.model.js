const {v4} = require('uuid');

const {Sequelize, sequelize} = require("../config/db.connection")

const User = sequelize.define("users", {
    id:{
        type: Sequelize.STRING,
        primaryKey: true,
        default: v4()
    },
    name: Sequelize.STRING
})

module.exports = User

