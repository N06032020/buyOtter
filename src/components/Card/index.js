import React from 'react';
import styles from './Card.module.scss'

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

    return(
        <div className={styles.card}>
        <div className={styles.favorite} onClick={props.onClickFavorite}>
          <img src="/img/content/unfavorite.svg" alt="Unfavorite"/>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="Otter"/>
        <h5>{props.title}</h5>
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomDescr}>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>

            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/content/btn-checked.svg" : "/img/content/btn-plus.svg"} alt="Plus"/>

        </div>
      </div>
    )
}

export default Card;