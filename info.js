// document.addEventListener("DOMContentLoaded", function(event) {


    function openNav() {
        document.getElementById("mySidebar").style.width = "12%";
        document.getElementById("main").style.marginLeft = "12%";
    }

    // let staropen = document.getElementById("staropen");
    // let node = document.createTextNode("Star");
    // staropen.appendChild(node);
    // let xy = staropen.addEventListener("click", openNav);
    // staropen.appendChild(xy);

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    // let starclose = document.getElementById("starclose");
    // let node2 = document.createTextNode("x");
    // starclose.appendChild(node2);
    // let xy2 = starclose.addEventListener("click", closeNav);
    // starclose.appendChild(xy2);
// });