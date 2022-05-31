import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import PagenotFound from './component/Navbar/Navbar';

function App() {
  return (
    <>
        <Router>
        <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/Home"   element={<Home/>}/>
                <Route path="*"  exact component={PagenotFound}/>
                </Routes>
        </Router>
    </>
  );
}

export default App;
