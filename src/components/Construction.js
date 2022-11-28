// Stylesheet
import "./Construction.css";

// Router Links
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className="construction">
      <div className="construct-message">
        <h1>Oops!</h1>
        <p>Page is under Construction,please return to <Link to='/'>Home</Link></p>
      </div>
    </div>
  );
};

export default Construction;
