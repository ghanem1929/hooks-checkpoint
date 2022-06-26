import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const defaultValues = {
  title: "",
  released: 0,
  rating: 0,
  plot: "",
  Images: "",
};

const AddMovie = ({ setOpenForm, addMovie }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleTitleChange = (e) => {
    let value = e.target.value;
    setFormValues((formValues) => ({
      ...formValues,
      title: value,
    }));
  };

  const handleImageChange = (e) => {
    let value = e.target.value;
    setFormValues((formValues) => ({
      ...formValues,
      Images: value,
    }));
  };

  const handlePlotChange = (e) => {
    let value = e.target.value;
    setFormValues((formValues) => ({
      ...formValues,
      plot: value,
    }));
  };

  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [date, setDate] = useState(new Date());

  function formatDate(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var d = new Date(date),
      month = "" + monthNames[d.getMonth() + 1],
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(" ");
  }

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const handleSubmit = () => {
    setOpenForm(false);

    const newMovie = {
      Title: formValues.title,
      Released: formatDate(date),
      Plot: formValues.plot,
      imdbRating: formValues.rating,
      Images: formValues.Images,
    };

    addMovie(newMovie);
  };

  return (
    <form>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={4}
      >
        <Grid item style={{ width: "50%" }}>
          <TextField
            id="title-input"
            name="title"
            label="Title"
            type="text"
            value={formValues.title}
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item style={{ width: "50%" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Released"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Poster URL"
            onChange={handleImageChange}
            value={formValues.Images}
            variant="standard"
            style={{ width: "35ch" }}
          />
        </Grid>
        <Grid item>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-multiline-static"
              label="plot"
              multiline
              value={formValues.plot}
              onChange={handlePlotChange}
              rows={4}
              variant="standard"
            />
          </Box>
        </Grid>
        <Grid item>
          <div style={{ width: "400px" }}>
            Rating :
            <Slider
              value={formValues.rating}
              onChange={handleSliderChange("rating")}
              defaultValue={1}
              step={1}
              min={1}
              max={10}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
                {
                  value: 4,
                  label: "4",
                },
                {
                  value: 5,
                  label: "5",
                },
                {
                  value: 6,
                  label: "6",
                },
                {
                  value: 7,
                  label: "7",
                },
                {
                  value: 8,
                  label: "8",
                },
                {
                  value: 9,
                  label: "9",
                },
                {
                  value: 10,
                  label: "10",
                },
              ]}
              valueLabelDisplay="off"
            />
          </div>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default AddMovie;
