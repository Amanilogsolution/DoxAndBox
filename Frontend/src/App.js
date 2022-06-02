import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard';
import RecordPickup from './component/Request/RecordPickup/RecordPickup';
import RecordRetrival from './component/Request/RecordRetrival/RecordRetrival';
import ScanningRequest from './component/Request/ScanningRequest/ScanningRequest';
import Shredding from './component/Request/Shredding/Shredding';
import OtherRequest from './component/Request/Other/OtherRequest';
import ScanningReports from './component/Response/ScanningReports/ScanningReports';
import InwardReports from './component/Response/InwardReports/InwardReports';
import RetrivalReports from './component/Response/RetrivalReport/RetrivalReport';
import StockReports from './component/Response/StockReports/StockReports';
import Profile from './component/Profile/Profile';
// import PagenotFound from './component/Home/Home';

function App() {
  return (
    <>
        <Router>
        <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/Profile" exact element={<Profile/>}/>
                <Route path="/Dashboard"   element={<Dashboard/>}/>
                <Route path="/RecordPickup"   element={<RecordPickup/>}/>
                <Route path="/RecordRetrival"   element={<RecordRetrival/>}/>
                <Route path="/ScanningRequest"   element={<ScanningRequest/>}/>
                <Route path="/Shredding"   element={<Shredding/>}/>
                <Route path="/OtherRequest"   element={<OtherRequest/>}/>
                <Route path="/ScanningReports"   element={<ScanningReports/>}/>
                <Route path="/InwardReports"   element={<InwardReports/>}/>
                <Route path="/RetrivalReports"   element={<RetrivalReports/>}/>
                <Route path="/StockReports"   element={<StockReports/>}/>

                {/* <Route path="*"  exact component={PagenotFound}/> */}
                </Routes>
        </Router>
    </>
  );
}

export default App;
