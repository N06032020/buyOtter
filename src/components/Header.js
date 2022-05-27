function Header() {
    return(
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
    )
}

export default Header;