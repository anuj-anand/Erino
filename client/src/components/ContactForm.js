import React, { useState } from "react";
import { addContact } from "../services/api";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      company: "",
      jobtitle: ""
    });
    addContact(formData);
    console.log(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add New Contact
      </Typography>
      <Grid container spacing={2}>
        {["firstname", "lastname", "email", "phone", "company", "jobtitle"].map((field) => (
          <Grid item xs={12} sm={6} key={field}>
            <TextField
              fullWidth
              required
              label={field.replace(/^\w/, (c) => c.toUpperCase())}
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
