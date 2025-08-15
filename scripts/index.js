const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://example.com/card1.jpg", 
    },
    {
        name: "Lake Louise",
        link: "https://example.com/card2.jpg", 
    },
    {
        name: "Bald Mountains",
        link: "https://example.com/card3.jpg",
    },
    {
        name: "Latemar",
        link: "https://example.com/card4.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://example.com/card5.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://example.com/card6.jpg",
    },
];

let closeEditModal = document.querySelector(".modal__close");
closeEditModal.addEventListener("click", () => {
    document.querySelector("#profile__edit-modal").classList.remove("modal__opened");
});


let profileEditButton = document.querySelector(".profile__edit-button");
let modalPopup = document.querySelector("#profile__edit-modal");

profileEditButton.addEventListener("click", () => {
    modalPopup.classList.add("modal__opened");
})




console.log(initialCards);