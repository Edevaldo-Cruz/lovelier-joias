import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Adm } from "./Pages/Adm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/adm" element={<Home />} />
      <Route path="/" element={<Adm />} />
    </Routes>
  );
};

export default AppRoutes;
