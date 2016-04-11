function searchListOn() {
    var test = document.getElementById("searchlist");
    test.style.display = "block";
}

function searchListOut() {
    document.getElementById("searchlist").style.display = "none";
}

var carouselImgUrl = ["src/carousel0.jpg", "src/carousel1.jpg", "src/carousel2.jpg", ""];
var carouselText = ["《致命诱惑》诱惑开播", "《犯罪心理：国境之外》第1季", "《神盾局特工》第3季热播中", ""];
var carouselControl;
var carouselIndex = 0;
window.onload = function() {
    carouselStart();
}

function carouselStart() {
    var imgNum = 0, textNum = 0;
    carouselControl = setInterval(carouselFunc, 2000);
    function carouselFunc() {
        if (carouselIndex == 4) {
            carouselIndex = 0;
        }
        document.getElementById("carouselImage").src = carouselImgUrl[carouselIndex];
        document.getElementById("carouselText").innerHTML = carouselText[carouselIndex];
        var spanC = document.getElementById("carousel-button-ul").getElementsByTagName("span");
        for (var x = 0; x < 4; x++) {
            if (x == carouselIndex) {
                spanC[x].style.backgroundColor = "rgb(237,237,237)";
            }
            else {
                spanC[x].style.backgroundColor = "rgb(150,150,150)";
            }
        }
        carouselIndex++;
    }
}

function carouselSelect(obj) {
    clearInterval(carouselControl);
    carouselIndex = obj.dataset.id;
    document.getElementById("carouselImage").src = carouselImgUrl[carouselIndex];
    document.getElementById("carouselText").innerHTML = carouselText[carouselIndex];
    var spanC = document.getElementById("carousel-button-ul").getElementsByTagName("span");
    for (var x = 0; x < 4; x++) {
        if (x == carouselIndex) {
            spanC[x].style.backgroundColor = "rgb(237,237,237)";
        }
        else {
            spanC[x].style.backgroundColor = "rgb(150,150,150)";
        }
    }
}

function carouselContinue() {
    carouselStart();
}
