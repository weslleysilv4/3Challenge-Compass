import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import TourPackage from "@Pages/TourPackage";
function Router() {
  return (
    <div>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<TourPackage />} />
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Animals />} />
          <Route path="locations" element={<AnimalsLocation />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default Router;
