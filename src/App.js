
function App() {
  return (
    <div className="wrapper">
      <header className="App-header">

        <div className="headerLeft">
          <img width={40} height={40} src="/img/header/logo.png"/>
          <div>
            <h3 className="label">BuyOtter</h3>
            <p>Магазин лучших выдр</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/header/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/header/account.svg"/>
          </li>
        </ul>
        
      </header>

      <div className="content">
        <h1 className="contentDescr">Все выдры</h1>
        
        <div className="cardWrapper">

          <div className="card">
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
