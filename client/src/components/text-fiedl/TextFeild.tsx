import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import UnstyledInputBasic from "./UnstyledInputIntroduction";
interface TextFieldProps {
  name: string;
  label: string;
}
function TextField({ name, label }: TextFieldProps) {
  const { control, watch } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <UnstyledInputBasic placeholder={label} {...field} />
          </>
        )}
      />
    </div>
  );
}

export default TextField;
