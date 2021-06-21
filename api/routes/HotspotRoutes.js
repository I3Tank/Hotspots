const {Router} = require('express');
const hotspotRoutes = Router();

const HotspotController = require('../controllers/HotspotController');

//to use body-parser
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


hotspotRoutes.post('/:id', jsonParser, HotspotController.hotspot_create);
hotspotRoutes.get('/:id', jsonParser ,HotspotController.hotspot_get_by_id);
hotspotRoutes.put('/:id', jsonParser, HotspotController.hotspot_update);
hotspotRoutes.delete('/:id', HotspotController.hotspot_delete);

module.exports = hotspotRoutes;