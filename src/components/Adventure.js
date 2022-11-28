import { useState } from "react";
// Images
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card7.png";
import card8 from "../images/card8.png";
import stars from "../images/stars.png";
import "./Adventure.css";
const Adventure = () => {
  const [nfts, setNfts] = useState([
    {
      id: 1,
      image: card1,
    },
    {
      id: 2,
      image: card2,
    },
    {
      id: 3,
      image: card3,
    },
    {
      id: 4,
      image: card4,
    },
    {
      id: 5,
      image: card5,
    },
    {
      id: 6,
      image: card6,
    },
    {
      id: 7,
      image: card7,
    },
    {
      id: 8,
      image: card8,
    },
  ]);
  return (
    <div className="adventure">
      <div className="adventure-header">
        <h1>Inspiration for your next adventure</h1>
      </div>
      <div className="adventure-box">
        {nfts.map((nft, index) => (
          <div className="adventure-card" key={nft.id}>
            <img src={nft.image} alt="card1" />
            <div className="adventure-card-text">
              <div className="left-text">
                <p>Desert king</p>
                <p>2345km away</p>
              </div>
              <div className="right-text">
                <p className="duration">1MBT per night</p>
                <p>available for 2weeks stay</p>
              </div>
            </div>
            <div className="rating">
              <img src={stars} alt="stars" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventure;
