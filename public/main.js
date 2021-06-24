document.addEventListener("DOMContentLoaded", function(event) {

    function printTest(){
        console.log("test");
    }

    var slideIndex = 0;
    function carousel2() {
        let i;
        let x = document.querySelectorAll("img.p2");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel2, 2000); // Change image every 2 seconds
    }
    carousel2();
    carousel2();

    function carousel() {
        let i;
        let x = document.querySelectorAll("img.p1");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    carousel();

    function showSlides() {
        let i;
        let slides = document.querySelectorAll("img.p3");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    showSlides();
});