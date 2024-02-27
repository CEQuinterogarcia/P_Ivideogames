const axios = require("axios")
const getGamesByNameDb = require("./getGamesByNameDb")
const getGamesByIdDb = require("./getGamesByIdDb")
const URL = 'https://api.rawg.io/api/games/'
const API_KEY = '?key=fe18a8773e7641bd987767e6af6e1bc1'
const idd = 6736
//https://api.rawg.io/api/games/6736?key=fe18a8773e7641bd987767e6af6e1bc1'
const getGamesById = async (req,res) => {
  console.log(req.params.id);
  try {
    let videogame = {}
    const gameId = req.params.id;
    const {data} =  await axios.get(`${URL}${gameId}${API_KEY}`)

    if (!data.name) res.status(400).send("no se encuentra juego")

    let platformv = data.parent_platforms.map(plat=> plat.platform.name)//
    let genresd =  data.genres.map(genr => genr.name)
    
    let videoggame = getGamesByIdDb(gameId);

    videogame={
      id: data.id,
      name: data.name,
      image: data.background_image,
      platform: platformv,
      description: data.description,
      released: data.released,
      rating: data.rating,
      genres: genresd

    }
  console.log(videoggame);
  if(videogame.name) return res.status(200).json(videogame)
      res.status(404).send("Not found.")

  } catch (error) {
    return res.status(500).send(error.message)
  }
}
 


module.exports = getGamesById;

