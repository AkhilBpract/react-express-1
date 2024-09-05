import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import UnstyledInputBasic from "./UnstyledInputIntroduction";

const TextField = ({ name, label }: { name: string; label: string }) => {
  const { control, watch } = useFormContext();
  console.log(watch(name));
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
};

export default TextField;
