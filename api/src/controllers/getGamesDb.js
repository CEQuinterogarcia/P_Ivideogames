const {Videogame, Genres} = require('../db')
const { Sequelize, DataTypes } = require('sequelize');
const { Op } = require('sequelize');

const getGamesDb = async(req,res) =>{
  try {
      const allGamesDb = await Videogame.findAll({
         attributes:[
         "id", 
         "name",
         "image",
         "platform"],
         include: [
         {
           model: Genres,
          // attributes:["name"],
          // through: {
          //   attributes: []
          //  }
         }]
      });
      
  
  let allGamesDb_N =[]

  allGamesDb.map(games=>{
    let genresn = []
    games.Genres.map(genre=>{
       genresn.push(genre.name)
      // console.log(genre.name);
    })
    allGamesDb_N.push({
       id: games.id,
       name: games.name,
       platform: games.platform,
       image: games.image,
       genres: genresn,

    })
  })
   
   return allGamesDb_N
   } catch (error) {
    
   }  
      
     
      
  }
  
  module.exports = getGamesDb