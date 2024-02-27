const axios = require("axios");
const getGamesDb = require("./getGamesDb");
const URL = 'https://api.rawg.io/api/games?key='
const API_KEY = 'fe18a8773e7641bd987767e6af6e1bc1'
//const URL2= 'https://api.rawg.io/api/games?key=fe18a8773e7641bd987767e6af6e1bc1&page=2'
const PAGE = 5;


const getGames = async () => {
  // try {
  let {data} =  await axios.get(`${URL}${API_KEY}`)
    
  let videojuegos =[];
  let pagee=1;
  while (pagee<=PAGE) {
      let data1 =  await axios.get(data.next)
      data.results.map(resul=>{
        // const {id, name, background_image}=result;
        let platformv = resul.parent_platforms.map(plat=> plat.platform.name)//
        let genresd =  resul.genres.map(genr => genr.name)
        videojuegos.push({
          id: resul.id,
          name: resul.name,
          platform: platformv,
          image: resul.background_image,
          genres: genresd
        })
         
      })          
      pagee+=1;      
      data=data1.data
 }
 console.log(videojuegos.length);
 const allGamesDb = await  getGamesDb();
     //console.log(allGamesDb);
   
  videojuegos= [...allGamesDb, ...videojuegos]
    

     return videojuegos
    
 
}
  

module.exports = {getGames};

