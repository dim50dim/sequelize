const Sequelize = require("sequelize");


module.exports = function (sequelize) {
   return sequelize.define('Processors',{
               title: {
                type: Sequelize.STRING(100),
                primaryKey: true,
               },
               family : {
                type: Sequelize.STRING(100),
               },
               socket: {
                type: Sequelize.STRING(100),
               },
               core: {
                type: Sequelize.SMALLINT,
               },
               video : {
                type: Sequelize.STRING,
               },
               cache : {
                type : Sequelize.SMALLINT,
               },
               cost : {
                type : Sequelize.INTEGER,
               },
               
                timestamps: false,
                tableName : 'processors'
            
   })
}
