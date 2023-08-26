import React, {  useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import ImagePopup from "./ImagePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";
import ConfirmDeletePopup from "./ConfirmDeletePopup.js";


export default function App() {
  //попап
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen,setIsConfirmDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard]=useState({});
  const [isImagePopup, setImagePopup]=useState(false);
  const [currentUser,setCurrentUser]=useState({});
  const [cards, setCards] = useState([]);


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    setIsConfirmDeletePopupOpen(false);
    setImagePopup(false);
  };

  function handleOverlayClose(event) {
    if (event.target.classList.contains("popup")) closeAllPopups();
  };

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  };

  function handleUpdateAvatar(dataAvatar) {
    api.changedAvatar(dataAvatar)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups();
      })
    .catch(console.error);
  };

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  };

  function handleUpdateUser(user) {
    api.saveUserChanges(user)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
    .catch(console.error);
  };

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick (card) {
  setSelectedCard(card);
  setImagePopup(true);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.dislikedCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
      .catch((err) => {
        console.log(err);
      });
    }
    else {
      api.likedCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
          })
        .catch((err) => {
        console.log(err);
        });
    }
  };

  function handleDeletePopupClick(card) {
    console.log(card);
    setIsConfirmDeletePopupOpen({...isConfirmDeletePopupOpen, isOpen: true, card: card});
  };


  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards(state => state.filter(item => item._id !== card._id));
        closeAllPopups();
      })
    .catch(console.error);
  };

  function handleAddPlaceSubmit(data) {
    api.postNewCard(data)
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
        console.log(data);
      })
    .catch(console.error);
  };


  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
    .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardDeleteClick={handleDeletePopupClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer/>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopup}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        onOverlayClose={handleOverlayClose}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        onOverlayClose={handleOverlayClose}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        onOverlayClose={handleOverlayClose}
      />
      <ConfirmDeletePopup
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        onCardDelete={handleCardDelete}
        onOverlayClose={handleOverlayClose}
        onCardDeleteClick={handleDeletePopupClick}
        />
    </div>
    </CurrentUserContext.Provider>
  );
}