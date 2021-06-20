//document.addEventListener("DOMContentLoaded", function (event) {


    class Hotstops {
        constructor(cityName, weather, generalInformation, additionalInformation) {
            this.cityName = cityName;
            this.weather = weather;
            this.generalInformation = generalInformation;
            this.additionalInformation = additionalInformation;
        }
    }

    class Info {
        constructor() {
            this.mainInfoScreen = document.getElementById("mainInfoScreen");
        }



        displayHotstop(index) {

            this.hotstop = hotstop[index];


            this.displayBanner = document.getElementById("banner");

            //cityName
            this.cityNameText = document.getElementById("cityName");
            this.cityNameText.textContent = this.hotstop.cityName;
            this.displayBanner.appendChild(this.cityNameText);

            //weather
            this.weatherText = document.getElementById("weather");
            this.weatherText.textContent = this.hotstop.weather;
            this.displayBanner.appendChild(this.weatherText);

            this.mainInfoScreen.appendChild(this.displayBanner);



            //generalInfo
            this.generalInformationText = document.getElementById("generalInformation");
            this.generalInformationText.textContent = this.hotstop.generalInformation;
            this.mainInfoScreen.appendChild(this.generalInformationText);

            console.log(this.generalInformationText);

            //additionalInfo
            this.additionalInformationText = document.getElementById("additionalInformation");
            this.additionalInformationText.textContent = this.hotstop.additionalInformation;
            this.mainInfoScreen.appendChild(this.additionalInformationText);



            // document.getElementById("mySidebar").style.width = "12%";
            // document.getElementById("main").style.marginLeft = "12%";
        }
    }

    // let staropen = document.getElementById("staropen");
    // let node = document.createTextNode("Star");
    // staropen.appendChild(node);
    // let xy = staropen.addEventListener("click", openNav);
    // staropen.appendChild(xy);

    // function closeNav() {
    //     document.getElementById("mySidebar").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    // }


    const info = new Info();

    let hotstop = [];

    hotstop[0] = new Hotstops("NewYork", "11", "22", "...");
    hotstop[1] = new Hotstops("London", "Raaiiiiiny", "old places", "...");
    hotstop[2] = new Hotstops("Istanbul", "22", "33", "...");

    info.displayHotstop(hotstop[0]);
    info.displayHotstop(hotstop[1]);
    info.displayHotstop(hotstop[2]);

// let starclose = document.getElementById("starclose");
    // let node2 = document.createTextNode("x");
    // starclose.appendChild(node2);
    // let xy2 = starclose.addEventListener("click", closeNav);
    // starclose.appendChild(xy2);
//});