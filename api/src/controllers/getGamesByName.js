const axios = require("axios")
const getGamesByNameDb = require("./getGamesByNameDb")
const URL = 'https://api.rawg.io/api/games'
const API_KEY = '?key=fe18a8773e7641bd987767e6af6e1bc1'
const SEARCH ='&search='

const getGamesByName = async (nameG) => {

    let {data} =  await axios.get(`${URL}${API_KEY}${SEARCH}${nameG}`)
    let videojuegos =[];
    //console.log(nameG);
    data.results.map(resul=>{
      if (resul.name.toLowerCase().includes(nameG.toLowerCase())) 
      {
        let platformv = resul.parent_platforms.map(plat=> plat.platform.name)//
        let genresd =  resul.genres.map(genr => genr.name)
        if (videojuegos.length<15) {
          videojuegos.push({
            id: resul.id,
            name: resul.name,
            platform: platformv,
            image: resul.background_image,
            genres: genresd
          })
        } 
      }
    })
  const gamesBD = await getGamesByNameDb(nameG)
  console.log(gamesBD);
  videojuegos= [...gamesBD, ...videojuegos]
   // console.log(videojuegos);
    return videojuegos
  
}
 


module.exports = {getGamesByName};
