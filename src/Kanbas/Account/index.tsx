import Signin from "./Signin";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div id="wd-account-screen" className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <AccountNavigation />
        </div>
        <div className="col-md-9">
          <h1>Account</h1>
          <br />
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
