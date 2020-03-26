const express = require('express');
const ongCtrl =  require('./controllers/ongController');
const incidentCtrl = require('./controllers/incidentController');
const profileCtrl = require('./controllers/profileController');
const sessionCtrl = require('./controllers/sessionController');
const routes = express.Router();

/**
 *  ROTAS DE ONGS
 */
routes.get('/ongs', ongCtrl.listAll)
routes.post('/ongs', ongCtrl.create);
routes.get('/profile', profileCtrl.listAll);
routes.post('/sessions', sessionCtrl.create);

/**
 * ROTAS DE CASOS
 */

routes.post('/incidents', incidentCtrl.create);
routes.get('/incidents', incidentCtrl.listAll);
routes.delete('/incidents/:id', incidentCtrl.delete);




module.exports = routes;