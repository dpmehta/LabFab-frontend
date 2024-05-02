import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import HomeMain from "./components/HomeMain";
import LoginPage from "./components/LoginPage";
import ComponentIssue from "./components/ComponentIssue";
import SignUp from "./components/SignUp";
import ComponentPage from "./components/ComponentPage";
import RequestShow from "./components/RequestShow";
import QrReader from "./components/QrReader";
import LabEntry from "./components/LabEntry";
import { Toaster } from "react-hot-toast";
import ComponentReview from "./components/ComponentReview";
import AddComponent from "./components/AddComponent";
import LabOverview from "./components/LabOverview";
import LabDetail from "./components/LabDetail";
import Complaint from "./components/Complaint";
import DeadStock from "./components/DeadStock";
import ComplainReview from "./components/ComplainReview";
import LabEntryOverview from "./components/LabEntryOverview";
import LabAvailability from "./components/LabAvailability";
import LabLogin from "./components/LabLogin";
import AdminElement from "./components/AdminElement";
import StudentElement from "./components/StudentElement";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <StudentElement>
                <HomeMain />
              </StudentElement>
            }
          />
          <Route
            path="/component-issue"
            element={
              <StudentElement>
                <ComponentIssue />
              </StudentElement>
            }
          />
          <Route
            path="/lab-availability"
            element={
              <StudentElement>
                <LabAvailability />
              </StudentElement>
            }
          />
          <Route
            path="/lab-entry"
            element={
              <AdminElement>
                <LabEntry />
              </AdminElement>
            }
          />
          <Route
            path="/request-show"
            element={
              <StudentElement>
                <RequestShow />
              </StudentElement>
            }
          />
          <Route
            exact
            path="/component-page/:id"
            element={
              <StudentElement>
                <ComponentPage />
              </StudentElement>
            }
          />
          <Route exact path="/qr-reader" element={<QrReader />} />
          <Route
            exact
            path="/add-component"
            element={
              <AdminElement>
                <AddComponent />
              </AdminElement>
            }
          />
          <Route
            exact
            path="component-request-review"
            element={
              <AdminElement>
                <ComponentReview />
              </AdminElement>
            }
          />
          <Route
            exact
            path="/lab-overview"
            element={
              <StudentElement>
                <LabOverview />
              </StudentElement>
            }
          />
          <Route
            exact
            path="/lab-detail/:id"
            element={
              <StudentElement>
                <LabDetail />
              </StudentElement>
            }
          />
          <Route
            exact
            path="/complaint"
            element={
              <StudentElement>
                <Complaint />
              </StudentElement>
            }
          />
          <Route
            exact
            path="/dead-stock"
            element={
              <AdminElement>
                <DeadStock />
              </AdminElement>
            }
          />
          <Route
            exact
            path="/complaint-review"
            element={
              <AdminElement>
                <ComplainReview />
              </AdminElement>
            }
          />
          <Route exact path="/lab-login" element={<LabLogin />} />
          <Route
            exact
            path="/lab-entry-review"
            element={
              <AdminElement>
                <LabEntryOverview />
              </AdminElement>
            }
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </>
    </BrowserRouter>
  );
}

export default App;
