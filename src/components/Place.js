import { useState } from "react";

// stylesheet
import "./Place.css";

// Images
import settings from "../images/settings.png";
import nft1 from "../images/card5.png";
import nft2 from '../images/card6.png';
import nft3 from '../images/card7.png';
import nft4 from '../images/card8.png';
import nft5 from '../images/card1.png';
import nft6 from '../images/card2.png';
import nft7 from '../images/card9.png';
import nft8 from '../images/card4.png';
import nft9 from '../images/card10.png';
import nft10 from '../images/card11.png';
import nft11 from '../images/card12.png';
import nft12 from '../images/card13.png';
import nft13 from '../images/card14.png';
import nft14 from '../images/card15.png';
import nft15 from '../images/card16.png';
import nft16 from '../images/card17.png';
import stars from "../images/stars.png";
const Place = () => {
  const [places, setplaces] = useState([
    {
      id: 1,
      image: nft1,
    },
    {
      id: 2,
      image: nft2,
    },
    {
      id: 3,
      image: nft3,
    },
    {
      id: 4,
      image: nft4,
    },
    {
      id: 5,
      image: nft5,
    },
    {
      id: 6,
      image: nft6,
    },
    {
      id: 7,
      image: nft7,
    },
    {
      id: 8,
      image: nft8,
    },
    {
      id: 9,
      image: nft9,
    },
    {
      id: 10,
      image: nft10,
    },
    {
      id: 11,
      image: nft11,
    },
    {
      id: 12,
      image: nft12,
    },
    {
      id: 13,
      image: nft13,
    },
    {
      id: 14,
      image: nft14,
    },
    {
      id: 15,
      image: nft15,
    },
    {
      id: 16,
      image: nft16,
    },
  ]);
  return (
    <div className="place">
      <div className="place-header">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <div className="location">
          <p>Location</p>
          <img src={settings} alt="settings" />
        </div>
      </div>
      <div className="nft-box">
        {places.map((place, index) => (
          <div className="nft-card" key={place.id}>
            <img src={place.image} alt="card1" />
            <div className="nft-card-text">
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

export default Place;
