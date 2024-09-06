import React, { forwardRef } from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

import { useForm } from "react-hook-form";
import ReactFormProvider from "../../components/react-form-provider";
import TextField from "src/components/text-fiedl/TextFeild";
import DropDown from "src/components/drop-down/DropDown";
import TextArea from "src/components/text-fiedl/text-area";
import CustomSwitch from "src/components/switch";

const Index = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [agreed, setAgreed] = useState(false);
  const methods = useForm();
  const { register } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const country = [
    { value: 1, label: "Test 1" },
    { value: 2, label: "Test 2" },
  ];
  return (
    <div ref={ref}>
      <ReactFormProvider methods={methods} onSubmit={onSubmit}>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Registration
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <TextField name="first_name" label="First Name" />
              <TextField name="last_name" label="Last Name" />

              <div className="sm:col-span-2">
                <TextField name="username" label="Username" />
              </div>
              <div className="sm:col-span-2">
                <TextField name="email" label="Email" />
              </div>
              <div className="sm:col-span-2">
                <DropDown name="country" label="Country" options={country} />
              </div>
              <div className="sm:col-span-2">
                <TextArea name="message" label="Message" />
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Upload Profile
                </label>
                <input
                  className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-sky-100 dark:border-2 border-sky-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  {...register("profile")}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-400 text-xs text-right"
                  id="file_input_help"
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <Field className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <CustomSwitch name="privacy" />
                </div>
                <Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </Label>
              </Field>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </ReactFormProvider>
    </div>
  );
});

export default Index;
