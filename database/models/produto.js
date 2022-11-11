const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Produto=database.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    codigo:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    descricao:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    unidademedida:{
        allowNull:false,
        type:Sequelize.STRING(20),   
    },
    precounid:{
        allowNull:false,
        type:Sequelize.INTEGER,   
    },
    estoque:{
        allowNull:false,
        type:Sequelize.INTEGER,   
    },
});

module.exports=Produto;