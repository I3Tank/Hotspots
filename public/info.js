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
        // fetchShop(){
        //     console.log("shop");
        //     // fetch('http://localhost:3000/shop').then(function(response){
        //     //     console.log(response);
        //     //     window.location.href(response.url);
        //     // });
        //
        //     fetch('http://localhost:3000/shop',{method: 'GET'})
        //         .then(response => {
        //         response.redirect('/shop.html');
        //         });
        // }
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
            console.log(this.hotstop.generalInformation);
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
            //TODO functionality for Login Button
            //Login button
            // this.loginButton = document.getElementById("loginButton");
            // this.loginButton.addEventListener("click", this.openLoginWindow);

            //shop functionality
            // this.shopButton = document.getElementById("shopBtn");
            // this.shopButton.addEventListener("click", event => this.fetchShop());

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
                    //Hotstop 1
                    this.hotstopButton = document.getElementById("EmpireStateBuilding");
                    this.hotstopButton.addEventListener("click", event => this.fetchHotspot(0));
                    this.hotstopsList.appendChild(this.hotstopButton);

                    //Hotstop 2
                    this.hotstopButton1 = document.getElementById("StatueOfLiberty");
                    this.hotstopButton1.addEventListener("click", event => this.fetchHotspot(1));
                    this.hotstopsList.appendChild(this.hotstopButton1);

                    //Hotstop 3
                    this.hotstopButton2 = document.getElementById("TimeSquare");
                    this.hotstopButton2.addEventListener("click", event => this.fetchHotspot(2));
                    this.hotstopsList.appendChild(this.hotstopButton2);

                    this.displayBanner.appendChild(this.hotstopUL);
                    this.mainInfoScreen.appendChild(this.displayBanner);
                    break;
                case "London":
                    //Hotstop 3
                    this.hotstopButton3 = document.getElementById("BigBen");
                    this.hotstopButton3.addEventListener("click", event => this.fetchHotspot(3));
                    this.hotstopsList.appendChild(this.hotstopButton3);

                    //Hotstop 4
                    this.hotstopButton4 = document.getElementById("BuckinghamPalace");
                    this.hotstopButton4.addEventListener("click", event => this.fetchHotspot(4));
                    this.hotstopsList.appendChild(this.hotstopButton4);

                    //Hotstop 5
                    this.hotstopButton5 = document.getElementById("LondonEye");
                    this.hotstopButton5.addEventListener("click", event => this.fetchHotspot(5));
                    this.hotstopsList.appendChild(this.hotstopButton5);

                    this.displayBanner.appendChild(this.hotstopUL);
                    this.mainInfoScreen.appendChild(this.displayBanner);
                    break;
                case "Istanbul":
                    //Hotstop 6
                    this.hotstopButton6 = document.getElementById("Ayasofya");
                    this.hotstopButton6.addEventListener("click", event => this.fetchHotspot(6));
                    this.hotstopsList.appendChild(this.hotstopButton6);

                    //Hotstop 7
                    this.hotstopButton7 = document.getElementById("MaidensTower");
                    this.hotstopButton7.addEventListener("click", event => this.fetchHotspot(7));
                    this.hotstopsList.appendChild(this.hotstopButton7);

                    //Hotstop 8
                    this.hotstopButton8 = document.getElementById("Taksim");
                    this.hotstopButton8.addEventListener("click", event => this.fetchHotspot(8));
                    this.hotstopsList.appendChild(this.hotstopButton8);

                    this.displayBanner.appendChild(this.hotstopUL);
                    this.mainInfoScreen.appendChild(this.displayBanner);
                    break;
            }



            //star functionality
            this.allStars = document.getElementsByClassName("star");
            for (let i = 0; i < this.allStars.length; i++) {
                this.allStars.item(i).addEventListener("click", event => this.changeStar(this.allStars.item(i)));
            }
            //append the starting information from html5
            this.generalInformationArticle = document.getElementById("generalInformation");
            this.mainInfoScreen.appendChild(this.generalInformationArticle);
            this.additionalInformationArticle = document.getElementById("additionalInformation");
            this.mainInfoScreen.appendChild(this.additionalInformationArticle);
        }


        changeStar(star) {
            if (star.src.match("StarEmpty")) {
                star.src = "./symbols/Star.png";
            }
            else if (star.src.match("Star")) {
                star.src = "./symbols/StarEmpty.png";
            }
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