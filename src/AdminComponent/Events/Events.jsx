import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null,
};
const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = React.useState(initialValues);
  const [startedAt, setStartedAt] = React.useState(null);
  const [endsAt, setEndsAt] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatedStartedDate = dayjs(startedAt).format(
      "MMMM DD, YYYY hh:mm A"
    );
    const formatedSEndDate = dayjs(endsAt).format("MMMM DD, YYYY hh:mm A");
    formValues.startedAt = formatedStartedDate;
    formValues.endsAt = formatedSEndDate;

    console.log("submit", formValues);
    setStartedAt(null);
    setEndsAt(null);
    setFormValues(initialValues);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "startedAt") {
      setStartedAt(value);
    } else if (name === "endsAt") {
      setEndsAt(value);
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  // const handleDateChange = (date, dataType) => {
  //   if (dayjs.isDayjs(date)) {
  //     // Proceed with formatting if it's a Day.js object
  //     const formattedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
  //     setFormValues({ ...formValues, [dataType]: formattedDate });
  //   } else {
  //     // Handle the case where startedAt is not a Day.js object (e.g., null)
  //     console.error("startedAt is not a Day.js object");
  //   }
  // };
  return (
    <div>
      <div className="p-5 ">
        <Button onClick={handleOpen} variant="contained">
          Create New Event
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="image"
                    label="Image Url"
                    variant="outlined"
                    fullWidth
                    value={formValues.image}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="location"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    value={formValues.location}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    label="Event Name"
                    variant="outlined"
                    fullWidth
                    value={formValues.name}
                    onChange={handleFormChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Start Date and Time"
                      value={startedAt}
                      onChange={(newValue) => setStartedAt(newValue)}
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className="w-full"
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="End Date and Time"
                      name="endsAt"
                      value={endsAt}
                      onChange={(newValue) => setEndsAt(newValue)}
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className="w-full"
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Button variant="contained" type="submit" color="primary">
                SUBMIT
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Events;
