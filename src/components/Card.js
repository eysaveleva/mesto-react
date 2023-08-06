import React from "react";


function Card({card,onCardClick}) {
    return (
        <div className="element">
          <button className="element__delete"
          type="button"
          aria-label="удалить">
            </button>
          <div className="element__image"
           style={{ backgroundImage: `url(${card.link})` }}
            alt="изображение"
            onClick={() => onCardClick({link: card.link, name: card.name})}
            />
      <div className="element__title">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-block">
          <button type="button" className="element__like-btn" title="like"></button>
          <p className="element__like-counter">{card.likes.length}</p>
      </div>
      </div>
    </div>

    )
}

export default Card;