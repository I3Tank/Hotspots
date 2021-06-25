document.addEventListener("DOMContentLoaded", function (event) {

    class Shop {
        constructor() {
            this.mainInfoScreen = document.getElementById("mainInfoScreen");
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
            //Favourite List Function
            this.favouriteList = document.getElementById("favourites");
            this.favouriteList.addEventListener("click", this.openNav);
            this.favouriteListCloseBtn = document.getElementById("closeBtn");
            this.favouriteListCloseBtn.addEventListener("click", this.closeNav);
        }
    }

    const shop = new Shop();
    shop.initializeHeader();

});