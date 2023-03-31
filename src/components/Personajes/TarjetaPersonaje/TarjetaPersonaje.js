import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

export const TarjetaPersonaje = ({ personaje }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/personaje/${personaje.id}`}
      >
        <CardActionArea>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {personaje.name}
          </Typography>
          <CardMedia
            component="img"
            height="250"
            image={personaje.image}
            alt={personaje.name}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "800",
              }}
            >
              {personaje.species} - {personaje.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
