const dbConfig = require('./db.config');
const Sequelize = require("sequelize");
const sequelize= new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.Host,
    dialect:dbConfig.dialect,
    operatorsAliases:false,
 
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

module.exports= sequelize;