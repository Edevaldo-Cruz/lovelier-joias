import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Adm } from "./Pages/Adm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adm" element={<Adm />} />
    </Routes>
  );
};

export default AppRoutes;
