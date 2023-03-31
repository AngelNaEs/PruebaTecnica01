import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Personajes as PersonajesController } from "../../api";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const personajesController = new PersonajesController();

export const Personajes = () => {
  const [personaje, setPersonaje] = useState(null);
  const { path } = useParams();
  console.log(personaje);

  useEffect(() => {
    (async () => {
      try {
        const response = await personajesController.getPersonaje(path);
        setPersonaje(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [path]);

  if (personaje == null)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Container fixed>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              fontWeight: "500",
            }}
          >
            #{personaje.id}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "500",
            }}
          >
            {personaje.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            {personaje.species} - {personaje.gender} - {personaje.status}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            {personaje.location.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={personaje.image} alt={personaje.name} />
        </Grid>
      </Grid>
    </Container>
  );
};
