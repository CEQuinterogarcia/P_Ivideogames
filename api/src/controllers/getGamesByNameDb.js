const {Videogame, Genres} = require('../db')
const { Op } = require('sequelize');

const getGamesByNameDb = async(nameG) =>{
   
      //const {name, description, platform, image, released, rating}= req.body
      let videjuegos ={}
     // const validGame= await Videogame.findOne({where: {nameG}});
    //   if (!validGame) {
    //     return videojuegos
    //   }
    console.log(nameG);
      const allGamesByNameDb = await Videogame.findAll({
        where: {
            name: {
              [Op.iLike]: '%' + nameG + '%',
             }
        },
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
          } ]      
      });
      let allGamesByNameDb_N =[]

      allGamesByNameDb.map(games=>{
        let genresn = []
        games.Genres.map(genre=>{
           genresn.push(genre.name)
          // console.log(genre.name);
        })
        allGamesByNameDb_N.push({
           id: games.id,
           name: games.name,
           platform: games.platform,
           image: games.image,
           genres: genresn,
    
        })
      })


     return  allGamesByNameDb_N
     // const allGamenDb = await Videogame.findAll()
     // console.log(allGamenDb);

    //  Post.findAll({
    //     where: {
    //       authorId: 12,
    //       status: 'active'
    //     }
    //   });
   
  }
  
  module.exports = getGamesByNameDb