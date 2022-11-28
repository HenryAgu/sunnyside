// Stylesheets
import "./Hero.css";

// Images
import hero from "../images/hero.png";
import mbtoken from "../images/mbtoken.svg";
import metamask from "../images/metamask.svg";
import opensea from "../images/opensea.svg";
const Home = () => {
  return (
    <div className="home">
      {/* Hero section */}
      <div className="home-hero-section">
        <div className="hero-text">
          <div className="hero-text-header">
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the
              <span> Metaverse</span>
            </h1>
          </div>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="search">
            <input type="text" placeholder="Search for location" />
            <button>search</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" />
        </div>
      </div>
      {/* Sponsors */}
      <div className="sponsors">
        <div className="inner-sponsors">
          <img src={mbtoken} alt="mbtoken" />
          <img src={metamask} alt="metamask" />
          <img src={opensea} alt="opensea" />
        </div>
      </div>
    </div>
  );
};

export default Home;
