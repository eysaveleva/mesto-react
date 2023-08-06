import React from "react";
//popup popup_type_open-image ??
//_type_edit-profile name="edit"
//_type_add-element
//-avatar
//popup-delete

/* «Редактировать профиль»
«Новое место»
«Обновить аватар»
«Вы уверены?» */

function PopupWithForm(props) {
  return(
    <div className={`popup popup${props.name} ${props.isOpen ? 'popup_opened' : false}`}>
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        <form className="popup__form" name={`popup_${props.name}`} method="POST" noValidate="">
        <>{props.children}</>
          <button className={`popup__submit-btn popup__submit-btn_type_${props.name}`} type="submit">
            {props.titleBtn}
          </button>
        </form>
        <button  onClick={props.onClose} className="popup__close-btn" type="button" title="Закрыть окно"  />
      </div>
    </div>
);
}

export default PopupWithForm;