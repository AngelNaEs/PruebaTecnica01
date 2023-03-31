import { Route, Routes } from "react-router-dom";
import { RickandMortyRoutes } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<RickandMortyRoutes />} />
    </Routes>
  );
};
