import "./Utils.css";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function ProfileBox() {
  return (
    <div className="profile-box">
      <Router>
        <nav className="nav-box">
          <ul>
            <li className="profile-list-item">
              <Link to="/" className="profile-link">
                Home
              </Link>
            </li>
            <li className="profile-list-item">
              <Link to="/about" className="profile-link">
                About
              </Link>
            </li>
            <li className="profile-list-item">
              <Link to="/user" className="profile-link">
                User
              </Link>
            </li>
            <li className="profile-list-item">
              <Link to="/messages" className="profile-link">
                Messsages
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default ProfileBox;


