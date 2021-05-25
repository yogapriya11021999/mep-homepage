import '././home/home.jsx';
import '././home/home.css';
import homeImage from "./home/homeImage.png";
import bell from "./home/bell.png";
import packing from "./home/packing.png";
import trolley from "./home/trolley.png";
import boxes from "./home/boxes.png";
import delivery from "./home/delivery.png";
import warehouse from "./home/warehouse.png";
import arrow from "./home/arrow.png";

function App() {
  return (
    <div className="App">
      <home>
          <div className="background">
              <div className="box">
                <div className="logo">LOGO</div>
                <img src={homeImage} alt="bitmap@2x.png" className="homeImage" />
              </div>
              <div className="br"><div className="BR">BR</div></div>
              <div className="brand">Brandan  Wright</div>
              <div className="line"></div>
              <div className="Help">Help</div>
              <div className="oval"><div className="OVAL">?</div></div>
              <div><img src={bell} alt="bitmap@2x.png" className="bell" /></div>
              <div className="topic">Welcome to
              <div className="welcome">Con5 Online Ordering System.</div></div>
              <div className="packing-border"><img src={packing} alt="bitmap@2x.png" className="packing" /><div className="packing-frame">PLACE AN ORDER</div></div>
              <div className="trolley-border"><img src={trolley} alt="bitmap@2x.png" className="trolley" /><div className="trolley-frame">MY ORDER</div></div>
              <div className="boxes-border"><img src={boxes} alt="bitmap@2x.png" className="boxes" /><div className="boxes-frame">INVENTORY</div></div>
              <div className="delivery-border"><img src={delivery} alt="bitmap@2x.png" className="delivery" /><div className="delivery-frame">On site Delivery</div><div className="delivery-line"></div></div>
              <div className="warehouse-border"><img src={warehouse} alt="bitmap@2x.png" className="warehouse" /><div className="warehouse-frame">Return</div><div className="return-line"></div></div>
              <div className="continue">Continue Shopping<img src={arrow} alt="bitmap@2x.png" className="arrow" /></div>
              <div className="footer">
© Con5 Online Ordering System, 2019
    </div>
        </div>
      </home>
    </div>
  );
}

export default App;
