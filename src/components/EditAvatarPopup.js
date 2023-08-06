import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name='popupAvatar'
      title='Обновить аватар'
      titleBtn='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <input
        id="link-avatar-input"
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
        name ="link"
        required=""
      />
      <span className="link-avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;