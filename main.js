document.addEventListener("DOMContentLoaded", function(event) {

    var slideIndex = 0;
    function carousel2() {
        // let slideIndex = 0;

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
        // let slideIndex = 0;

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
        // return showSlides2();
        // return showSlides3();
        //ajax request
    }
    showSlides();

    // function showSlides2() {
    //     let i;
    //     let slides2 = document.querySelectorAll("img.p3");
    //     for (i = 0; i < slides2.length; i++) {
    //         slides2[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides2.length) {slideIndex = 1}
    //     slides2[slideIndex-1].style.display = "block";
    //     setTimeout(showSlides2, 2000); // Change image every 2 seconds
    //     // return showSlides2();
    //     // return showSlides3();
    //     //ajax request
    // }
    // showSlides2();




// function showslides() {
//     let slideindex = 0;
//     let i;
//     const slides = document.querySelectorAll("img.p1");
//
//     for (i = 0; i < slides.length; i++) {
//         // setTimeout(  slides[i].style.display = "none", 2000);
//         slides[i].style.display = "none";
//     }return showslides2();
// }
//
//     function showslides2() {
//         let slideindex = 0;
//         let i;
//         const slides = document.querySelectorAll("img.p2");
//
//         for (i = slides.length; i >= 0; i--) {
//             slides[i].style.display = "none";
//         }
//         setTimeout(showslides2, 2000);
//     }
//     showslides2();


    // for (i = 0; i < slides.length; i++) {
    //     // slides[i]. = 10;
    //     // slides[i].style.display = "none";
    //     setTimeout( slides[i].style.display = "none", 2000);
    //         slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}
    //     slides[slideIndex-1].style.display = "block";
    //     i++;
    //     if (i > 3) {
    //         i = 0
    //     }
    // }





//
//     // </script>
//     // <script className="slide">
//
// function showSlides2() {
//     let slideIndex2 = 0;
//     let i;
//     const slides2 = document.querySelectorAll("img.p2");
//     for (i = 0; i < slides2.length; i++) {
//     slides2[i].style.display = "none";
//     }
//     slideIndex2++;
//     if (slideIndex2 > slides2.length) {slideIndex2 = 1}
//     slides2[slideIndex2-1].style.display = "block";
//     setTimeout(showSlides, 2000);
//
// }
// showSlides2();
//
// // </script>
//     // <script>
//
// function showSlides3() {
//     let slideIndex3 = 0;
//     let i;
//     const slides = document.querySelectorAll("img.p3");
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     }
//     slideIndex3++;
//     if (slideIndex3 > slides.length) {slideIndex3 = 1}
//     slides[slideIndex3-1].style.display = "block";
//     setTimeout(showSlides3, 2000);
//     }
// showSlides3();
//
// // </script>
});