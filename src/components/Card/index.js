import styles from './Card.module.scss'

function Card(props) {
    return(
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/content/unfavorite.svg" alt="Unfavorite"/>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="Otter"/>
        <h5>{props.title}</h5>
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomDescr}>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <button className={styles.btn} onClick={props.onClick}>
            <img width={11} height={11} src="/img/content/btn.svg" alt="Plus"/>
          </button>
        </div>
      </div>
    )
}

export default Card;