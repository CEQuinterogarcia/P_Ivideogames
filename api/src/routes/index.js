const { Router } = require('express');
const {getGames} = require('../controllers/getGames')
const getGamesById = require('../controllers/getGamesById');
const {getGamesByName} = require('../controllers/getGamesByName');
const getGenres = require('../controllers/getGenres');
const postGames = require('../controllers/postGames');
const getGamName = require('../controllers/getGamName');
const getGameshandler = require('../handlers/getGameshandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
//router.get("/videogames", getGames)
router.get("/videogames/", getGameshandler)
router.get("/videogames/:id", getGamesById)
//router.get("/videogames/", getGamesByName)
//router.get("/videogames/", getGamName)
router.get("/genres", getGenres)
router.post("/videogames", postGames)
router.get("/videogames", getGames)
//router.get("/character/:id", getCharById)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
