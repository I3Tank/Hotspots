document.addEventListener("DOMContentLoaded", function (event) {
    class Hotstops {
        constructor(weather, location, generalInformation, additionalInformation1, additionalInformation2) {
            this.weather = weather;
            this.location = location;
            this.generalInformation = generalInformation;
            this.additionalInformation1 = additionalInformation1;
            this.additionalInformation2 = additionalInformation2;
        }
    }

    class Info {
        constructor() {
            this.mainInfoScreen = document.getElementById("mainInfoScreen");
            this.displayBanner = document.getElementById("banner");
        }
        fetchHotspot(index){
            let url = 'http://localhost:3000/api/hotstops/' + index;
            fetch(url)
                .then(function(response){
                    return response.json();
                })
                .then(function (data){
                    //console.log(data);
                    info.changeInformation(data);
                });
        }
        changeInformation(hotspot) {
            this.hotstop = hotspot;

            //weather
            this.weatherText = document.getElementById("weather");
            this.weatherText.textContent = this.hotstop.weather;
            this.displayBanner.appendChild(this.weatherText);
            //--------------Picture-----------------
            this.bannerMap = document.getElementById("mainMap");
            this.bannerMap.src = this.hotstop.location;
            this.displayBanner.appendChild(this.bannerMap);
            this.mainInfoScreen.appendChild(this.displayBanner);


            //--------------General Information--------------
            //article
            this.generalInformationArticle = document.getElementById("generalInformation");

            //Div
            this.generalInformationDiv = document.getElementById("generalInformationText");

            //H1
            this.generalInformationH1 = document.getElementById("generalInformationH1");

            //p
            this.generalInformationP = document.getElementById("generalInformationP");
            this.generalInformationP.textContent = this.hotstop.generalInformation;

            //generalInfo
            this.generalInformationDiv.appendChild(this.generalInformationH1);
            this.generalInformationDiv.appendChild(this.generalInformationP);
            this.generalInformationArticle.appendChild(this.generalInformationDiv);
            this.mainInfoScreen.appendChild(this.generalInformationArticle);
            //--------------Additional Information--------------
            //article
            this.additionalInformationArticle = document.getElementById("additionalInformation");

            //Div
            this.additionalInformationDiv = document.getElementById("additionalInformationText");

            //H1
            this.additionalInformationH1 = document.getElementById("additionalInformationH1");

            //H2
            this.additionalInformationH2_1 = document.getElementById("additionalInformationH2_1");
            this.additionalInformationH2_2 = document.getElementById("additionalInformationH2_2");

            //p
            this.additionalInformationP1 = document.getElementById("additionalInformationP1");
            this.additionalInformationP1.textContent = this.hotstop.additionalInformation1;
            this.additionalInformationP2 = document.getElementById("additionalInformationP2");
            this.additionalInformationP2.textContent = this.hotstop.additionalInformation2;

            //additionalInfo
            this.additionalInformationDiv.appendChild(this.additionalInformationH1);
            this.additionalInformationDiv.appendChild(this.additionalInformationH2_1);
            this.additionalInformationDiv.appendChild(this.additionalInformationP1);
            this.additionalInformationDiv.appendChild(this.additionalInformationH2_2);
            this.additionalInformationDiv.appendChild(this.additionalInformationP2);
            this.additionalInformationArticle.appendChild(this.additionalInformationDiv);
            this.mainInfoScreen.appendChild(this.additionalInformationArticle);
        }
        closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        openNav(){
            document.getElementById("mySidebar").style.width = "12.5%";
            document.getElementById("main").style.marginLeft = "12.5%";
        }
        initializeHeader(){
            //Login
            //TODO functionality for Login Button

            //Favourite List Function
            this.favouriteList = document.getElementById("favourites");
            this.favouriteList.addEventListener("click", this.openNav);
            this.favouriteListCloseBtn = document.getElementById("closeBtn");
            this.favouriteListCloseBtn.addEventListener("click", this.closeNav);
        }
        initializeBanner(){
            //Hotstops List
            this.hotstopsList = document.getElementById("hotspotList");
            this.hotstopUL = document.createElement("ul");
            this.hotstopsList.appendChild(this.hotstopUL);

            switch (document.getElementById("cityName").textContent){
                case "New York":
                    //TODO Buttons for New York
                    break;
                case "London":
                    //Hotstop 1
                    this.hotstopButton1 = document.getElementById("BigBen");
                    this.hotstopButton1.addEventListener("click", event => this.fetchHotspot(1));
                    this.hotstopsList.appendChild(this.hotstopButton1);

                    //Hotstop 2
                    this.hotstopButton2 = document.getElementById("BuckinghamPalace");
                    this.hotstopButton2.addEventListener("click", event => this.fetchHotspot(2));
                    this.hotstopsList.appendChild(this.hotstopButton2);

                    //Hotstop 3
                    this.hotstopButton3 = document.getElementById("LondonEye");
                    this.hotstopButton3.addEventListener("click", event => this.fetchHotspot(3));
                    this.hotstopsList.appendChild(this.hotstopButton3);

                    this.displayBanner.appendChild(this.hotstopUL);
                    this.mainInfoScreen.appendChild(this.displayBanner);
                    break;
                case "Istanbul":
                    //TODO Buttons for Istanbul
                    break;
            }
            //append the starting information from html5
            this.generalInformationArticle = document.getElementById("generalInformation");
            this.mainInfoScreen.appendChild(this.generalInformationArticle);
            this.additionalInformationArticle = document.getElementById("additionalInformation");
            this.mainInfoScreen.appendChild(this.additionalInformationArticle);
        }
    }
    const info = new Info();

    // let hotstop = [];
    //
    // hotstop[0] = new Hotstops("Sunny","pics/London/London_Map_BigBen.png", "Test Test \nTest2 TTTTTTTTTTttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttTTTTTTTTTTTTTTTTTTTTTTTTTTT", "Opening Hours", "History");
    // hotstop[1] = new Hotstops("Rainy", "Buck", "Palace", "test2");
    // hotstop[2] = new Hotstops("Foggy", "yes", "no", "thistest");

    info.initializeHeader();
    info.initializeBanner();

    // info.displayHotstop(hotstop[0]);
    // info.displayHotstop(hotstop[1]);
    // info.displayHotstop(hotstop[2]);

// let staropen = document.getElementById("staropen");
// let node = document.createTextNode("Star");
// staropen.appendChild(node);
// let xy = staropen.addEventListener("click", openNav);
// staropen.appendChild(xy);

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }


// let starclose = document.getElementById("starclose");
    // let node2 = document.createTextNode("x");
    // starclose.appendChild(node2);
    // let xy2 = starclose.addEventListener("click", closeNav);
    // starclose.appendChild(xy2);
});