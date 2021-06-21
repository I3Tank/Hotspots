const hotspots = new Map();

hotspots.set("0", {
    weather: "Rainy",
    location: "pics\/NewYork\/NYC_Map_EmpireStateBuilding.png",
    generalInformation: "This is the first General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 8-25h",
    additionalInformation2: "Gibts keine",
});
hotspots.set("1", {
    weather: "Rainyy",
    location: "pics\/NewYork\/NYC_Map_StatueOfLiberty.png",
    generalInformation: "This is the second General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 7-26h",
    additionalInformation2: "Gibts eine",
});
hotspots.set("2", {
    weather: "Rainyyy",
    location: "pics\/NewYork\/NYC_Map_TimeSquare.png",
    generalInformation: "This is the third General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 7-26h",
    additionalInformation2: "Gibts eine",
});

hotspots.set("3", {
    weather: "Sunshine",
    location: "pics\/London\/London_Map_BigBen.png",
    generalInformation: "This is the first General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 8-25h",
    additionalInformation2: "Gibts keine",
});
hotspots.set("4", {
    weather: "Rain",
    location: "pics\/London\/London_Map_BuckinghamPalace.png",
    generalInformation: "This is the second General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 7-26h",
    additionalInformation2: "Gibts eine",
});
hotspots.set("5", {
    weather: "Rain",
    location: "pics\/London\/London_Map_LondonEye.png",
    generalInformation: "This is the third General Information from a web server.\nI hope this works.",
    additionalInformation1: "From 7-26h",
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
        hotspots.delete(id);
        hotspots.set(id, hotspot);
    }
    static deleteHotspot(id){
        hotspots.delete(id);
    }
}
module.exports = HotspotModel;