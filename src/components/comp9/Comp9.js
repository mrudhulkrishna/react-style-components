import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import React, { useState } from "react";

function Comp9() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <form>
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        // className={classes.formControl}
        fullWidth
      />

      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        // className={classes.formControl}
        fullWidth
      />

      <FormControl variant="outlined" fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Comp9;
