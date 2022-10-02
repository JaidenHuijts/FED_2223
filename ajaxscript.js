console.log("ajax")

var search = document.querySelector("#search")
var zoekButton = document.querySelector("button:nth-of-type(1)");
var menu = document.querySelector("#menu")
var hamburgerButton = document.querySelector("button:nth-of-type(2)");
var languageButton = document.querySelector("header nav button");



var kickgeluid = new Audio("AjaxContent/ballkick.wav"); //bron: https://freesound.org
hamburgerButton.addEventListener("click", toggleMenu);
var deNav = document.querySelector("header nav");


zoekButton.addEventListener("click", toggleSearch);
var openzoekButton = document.querySelector("form")






function toggleMenu() {

    kickgeluid.play();
    deNav.classList.toggle("open");
    hamburgerButton.classList.toggle("open");

    openzoekButton.classList.remove("ga");
    zoekButton.classList.remove("ga");
}


zoekButton.addEventListener("click", toggleSearch);
var openzoekButton = document.querySelector("form")

function toggleSearch() {
    kickgeluid.play();
    openzoekButton.classList.toggle("ga");
    zoekButton.classList.toggle("ga");

    deNav.classList.remove("open");
    hamburgerButton.classList.remove("open");
}









languageButton.addEventListener("click", toggle);
var talenButton = document.querySelector("header nav ul:nth-of-type(3)")

function toggle() {

    talenButton.classList.toggle("laatzien");

}






// var menu = document.querySelector("#menu")
// var hamburgerButton = document.querySelector("#hamburger");

// hamburgerButton.addEventListener("click", toggleMenu);

// function toggleMenu() {
// 	var openButton = document.querySelector("header nav");
// 	openButton.classList.toggle("open");
//     menu.src = "AjaxContent/ic-close.svg";

// }




function createCaroCarrousel(carrouselID) {
    let carrousel = document.querySelector("#" + carrouselID);
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
    let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let linkButtons = carrousel.querySelectorAll(":scope > a");


    /*****************************/
    /* LINKS/RECHTS LINK-BUTTONS */
    /*****************************/

    // de links/rechts link-buttons initialiseren en activeren
    function iniLinkButtons() {
        for (linkButton of linkButtons) {
            // beide link-buttins naar kliks laten luisteren
            linkButton.addEventListener("click", function (e) {
                // als er geklikt wordt
                // de default-actie (de link volgen) niet uitvoeren
                e.preventDefault();

                // bepalen of er op 'previous' of 'next' geklikt is
                let direction = this.getAttribute("href");
                // naar het element gaan
                goToElement(direction);
            });
        }
    }


    /*****************/
    /* START POSITIE */
    /*****************/

    // het eerste element actief maaken
    function iniStartPosition() {
        // eerste element current maken
        carrouselElements[0].classList.add("current");
        // aan het begin van de container starten
        carrouselElementsContainer.scrollLeft = 0;
    }


    /*********************/
    /* ALGEMENE FUNCTIES */
    /*********************/

    //////////////////////////////////
    // naar volgende/vorige element //
    function goToElement(direction) {
        // het huidige current element opzoeken
        let currentElement = carrousel.querySelector(":scope > ul > .current");

        let newElement;
        if (direction == "previous") {
            // het nieuwe element is het vorige broertje/zusje
            newElement = currentElement.previousElementSibling;
            // checken of nieuwe element bestaat - anders naar laatste
            if (!newElement) {
                newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
            }
        } else {
            // het nieuwe element is het volgende broertje/zusje
            newElement = currentElement.nextElementSibling;
            // checken of nieuwe element bestaat - anders naar eerste
            if (!newElement) {
                newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
            }
        }

        // naar het nieuwe element scrollen
        scrollToElement(newElement);
    }


    ///////////////////////////
    // scroll to new element //
    function scrollToElement(newElement) {
        // carousel container opzoeken
        let carouselElementsContainer = newElement.closest("ul");

        // de linker offset van het nieuwe element bepalen 
        let newElementOffset = newElement.offsetLeft;

        // de carousel naar de berekende positie scrollen
        carouselElementsContainer.scrollTo({
            left: newElementOffset
        });

        // nieuwe element current element maken
        updateCurrentElement(newElement);
    }


    ////////////////////////////
    // update current element //
    function updateCurrentElement(newElement) {
        // het huidige current element opzoeken
        let currentElement = carrousel.querySelector(":scope > ul > .current");
        // de class current verwijderen
        currentElement.classList.remove("current");

        // de class current toevoegen
        newElement.classList.add("current");
    }


    // de linkbuttons activeren
    iniLinkButtons();
    // de carrousel bij het begin starten
    iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function () {
    // hier de id gebruiken van de section in de html
    createCaroCarrousel("spelerslider");
    //je kunt hier ook meerdere carrousellen activeren
})();


