const {Videogame} = require('../db')
const {Genres} = require('../db')

const postGames = async(req, res) =>{
    try {
       let {name, description, platform, image, released, rating, genreName}= req.body
      
       const validGame= await Videogame.findOne({where: {name}});
       if (validGame) {
         throw new Error(`Ya fue creado el Videojuego ${name}`)
        }
      function generarIdAleatorio() {
          return (Math.floor(Math.random() * 9000) + 1000)+990000;
        }
      let id = generarIdAleatorio() 
      if (!Array.isArray(platform)) {
       let plat = platform.split(", ")
       platform= plat;
      } 
      if(!name || !description || !platform || !image || !released || !rating  || !genreName) return res.status(401).json({message:'Faltan datos'})
      

      const Videogamess= await Videogame.create({ 
        //where:{ 
          id,
          name, 
          description, 
          platform, 
          image, 
          released,
          rating
        })

      if(genreName.length > 0){
        genreName.map(async (id)=>{const genreFound = await Genres.findByPk(id) 
              await Videogamess.setGenres(genreFound)}) //lo mapeo para recorrerlo y por cada id busca en la bd el genero que concide con el ID y el juego que creo le seteo ese genero
          
          
      }
      
      const allGamenDb = await Videogame.findAll()
     
      res.status(200).json(allGamenDb)
  
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  }
  
  module.exports = postGames