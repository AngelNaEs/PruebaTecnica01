import * as React from "react";
import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TarjetaPersonaje } from "../TarjetaPersonaje";
import { Personajes } from "../../../api";
import { Button, ButtonGroup, CircularProgress, Skeleton } from "@mui/material";
import { PaginacionPersonajes } from "../PaginacionPersonajes";

const personajesController = new Personajes();

export const ListaPersonajes = () => {
  const [listaPersonajes, setListaPersonajes] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setListaPersonajes(null);
        const response = await personajesController.getPersonajes(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setData(response);
        setListaPersonajes(response.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);

  const handleChange = (_, activePage) => {
    setPage(activePage);
  };

  if (listaPersonajes === null) {
    return (
      <Box
        sx={{ display: "flex", paddingTop: "40px", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: "15px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listaPersonajes.map((personaje, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <TarjetaPersonaje personaje={personaje} />
          </Grid>
        ))}
      </Grid>

      <PaginacionPersonajes
        count={data.info.pages}
        page={page}
        handleChange={handleChange}
      />
    </Box>
  );
};
