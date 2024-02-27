const axios = require("axios")
const URL = 'https://api.rawg.io/api/genres'
const API_KEY = '?key=fe18a8773e7641bd987767e6af6e1bc1'
const {Genres} = require('../db')
//const{Favorite} = require('../DB_connection')

//const URL2= 'https://api.rawg.io/api/genres?key=fe18a8773e7641bd987767e6af6e1bc1


const getGenres = async (req,res) => {
  //console.log(req.params.id);
  try {
    let {data} =  await axios.get(`${URL}${API_KEY}`)
     let genresall =[];
     data.results.forEach(result => {
     const {id, name}=result;
     genresall.push({id, name}); 
     Genres.findOrCreate({ where:{ id, name}})
      });  
      const allGenres = await Genres.findAll()
      console.log(genresall);
      //console.log(Genres);
     return res.status(200).json(genresall)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
  

module.exports = getGenres;