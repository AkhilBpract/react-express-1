import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useAuth } from "src/auth/auth-provider/jwt-context";
import axiosInstance from "src/components/axios";

const useGetProfile = () => {
  const { dispatch } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const fetchProfile = async () => {
    try {
      const { status, data } = await axiosInstance("api/profile");
      if (status === 200) {
        dispatch({
          type: "SUCCESS_LOGIN",
          payload: data.data,
        });
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };
  return fetchProfile;
};

export default useGetProfile;
