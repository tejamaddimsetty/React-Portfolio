import Home from './pages/home';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/about us';
import Works from './pages/works';
import Services from './pages/services';
import Contact from './pages/contact';
import Explanation from './pages/single';

function App() {
  return (
    <div>
      <Router>

        <Header/>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/works' component={Works} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/work-single' component={Explanation} />
          </Switch>

        <Footer/>
      </Router>
    </div>

  );
  
}

export default App;
