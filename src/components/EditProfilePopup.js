import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name='edit'
      title='Редактировать профиль'
      isOpen={props.isOpen}
      titleBtn='Сохранить'
      onClose={props.onClose}>
      <input
      id="name-input"
      className="popup__input"
      type="text"
      placeholder="Имя"
      name ="newName"
      minLength="2"
      maxLength="40"
      required=""
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        id="job-input"
        className="popup__input"
        type="text"
        placeholder="О себе"
        name="about"
        minLength="2"
        maxLength="200"
        required=""
      />
      <span className="popup__input-error job-input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;