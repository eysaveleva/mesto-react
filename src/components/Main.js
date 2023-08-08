import React, { useState, useEffect } from 'react';
import api from "../utils/api.js";
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
  Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      initialCards.forEach(data => data.id = userData._id);
      setCards(initialCards);
    })
  .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return(
    <main>
      <section className="profile">
        <div className="profile-image">
          <img
            className="profile-image__avatar"
            src={userAvatar}
            alt="Аватар"
          />
          <button
            className="profile-image__change-button"
            type="button"
            aria-label="Изменить аватар"
            onClick={props.onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__block">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                title="Редактировать"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="profile__add-btn"
            type="button"
            title="Добавить"
            onClick={props.onAddPlace}
          />
        </section>
        <section className="elements" aria-label="Различные фотографии">
        {cards.map((data) => (
          <Card
          key={data['_id']}
          card={data}
          onCardClick={props.onCardClick} />
        ))}
        </section>
      </main>
    );
}

export default Main;