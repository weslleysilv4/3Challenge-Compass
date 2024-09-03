import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import TourPackage from "@Pages/TourPackage";
import TourDetails from "@Pages/TourDetails";
import Login from "@Pages/Login";
import SignUp from "@Pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Destination from "@Pages/Destination";
import DestinationDetails from "@Pages/DestinationDetails";

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
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
