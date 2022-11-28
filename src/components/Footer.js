// Stylesheet
import "./Footer.css"
// Images
import Logo from '../images/logo.svg'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
function Footer() {
  return (
    <footer>
        <div className="inner-footer">
            <div className="logo-socials">
                <img src={Logo} alt="Logo" />
                <div className="socials">
                    <a href="."><img src={facebook} alt="facebook" /></a>
                    <a href="."><img src={instagram} alt="instagram" /></a>
                    <a href="."><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
            <div className="community footer-list">
                <h4>Community</h4>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>
            <div className="places footer-list">
                <h4>Places</h4>
                <ul>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
            </div>
            <div className="about footer-list">
                <h4>About us</h4>
                <ul>
                    <li>Road map</li>
                    <li>Creators</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>Ⓒ 2022 Metabnb</p>
        </div>
    </footer>
  )
}

export default Footer