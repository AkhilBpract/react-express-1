import React from "react";
import { axiosInstance } from "../../../components/axios";

const useRegister = () => {
  const onSubmit = async () => {
    try {

    const {data ,status} =await  axiosInstance.get("")
    } catch (err) {
      console.log(err);
    }
  };
  return { onSubmit };
};

export default useRegister;
