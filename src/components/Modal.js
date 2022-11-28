// stylesheet
import "./Modal.css";

// images
import x from "../images/x.png";
import arrow from '../images/arrow.png';
import meta from '../images/meta.png';
import wallet from '../images/wallet.png';
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={(e)=>{
        e.stopPropagation();
      }} className="modal-container">
        <div className="connect-wallet">
          <div className="top-connect">
            <h4>Connect Wallet</h4>
            <img src={x} alt="x" onClick={onClose}/>
          </div>
          <div className="choose-wallet">
            <p>Choose your preferred wallet:</p>
            <div className="meta-mask">
              <div className="author">
                <img src={meta} alt="meta" />
                <h3>Metamask</h3>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="meta-mask">
              <div className="author">
                <img src={wallet} alt="wallet" />
                <h3>WalletConnect</h3>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
