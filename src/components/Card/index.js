import React from 'react';
import styles from './Card.module.scss'

function Card({ onClickFavorite, title, imageUrl, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

    return(
        <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src="/img/content/unfavorite.svg" alt="Unfavorite"/>
        </div>
        <img width={133} height={112} src={imageUrl} alt="Otter"/>
        <h5>{title}</h5>
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomDescr}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>

            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/content/btn-checked.svg" : "/img/content/btn-plus.svg"} alt="Plus"/>

        </div>
      </div>
    )
}

export default Card;