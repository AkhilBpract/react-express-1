import React, { useEffect, useState } from "react";
import { useAuth } from "src/auth/auth-provider/jwt-context";
import axiosInstance from "src/components/axios";

const useGetProfile = () => {
  const { user, dispatch } = useAuth();
  console.log(user);
  const fetchProfile = async () => {
    try {
      const { status, data } = await axiosInstance("api/profile");
      if (status === 200) {
        console.log(data);
        dispatch({
          type: "SUCCESS_LOGIN",
          payload: data.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return fetchProfile;
};

export default useGetProfile;
