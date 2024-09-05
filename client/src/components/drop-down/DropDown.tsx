import React from "react";
import { Option, Select } from "./select";

import { Controller, useFormContext } from "react-hook-form";

const DropDown = ({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: Array<{ value: number; label: string }>;
}) => {
  const { control, watch } = useFormContext();
  console.log(watch(name));
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={10} // Default value for react-hook-form
      render={({ field }) => (
        <Select  {...field}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      )}
    />
  );
};

export default DropDown;
