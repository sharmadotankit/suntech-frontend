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
import AddEditClient from './routes/AddEditClient/AddEditClient';
import OfferLetterRegister from './routes/OfferLetterRegister/OfferLetterRegister';
import ProjectsRegister from './routes/ProjectsRegister/ProjectsRegister';
import ExpensesRegister from './routes/ExpensesRegister/ExpensesRegister';
import LeaveRecords from './routes/LeaveRecords/LeaveRecords';
import AddEditOffer from "./routes/AddEditOffer/AddEditOffer";
import AddEditProject from './routes/AddEditProject/AddEditProject';
import AddEditInvoices from './routes/AddEditInvoices/AddEditInvoices';
import CreateInvoiceLetter from './routes/CreateInvoiceLetter/CreateInvoiceLetter';
import  AddEditSiteVisits from './routes/AddEditSiteVisits/AddEditSiteVisits';
import  AddEditOutward  from './routes/AddEditOutward/AddEditOutward';
import AddEditAssociate from './routes/AddEditAssociate/AddEditAssociate';
import GenerateSalarySlip from './routes/GenerateSalarySlip/GenerateSalarySlip';

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
                <Route path="/company/offer-letters" element={<OfferLetterRegister />} />
                <Route path="/company/projects" element={<ProjectsRegister />} />
                <Route path="/company/expenses" element={<ExpensesRegister />} />
                <Route path="/company/leave-record" element={<LeaveRecords />} />
                <Route path="/company/add-edit-client" element={<AddEditClient/>} />
                <Route path="/company/add-edit-client/:clientId" element={<AddEditClient/>} />
                <Route path="/company/add-edit-offer" element={<AddEditOffer/>} />
                <Route path="/company/add-edit-offer/:offerId" element={<AddEditOffer/>} />
                <Route path="/company/add-edit-project" element={<AddEditProject/>} />
                <Route path="/company/add-edit-project/:projectId" element={<AddEditProject/>} />
                <Route path="/company/add-edit-invoices" element={<AddEditInvoices/>} />
                <Route path="/company/add-edit-invoices/:invoicedId" element={<AddEditInvoices/>} />
                <Route path="/company/create-invoice-letter" element={<CreateInvoiceLetter/>} />
                <Route path="/company/add-edit-site-visits" element={<AddEditSiteVisits/>} />
                <Route path="/company/add-edit-site-visits/:siteVisitId" element={<AddEditSiteVisits/>} />
                <Route path="/company/add-edit-outward" element={<AddEditOutward/>} />
                <Route path="/company/add-edit-outward/:outwardId" element={<AddEditOutward/>} />
                <Route path="/company/add-edit-associate" element={<AddEditAssociate/>} />
                <Route path="/company/add-edit-associate/:associateId" element={<AddEditAssociate/>} />
                <Route path="/company/generate-salary-slip" element={<GenerateSalarySlip/>} />
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
