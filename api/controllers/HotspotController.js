const HotspotModel = require("../models/HotspotModel");

class HotspotController{
    static hotspot_create(req, res){
        const {id} = req.params;
        const hotspot = req.body;

        const pushHotspot = HotspotModel.createHotspot(id, hotspot);
        res.send(pushHotspot);
    }

    static hotspot_get_by_id(req, res){
        const {id} = req.params;
        const getHotspot = HotspotModel.getHotstopById(id);
        if (getHotspot) {
            res.send(getHotspot);
        } else {
            res.status(404).send('Hotspot not found.');
        }
    }
    static hotspot_update(req, res){
        const {id} = req.params;
        const hotspot = req.body;

        console.log(hotspot);
        console.log(id);
        const putHotspot = HotspotModel.updateHotspot(id, hotspot);
        console.log(putHotspot);
        if (putHotspot) {
            res.send(putHotspot);
        } else {
            res.status(404).send('No Hotspot to update. Created a new one instead.');
        }
    }
    static hotspot_delete(req, res){
        const {id} = req.params;
        const deleteHotspot = HotspotModel.deleteHotspot(id);
        if (deleteHotspot) {
            res.send(deleteHotspot);
        } else {
            res.status(404).send('Hotspot not found.');
        }
    }
}
module.exports = HotspotController;