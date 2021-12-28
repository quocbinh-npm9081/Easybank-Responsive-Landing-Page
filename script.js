const nav = document.querySelector(".nav").children;

Array.from(nav).forEach(element => {

    element.addEventListener("click", function() {

        console.log('click');

        Array.from(nav).forEach(element => {

            element.classList.remove("active");
        });

        element.classList.add("active");
    })
});


const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".nav");
const ItemNavigation = navigation.getElementsByTagName("li");
const lightBox = document.querySelector(".light-box");
const iconHamburger = hamburger.querySelector("img");
let count = 0;


hamburger.addEventListener("click", function() {
    if (count == 0) {

        iconHamburger.setAttribute("src", "./images/icon-close.svg");
        count++;
    } else if (count == 1) {

        iconHamburger.setAttribute("src", "./images/icon-hamburger.svg");
        count--;
    }

    navigation.classList.toggle("show");
    lightBox.classList.toggle("hide");

})

Array.from(ItemNavigation).forEach((item) => {
    item.addEventListener("click", function() {

        navigation.classList.remove("show");
        lightBox.classList.add("hide");

        if (count == 0) {

            iconHamburger.setAttribute("src", "./images/icon-close.svg");
            count++;
        } else if (count == 1) {

            iconHamburger.setAttribute("src", "./images/icon-hamburger.svg");
            count--;
        }

    })
})

lightBox.addEventListener("click", function(event) {

    if (event.target != navigation) {

        lightBox.classList.add("hide");
        navigation.classList.remove("show");
        if (count == 0) {

            iconHamburger.setAttribute("src", "./images/icon-close.svg");
            count++;
        } else if (count == 1) {

            iconHamburger.setAttribute("src", "./images/icon-hamburger.svg");
            count--;
        }

    }
})