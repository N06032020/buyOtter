import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62967751810c00c1cb765a03.mockapi.io/items').then(res => {
      return res.json();
    })
    .then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}

      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content">
        <div className="contentWrapper">
          <h1 className="contentDescr">Все выдры</h1>
          <div className="searchBlock">
            <img src="/img/content/search.svg" alt="Search"></img>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="cardWrapper">
          
          {items.map((item) => (
            <Card
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log('Добавили в закладки')}  
              onPlus={(obj) => onAddToCart(obj)} 
             />
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
