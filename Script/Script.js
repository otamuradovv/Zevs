const Savatcha = document.querySelector(".nav_user-icons")
const NavCard = document.querySelector(".nav_card")
const CardsGlavniy = document.querySelector(".cards_glavniy")
const CardsGlavniyImg = document.querySelector("cards_glavniy-img")
const cardsViborImg = document.querySelector(".cards_vibor-img")
// console.log(Savatcha);
// console.log(NavCard);



    Savatcha.addEventListener("click", () => {

        console.log("salom");
        NavCard.classList.toggle("active");
        console.log(NavCard);
    })



