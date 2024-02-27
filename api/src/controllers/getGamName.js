const axios = require("axios")
const URL = 'https://api.rawg.io/api/games/'
const API_KEY = '?key=fe18a8773e7641bd987767e6af6e1bc1'
const idd = 6736

const getGamName = async (req,res) => {
  
  try {
   console.log(req.query);
    // if(videojuegos.name) return res.status(200).json(videojuegos)
    //   res.status(404).send("Not found.")

  } catch (error) {
    return res.status(500).send(error.message)
  }
}
 


module.exports = getGamName;
