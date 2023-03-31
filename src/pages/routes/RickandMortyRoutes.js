import { Navigate, Route, Routes } from "react-router-dom";
import { RickandMortyLayout, Home, Personajes } from "../";

export const RickandMortyRoutes = () => {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={loadLayout(RickandMortyLayout, Home)} />
      <Route
        path="/personaje/:path"
        element={loadLayout(RickandMortyLayout, Personajes)}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
