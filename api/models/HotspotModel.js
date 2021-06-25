const hotspots = new Map();

//----------NEW YORK----------
hotspots.set("0", {
    weather: "Rainy",
    location: "pics\/NewYork\/NYC_Map_EmpireStateBuilding.png",
    generalInformation: "This is the first General Information from a web server.I hope this works.",
    additionalInformation1: "Monday to Thursday 1 - 10pm Friday to Sunday 12pm - 12am",
    additionalInformation2: "Gibts keine",
});
hotspots.set("1", {
    weather: "Rainyy",
    location: "pics\/NewYork\/NYC_Map_StatueOfLiberty.png",
    generalInformation: "This is the second General Information from a web server.\nI hope this works.",
    additionalInformation1: "Daily/Everyday 8:30am - 4pm ",
    additionalInformation2: "Gibts eine",
});
hotspots.set("2", {
    weather: "Rainyyy",
    location: "pics\/NewYork\/NYC_Map_TimeSquare.png",
    generalInformation: "This is the third General Information from a web server.\nI hope this works.",
    additionalInformation1: "All the time?..",
    additionalInformation2: "Gibts eine",
});

//----------LONDON----------
hotspots.set("3", {
    weather: "Sunshine",
    location: "pics\/London\/London_Map_BigBen.png",
    generalInformation: "This is the first General Information from a web server.\nI hope this works.",
    additionalInformation1: "Not open?",
    additionalInformation2: "Gibts keine",
});
hotspots.set("4", {
    weather: "Rain",
    location: "pics\/London\/London_Map_BuckinghamPalace.png",
    generalInformation: "This is the second General Information from a web server.\nI hope this works.",
    additionalInformation1: "Daily 9:30am - 5:30pm",
    additionalInformation2: "Gibts eine",
});
hotspots.set("5", {
    weather: "Rain",
    location: "pics\/London\/London_Map_LondonEye.png",
    generalInformation: "This is the third General Information from a web server.\nI hope this works.",
    additionalInformation1: "Daily 11am - 6pm",
    additionalInformation2: "Gibts eine",
});

//----------ISTANBUL----------
hotspots.set("6", {
    weather: "Sunshine",
    location: "pics\/Istanbul\/Istanbul_Map_Ayasofya.png",
    generalInformation: "This is the first General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 8-25h",
    additionalInformation2: "Gibts keine",
});
hotspots.set("7", {
    weather: "Rain",
    location: "pics\/Istanbul\/Istanbul_Map_MaidensTower.png",
    generalInformation: "This is the second General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 7-26h",
    additionalInformation2: "Gibts eine",
});
hotspots.set("8", {
    weather: "Rain",
    location: "pics\/Istanbul\/Istanbul_Map_Taksim.png",
    generalInformation: "This is the third General Information from a web server.\nI hope this works.",
    additionalInformation1: "All the time?",
    additionalInformation2: "Gibts eine",
});
//TODO Insert multiple Hotspots with correct Information

class HotspotModel{
    static getHotstopById(id){
        return hotspots.get(id);
    }
    static createHotspot(id, hotspot){
        hotspots.set(id, hotspot);
    }
    static updateHotspot(id, hotspot){
        hotspots.set(id.toString(), hotspot);
        return hotspot;
    }
    static deleteHotspot(id){
        hotspots.delete(id);
    }
}
module.exports = HotspotModel;