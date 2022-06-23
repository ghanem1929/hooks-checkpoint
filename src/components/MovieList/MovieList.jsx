import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";

const MovieList = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => (
        <Grid item xs={3} key={index}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
