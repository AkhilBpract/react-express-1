import React, { ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

const ReactFormProvider = ({
  children,
  methods,
  onSubmit,
}: {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default ReactFormProvider;
