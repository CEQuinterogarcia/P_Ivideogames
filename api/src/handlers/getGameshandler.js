const { getGames } = require("../controllers/getGames");
const { getGamesByName } = require("../controllers/getGamesByName");


// Devuelve todos los videogames o el videogame por nombre
const getGameshandler = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const videogamesByName = await getGamesByName(name);
            if (videogamesByName.length > 0 ) {
              return  res.status(200).json(videogamesByName); 
            }else return   res.status(404).send("No se encontro videjuego");
        }else{
            const allVideogames = await getGames();
            res.status(200).json(allVideogames);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = getGameshandler;