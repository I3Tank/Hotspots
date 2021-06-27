document.addEventListener("DOMContentLoaded", function (event) {
    class Hotstops {
        constructor(weather, location, generalInformation, additionalInformation1, additionalInformation2, currency) {
            this.weather = weather;
            this.location = location;
            this.generalInformation = generalInformation;
            this.additionalInformation1 = additionalInformation1;
            this.additionalInformation2 = additionalInformation2;
            this.currency = currency;
        }
    }

    class Info {
        constructor() {
            this.mainInfoScreen = document.getElementById("mainInfoScreen");
            this.displayBanner = document.getElementById("banner");
        }
        fetchHotspot(index){
            let url = 'http://localhost:3000/api/hotspots/' + index;
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
            //p - currency
            this.currencyInformation = document.getElementById("currencyInformation");


            //generalInfo
            this.generalInformationDiv.appendChild(this.generalInformationH1);
            this.generalInformationDiv.appendChild(this.generalInformationP);
            this.generalInformationDiv.appendChild(this.currencyInformation);
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
            this.fetchWeatherData(document.getElementById("cityName").textContent);
            this.fetchCurrencyData(document.getElementById("cityName").textContent);
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
        fetchWeatherData(city){
            console.log("getting weather...");
            let cityName = city;
            let apiKey = '76ec2de61dcfa5ab9f6d14d34a6f40ac';
            let unit = 'metric';
            // let apiKey = '10270ed5e6200b64aac3df5798f3c0a2'; //Zeljko's
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=' + unit + '&appid=' + apiKey)
                .then(response => response.json())
                //.then(data => this.setWeather(Math.round(data.main.temp) + "° "+ data.weather[0].main))
                .then(data => this.setWeather(data))
                .catch(err => console.log("error"));
        }
        setWeather(data){
                let temperature = data.main.temp;
                let weather = data.weather[0].main;
                let emoji;

                if(temperature > 20){
                    emoji = "hot";
                }
                else if(temperature < 10){
                    emoji = "cold";
                }
                else{
                    emoji = "normal";
                }
                this.symbol = document.createTextNode(emoji);

                this.actualWeather = document.getElementById("weather");
                this.actualWeather.textContent = Math.round(temperature) + '° ' + weather + ' ';
                this.actualWeather.appendChild(this.symbol);
        }
        setCurrency(citycourse, currencysymbol){
            let costsperday;
            if (currencysymbol === '$'){
                costsperday = 444;
            } else if (currencysymbol === '£') {
                costsperday = 246;
            } else {
                costsperday = 104;
            }
            let costscorrectcurrency = Math.round((citycourse * costsperday) * 100) / 100

            this.currency = document.getElementById("currencyInformation");
            this.currencyText = document.createTextNode(costscorrectcurrency + currencysymbol);
            this.currency.appendChild(this.currencyText);

            let price;
            if (currencysymbol === '$' && costscorrectcurrency > 550){
                price = " expensive!"
            } else if (currencysymbol === '£' && costscorrectcurrency > 250) {
                price = " expensive!"
            } else if (currencysymbol === '₺' > 1100){
                price = " expensive!"
            } else {
                price = " cheap!"
            }
            this.moneyText = document.createTextNode(price);

            this.currency.appendChild(this.moneyText);
        }
        fetchCurrencyData(city){
            let currency = null;
            let currencysymbol;
            if(city === "New York"){
                currency = 'USD';
                currencysymbol= '$';
            }
            else if(city === "London"){
                currency = 'GBP';
                currencysymbol = '£';
            }
            else if(city === "Istanbul"){
                currency = 'TRY';
                currencysymbol = '₺';
            }
            console.log("getting currency...");
            let apiKey = 'd1f2fee8d8345122270f';
            let q = 'EUR_' + currency;

            fetch('https://free.currconv.com/api/v7/convert?apiKey=' + apiKey + '&q=' + q)
                .then(response => response.json())
                .then(data =>this.setCurrency(Object.values(data.results)[0].val, currencysymbol))
                //.then(data =>console.log(Object.values(data.results)[0].val))
                .catch(err => console.log("error"));
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

    info.initializeHeader();
    info.initializeBanner();
});