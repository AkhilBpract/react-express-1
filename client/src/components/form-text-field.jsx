import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

const FormTextField = ({ name, label, multiline = false, rows, ...sx }) => {
  const {
    formState: { errors },
    register,
    watch,
  } = useFormContext();
  const value = watch(name);
  return (
    <TextField
    
      multiline
      value={value}
      rows={rows}
      {...register(name)}
      error={Boolean(errors[name]?.message) ? true : false}
      name={name}
      label={label}
      helperText={Boolean(errors[name]?.message) ? errors[name]?.message : ""}
      xs={sx}
    />
  );
};

export default FormTextField;
