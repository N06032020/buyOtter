import styles from './Drawer.module.scss'

function Drawer(props) {
    return(
      <div className="overlay">
          <div className={styles.drawer}>
          <h2>Корзина<img onClick={props.onClose} className="removeBtn" src="/img/cart/remove.svg" alt="Close"/></h2>

          <div className={styles.items}>
            <div className={styles.cartItem}>
            <img width={70} height={70} src="/img/content/o1.png" alt="Otter"/>
            <div className={styles.cartDescrWrapper}>
              <p className={styles.cartItemDescr}>Выдра Apple</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/cart/remove.svg" alt="Remove"/>
            </div>
            <div className={styles.cartItem}>
            <img width={70} height={70} src="/img/content/o1.png" alt="Otter"/>
            <div className={styles.cartDescrWrapper}>
              <p className={styles.cartItemDescr}>Выдра Apple</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/cart/remove.svg" alt="Remove"/>
            </div>
            <div className={styles.cartItem}>
            <img width={70} height={70} src="/img/content/o1.png" alt="Otter"/>
            <div className={styles.cartDescrWrapper}>
              <p className={styles.cartItemDescr}>Выдра Apple</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/cart/remove.svg" alt="Remove"/>
            </div>
          </div>

        <div className={styles.cartSummaryBlock}>
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className={styles.greenButton}>Оформить заказ <img src="/img/cart/arrow.svg" alt="arrow"/></button>
          </div>
        </div>
      </div>
    )
}

export default Drawer;