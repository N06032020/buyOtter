function Drawer() {
    return(
        <div className="drawer">
        <h2>Корзина<img class="removeBtn" src="/img/cart/remove.svg" alt="Remove"/></h2>

        <div className="items">
          <div className="cartItem">
          <img width={70} height={70} src="/img/content/o1.png" alt="Otter"/>
          <div className="cartDescrWrapper">
            <p className="cartItemDescr">Выдра Apple</p>
            <b>12 999 руб.</b>
          </div>
          <img class="removeBtn" src="/img/cart/remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem">
          <img width={70} height={70} src="/img/content/o1.png" alt="Otter"/>
          <div className="cartDescrWrapper">
            <p className="cartItemDescr">Выдра Apple</p>
            <b>12 999 руб.</b>
          </div>
          <img class="removeBtn" src="/img/cart/remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem">
          <img width={70} height={70} src="/img/content/o1.png" alt="Otter"/>
          <div className="cartDescrWrapper">
            <p className="cartItemDescr">Выдра Apple</p>
            <b>12 999 руб.</b>
          </div>
          <img class="removeBtn" src="/img/cart/remove.svg" alt="Remove"/>
          </div>
        </div>

      <div className="cartSummaryBlock">
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
          <button className="greenButton">Оформить заказ <img src="/img/cart/arrow.svg" alt="arrow"/></button>
        </div>
      </div>
    )
}

export default Drawer;