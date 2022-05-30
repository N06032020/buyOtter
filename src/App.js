import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: 'Выдра Apple', 
    price: 12999,
    imageUrl: '/img/content/o1.png'
  },

  {
    title: 'Выдра Google', 
    price: 11999,
    imageUrl: '/img/content/o2.png'
  },

  {
    title: 'Выдра Samsung', 
    price: 10999,
    imageUrl: '/img/content/o3.png'
  },

  {
    title: 'Выдра Microsoft', 
    price: 9999,
    imageUrl: '/img/content/o4.png'
  },
];


function App() {
  return (
    <div className="wrapper">

      <div style={{display: 'none'}} className="overlay">
        <Drawer/>
      </div>

      <Header/>

      <div className="content">
        <div className="contentWrapper">
          <h1 className="contentDescr">Все выдры</h1>
          <div className="searchBlock">
            <img src="/img/content/search.svg" alt="Search"></img>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="cardWrapper">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} onClick={() => console.log(obj)} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
