import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import TourPackage from "@Pages/TourPackage";
import TourDetails from "@Pages/TourDetails";
import Login from "@Pages/Login";
import SignUp from "@Pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/tours" element={<TourPackage />} />
          <Route path="/tours/:id" element={<TourDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
