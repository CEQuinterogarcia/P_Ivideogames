const {Videogame, Genres} = require('../db')
const { Op } = require('sequelize');

const getGamesByIdDb = async(id) =>{
   
    let videjuegos ={}
    console.log(id);
      const GameById = await Videogame.findOne({
        where: {
            id: id,
        },
         include: [
          {
            model: Genres,
           
          } ]      
      });
       console.log(GameById);
       let allGamesByNameDb_N ={}

       GameById?.map(games=>{
        let genresn = []
        games.Genres?.map(genre=>{
           genresn.push(genre.name)
          // console.log(genre.name);
        })
        allGamesByNameDb_N = {
           id: games.id,
           name: games.name,
           platform: games.platform,
           description: games.description,
           released: games.released,
           rating: games.rating,
           image: games.image,
           genres: genresn,
    
        }
      })
 //   id: data.id,
    //   name: data.name,
    //   image: data.background_image,
    //   platform: platformv,
    //   description: data.description,
    //   released: data.released,
    //   rating: data.rating,
    //   genres: genresd
    console.log(allGamesByNameDb_N);
     return  allGamesByNameDb_N
    
   
  }
  
  module.exports = getGamesByIdDb;