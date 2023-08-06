import React from "react";
import Header from "../src/components/Header.js";
import Footer from "../src/components/Footer.js";
import Main from "../src/components/Main.js";
import ImagePopup from "../src/components/ImagePopup.js";
import EditAvatarPopup from "../src/components/EditAvatarPopup.js";
import EditProfilePopup from "../src/components/EditProfilePopup.js";
import AddPlacePopup from "../src/components/AddPlacePopup.js";

function App() {
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard]=React.useState({});
  const [isImagePopup, setImagePopup]=React.useState(false);

  function handleEditAvatarClick () {
    /* const avatarPopup = document.querySelector('.popup-avatar');
    avatarPopup.classList.add('popup_opened'); */
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick () {
    /* const editProfilePopup = document.querySelector('.popup_type_edit-profile');
    editProfilePopup.classList.add('popup_opened'); */
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick () {
   /*  const addPlacePopup = document.querySelector('.popup_type_add-element');
    addPlacePopup.classList.add('popup_opened'); */
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick (card) {
  setSelectedCard(card);
  setImagePopup(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopup(false);
  }

  return (
    <div className="page">
      <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      />
      <Footer/>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopup}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;