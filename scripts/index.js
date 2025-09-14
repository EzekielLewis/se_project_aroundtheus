const initialCards = [
  {
    name: "Yosemite Valley",
    link: "./images/yosemite.jpg",
    alt: "Yosemite Valley",
  },
  {
    name: "Lake Louise",
    link: "./images/lake-louise.jpg",
    alt: "Lake Louise",
  },
  {
    name: "Bald Mountains",
    link: "./images/bald-mountains.jpg",
    alt: "Bald Mountains",
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg",
    alt: "Latemar",
  },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise.jpg",
    alt: "Vanoise National Park",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago.jpg",
    alt: "Lago di Braies",
  },
];

/*                                                              */
/*                          ELEMENTS                            */
/*                                                              */
const profileEditButton = document.querySelector(".profile__edit-button");
const modalPopup = document.querySelector("#profile__edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-desciption-input"
);

const profileEditForm = document.querySelector(".modal__form");
const cardListEL = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardImageEL = cardTemplate.querySelector('.card__image');
const cardTitleEL = cardTemplate.querySelector('.card__title');

/*                                                              */
/*                          FUNCTIONS                           */
/*                                                              */

function closePopup() {
  modalPopup.classList.remove("modal__opened"); 
}

function getCardElement(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEL = cardElement.querySelector('.card__image');
    const cardTitleEL = cardElement.querySelector('.card__title');

    cardTitleEL.textContent = cardData.name;
    cardImageEL.src = cardData.link;
    cardImageEL.alt = cardData.name;

    return cardElement;
};

/*                                                              */
/*                          EVENT HANDLERS                      */
/*                                                              */

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/*                                                              */
/*                          EVENT LISTERS                       */
/*                                                              */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  modalPopup.classList.add("modal__opened");
});

let closeEditModal = document.querySelector(".modal__close");
closeEditModal.addEventListener("click", () => {
  document
    .querySelector("#profile__edit-modal")
    .classList.remove("modal__opened");
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardListEL.prepend(cardElement);
});