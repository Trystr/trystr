import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        <Router>
          <div className="flex-container">
            <ProfileBox />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                
              </Switch>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
