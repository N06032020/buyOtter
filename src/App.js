import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
    </div>
  );
}

export default App;
