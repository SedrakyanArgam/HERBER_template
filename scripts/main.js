document.getElementById("topArrow").style = "display:none";
let z = true;
window.onscroll = function () {

    let topBtn = document.getElementById("topBtn").offsetTop

    if (window.scrollY > topBtn) {
        document.getElementById("topArrow").style = "display:block";
    }
    else {
        document.getElementById("topArrow").style = "display:none";
    }

    let s1 = 0;
    let t;
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;
    let m = document.getElementById("statistica").offsetTop;

    function numanimet() {

        if (s1 <= 12) {
            s1++;
            document.getElementById("stat1").innerHTML = +s1;
        }
        if (s2 < 345) {
            s2 = s2 + 31;
            document.getElementById("stat2").innerHTML = s2;
        }

        if (s3 < 500) {
            s3 = s3 + 35;
            document.getElementById("stat3").innerHTML = s3;
        }
        if (s4 < 250) {
            s4 = s4 + 16;
            document.getElementById("stat4").innerHTML = s4;
        }

    }

    if (window.scrollY > m - 500) {
        if (z == true) {
            z = false;

            t = setInterval(numanimet, 50);
        }

    }


    let marginImg = document.getElementById("statistica").offsetTop
    if (window.scrollY > marginImg) {
        document.getElementById("imageMarginY").style = "transform: translateY(0%); "
        document.getElementById("imageMarginY_2").style = "transform: translateY(0%);"
        document.getElementById("imageMarginY_4").style = "transform: translateY(0%);"
        document.getElementById("imageMarginX").style = "transform: translateX(0%);"
        document.getElementById("imageMarginX_2").style = "transform: translateX(0%);"
    }

}
let burgerBtnBig = document.getElementById("burgerBarBig")
let burgerBtn = document.getElementById("burgerBar")
let closeBurger = document.getElementById("closeBurger")
burgerBtn.addEventListener('click', function () {
    document.getElementById("burgerMenu").style = "transform: translateX(0)";
})
burgerBtnBig.addEventListener('click', function () {
    document.getElementById("burgerMenu").style = "transform: translateX(0)";
})

closeBurger.addEventListener("click", function () {
    document.getElementById("burgerMenu").style = "transform: translateX(102%)"
})
let thisImg = document.querySelectorAll(".thisImg")

for (i = 0; i < thisImg.length; i++) {
    thisImg[i].addEventListener("click", function () {
        document.querySelector(".blackBg").style = "display:block";
        document.getElementById("blackBgImg").src = this.src
    })

}

let closeBlackBg = document.getElementById("closeBlackBg")
closeBlackBg.addEventListener("click", function () {
    document.querySelector(".blackBg").style = "display:none"
})
let navMenu = document.querySelector(".navMenu")
let navMenuBurger = document.getElementById("navMenuBurger")
let closeMenuBurger = document.querySelector(".closeMenuBurger")
navMenu.addEventListener('click', function () {
    navMenuBurger.style = "transform: translateX(0)";
})
closeMenuBurger.addEventListener('click', function () {
    navMenuBurger.style = "transform: translateX(-105%)";

})