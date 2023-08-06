import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name='addcard'
      title='Новое место'
      isOpen={props.isOpen}
      titleBtn='Создать'
      onClose={props.onClose}>
      <input
        id="element-name"
        className="popup__input"
        type="text"
        placeholder="Название"
        name ="name"
        minLength="2"
        maxLength="30"
        required=""
      />
      <span className="popup__input-error element-name-error"></span>
      <input
        id="element-link"
        className="popup__input"
        type="url"
        placeholder="Ссылка на изображение"
        name="link"
        required=""
      />
      <span className="popup__input-error element-link-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;