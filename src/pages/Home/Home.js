import { Box, Container } from "@mui/material";
import { ListaPersonajes } from "../../components/Personajes";

export const Home = () => {
  return (
    <Container fixed>
      <ListaPersonajes />
    </Container>
  );
};
