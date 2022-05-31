import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard';
// import PagenotFound from './component/Home/Home';

function App() {
  return (
    <>
        <Router>
        <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/Dashboard"   element={<Dashboard/>}/>
                {/* <Route path="*"  exact component={PagenotFound}/> */}
                </Routes>
        </Router>
    </>
  );
}

export default App;
