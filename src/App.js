
function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
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
      </div>

      <header className="App-header">

        <div className="headerLeft">
          <img width={40} height={40} src="/img/header/logo.png" alt="Logo"/>
          <div>
            <h3 className="label">BuyOtter</h3>
            <p>Магазин лучших выдр</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/header/cart.svg" alt="Cart"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/header/account.svg" alt="Account"/>
          </li>
        </ul>
        
      </header>

      <div className="content">
        <div className="contentWrapper">
          <h1 className="contentDescr">Все выдры</h1>
          <div className="searchBlock">
            <img src="/img/content/search.svg" alt="Search"></img>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        
        <div className="cardWrapper">

          <div className="card">
            <div className="favorite">
              <img src="/img/content/unfavorite.svg" alt="Unfavorite"/>
            </div>
            <img width={133} height={112} src="/img/content/o1.png" alt="Otter"/>
            <h5>Выдра Apple</h5>
            <div className="cardBottom">
              <div className="cardBottomDescr">
                <span>Цена:</span>
                <b>12 999руб.</b>
              </div>
              <button className="btn">
                <img width={11} height={11} src="/img/content/btn.svg" alt="Plus"/>
              </button>
            </div>
          </div>

          <div className="card">
          <img src="/img/content/favorite.svg" alt="Favorite"/>
            <img width={133} height={112} src="/img/content/o2.png" alt="Otter"/>
            <h5>Выдра Google</h5>
            <div className="cardBottom">
              <div className="cardBottomDescr">
                <span>Цена:</span>
                <b>11 999руб.</b>
              </div>
              <button className="btn">
                <img width={11} height={11} src="/img/content/btn.svg" alt="Plus"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/content/o3.png" alt="Otter"/>
            <h5>Выдра Samsung</h5>
            <div className="cardBottom">
              <div className="cardBottomDescr">
                <span>Цена:</span>
                <b>10 999руб.</b>
              </div>
              <button className="btn">
                <img width={11} height={11} src="/img/content/btn.svg" alt="Plus"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/content/o4.png" alt="Otter"/>
            <h5>Выдра Microsoft</h5>
            <div className="cardBottom">
              <div className="cardBottomDescr">
                <span>Цена:</span>
                <b>9 999руб.</b>
              </div>
              <button className="btn">
                <img width={11} height={11} src="/img/content/btn.svg" alt="Plus"/>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
