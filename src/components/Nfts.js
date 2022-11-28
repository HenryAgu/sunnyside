// Stylesheet
import "./Nfts.css";

// Image
import nftsection from "../images/nft-section.png";
const Nfts = () => {
  return (
    <div className="nft">
      <div className="inner-nft">
        <div className="nft-text">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>
        <div className="nft-image">
            <img src={nftsection} alt="nftsection" />
        </div>
      </div>
    </div>
  );
};

export default Nfts;
