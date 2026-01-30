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

const cardTemplate = document.querySelector("#card-template").content.querySelector('.card');


// Wrappers
const cardsWrap = document.querySelector('.cards__list');
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");



// Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = editProfileModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");


//Form data
const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(".modal__input_type_description");

const cardTitleInput = addCardFormElement.querySelector('.modal__input_type_title');

const cardURLInput = addCardFormElement.querySelector('.modal__input_type_url');

// const profileEditButton = document.querySelector(".profile__edit-button");
// const profileAddButton = document.querySelector(".profile__add-button");
// const modalPopup = document.querySelector("#profile__edit-modal");
// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description");
// const profileTitleInput = document.querySelector("#profile-title-input");
// const profileDescriptionInput = document.querySelector(
//   "#profile-description-input"
// );

// const profileFormElement = editProfileModal.querySelector(".modal__form");
// const addCardFormElement = addCardModal.querySelector(".modal__form");
// const cardListElement = document.querySelector(".cards__list");
// const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
// const cardTitleElement = cardTemplate.querySelector('.card__title');
// const addCardModal = document.querySelector(".add-card-modal");
// const addCardForm = document.querySelector(".modal__form-add-card");

// const cardTitleInput = addCardFormElement.querySelector('.modal__input_type_title');
// const cardURLInput = addCardFormElement.querySelector('.modal__input_type_url');

/*                                                              */
/*                          FUNCTIONS                           */
/*                                                              */

function closeModal(modal) {
  modal.classList.remove("modal_is-opened"); 
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editProfileModal);
}
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardURLInput.value;
  renderCard({ name, link }, cardsWrap);
  closeModal(addCardModal);
}


function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;
};

// Form listeners
profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

profileModalCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// add card
addNewCardButton.addEventListener("click", () =>
  openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () => closeModal(addCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

const likeButtons = document.querySelectorAll('.card__like-button');
likeButtons.forEach((likeButton) => { likeButton.addEventListener
("click", () => {
  likeButton.classList.toggle('card__like-button_active');
});
});





// /*                                                              */
// /*                          EVENT HANDLERS                      */
// /*                                                              */

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   closePopup(addCardModal);
// }

// /*                                                              */
// /*                          EVENT LISTERS                       */
// /*                                                              */

// profileEditButton.addEventListener("click", () => {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   modalPopup.classList.add("modal__opened");
// });

// profileAddButton.addEventListener("click", () => {
//   addCardModal.classList.add("modal__opened");
// });

// let closeEditModal = document.querySelector(".modal__close");
// closeEditModal.addEventListener("click", () => {
//   document
//     .querySelector("#profile__edit-modal")
//     .classList.remove("modal__opened");
// });

// profileEditForm.addEventListener("submit", handleProfileFormSubmit);

// initialCards.forEach((cardData) => {
//     const cardElement = getCardElement(cardData);
//     cardListElement.prepend(cardElement);
// });





