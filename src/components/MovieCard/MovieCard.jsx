import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rate from "../Rate";

const MovieCard = ({
  movie: { Title, Released, imdbRating, Images, Plot },
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={Images} alt={Title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {Title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Released: {Released}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Rating: <Rate rating={Math.ceil(imdbRating)} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
