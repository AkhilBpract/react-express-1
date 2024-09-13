import React from "react";
import { Option, Select } from "./select";

import { Controller, useFormContext } from "react-hook-form";

const DropDown = ({
  name,
  label: placeHolder,
  options,
}: {
  name: string;
  label: string;
  options: Array<{ value: number; label: string }>;
}) => {
  const { control, watch } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, ...field } }) => {
        return (
          <Select
            placeholder={placeHolder}
            onChange={(_, v) => {
              onChange(v);
            }}
            {...field}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        );
      }}
    />
  );
};

export default DropDown;
