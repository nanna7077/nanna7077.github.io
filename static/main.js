var CurrentDiv = "title";
var Divs = ["title", "name", "education", "skills"];
var ScrollCounter = 0;

function onScrollFunction(event) {
    if (event.deltaY < 0) {
        dir = "up";
        ScrollCounter += 1;
    } else if (event.deltaY > 0) {
        dir = "down";
        ScrollCounter -= 1;
    }
    if (ScrollCounter > 8) {
        ScrollCounter = 0;
        nextPage();
    }
    if (ScrollCounter < -8) {
        ScrollCounter = 0;
        prevPage();
    }

    console.log(ScrollCounter);
}


window.addEventListener('wheel', function(event) { onScrollFunction(event) });

function nextPage() {
    if (Divs.indexOf(CurrentDiv) + 1 == Divs.length) {
        Toastify({
            text: "Reached End",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #5c076a, #ff00bb)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function() {} // Callback after click
        }).showToast();
        return
    }
    document.getElementById(CurrentDiv).style.transition = '1s';
    document.getElementById(CurrentDiv).style.opacity = 0;
    CurrentDiv = Divs[Divs.indexOf(CurrentDiv) + 1];
    document.getElementById(CurrentDiv).style.transition = '4s';
    document.getElementById(CurrentDiv).style.opacity = 1;

}

function prevPage() {
    if (Divs.indexOf(CurrentDiv) == 0) {
        Toastify({
            text: "This is the first page",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #5c076a, #ff00bb)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function() {} // Callback after click
        }).showToast();
        return
    }
    document.getElementById(CurrentDiv).style.transition = '4s';
    document.getElementById(CurrentDiv).style.opacity = 0;
    CurrentDiv = Divs[Divs.indexOf(CurrentDiv) - 1];
    document.getElementById(CurrentDiv).style.transition = '4s';
    document.getElementById(CurrentDiv).style.opacity = 1;
}

function checkKey(e) {
    e = e || window.event;
    if ((e.keyCode == "38") || (e.keyCode == "87")) {
        nextPage();
        console.log("up");
    } else if ((e.keyCode == "40") || (e.keyCode == "83")) {
        prevPage();
        console.log("down");
    } else if ((e.keyCode == "37") || (e.keyCode == "65")) {
        prevPage();
        console.log("left");
    } else if ((e.keyCode == "39") || (e.keyCode == "68")) {
        nextPage();
        console.log("right")
    }
}

function gotoPage(pagename) {
    document.getElementById(CurrentDiv).style.transition = '4s';
    document.getElementById(CurrentDiv).style.opacity = 0;
    CurrentDiv = pagename;
    document.getElementById(CurrentDiv).style.transition = '4s';
    document.getElementById(CurrentDiv).style.opacity = 1;
}

window.onkeydown = checkKey;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log(isMobile);