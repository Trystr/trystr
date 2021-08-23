import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About/About';
import Home from './Home/Home';
import Header from './Utils/Header';
import Footer from './Utils/Footer';
import ProfileBox from './Utils/ProfileBox';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="flex-container">
          <ProfileBox />
          <div className="content">
            <Router>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
