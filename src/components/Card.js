function Card() {
    return(
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
    )
}

export default Card;