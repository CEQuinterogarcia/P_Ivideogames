const { DataTypes } = require('sequelize');
//const { defaultConfiguration } = require('../app');
//const { toDefaultValue } = require('sequelize/types/utils');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     //unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platform:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    released:{
    type:DataTypes.DATEONLY,
    allowNull:false
    },
    rating:{
    type:DataTypes.FLOAT,
    allowNull:false
    }
  
  
  });
};
