import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from './routes/Login/Login';
import ProtectedRoutes from './routes/Login/ProtectedRoutes';
import Dashboard from './routes/Dashboard/Dashboard';
import Company from './routes/Company/Company';
import ServerConnectingComponent from './components/ServerConnectingComponent';
import SelectCompanyComponent from './routes/SelectCompany/SelectCompany';
import AssociateRegister from './routes/AssociateRegister/AssociateRegister';
import ClientRegister from './routes/ClientRegister/ClientRegister';
import InvoiceRegister from './routes/InvoiceRegister/InvoiceRegister';
import SiteVisitsRegister from './routes/SiteVisitsRegister/SiteVisitsRegister';
import OutwardsRegister from './routes/OutwardsRegister/OutwardsRegister';
import CompanyRegister from './routes/CompanyRegister/CompanyRegister';

function App() {
  const [isServerConnected, setIsServerConnected] = useState(true);
  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  // const token = localStorage.getItem("token");
  const isLoggedIn = true;
  const token = 'dsfsafasd';

  return (
    <div className="App">
      {isServerConnected ? (
        <>
          <ToastContainer />
          <Routes>
            {!isLoggedIn ||
              (!token && <Route path="/" element={<Login />}></Route>)}
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/select-company" element={<SelectCompanyComponent />} />
            {/* <Route path="/company" element={<ProtectedRoutes />}> */}
              <Route path="/company" element={<Company />} >
                <Route index element={<Dashboard />} />
                <Route path="/company/dashboard" element={<Dashboard />} />
                <Route path="/company/associate-register" element={<AssociateRegister />} />
                <Route path="/company/client-register" element={<ClientRegister />} />
                <Route path="/company/invoice-register" element={<InvoiceRegister />} />
                <Route path="/company/site-visits-register" element={<SiteVisitsRegister />} />
                <Route path="/company/outward-register" element={<OutwardsRegister />} />
                <Route path="/company/company-register" element={<CompanyRegister />} />
              </Route>
            {/* </Route> */}
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="*" element={<ServerConnectingComponent />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
