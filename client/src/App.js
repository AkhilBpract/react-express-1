import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const methods = useForm();
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api");
      // const res = await fetch("/api").then((response) => response.json());
      console.log(data);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (inputData) => {
    console.log(inputData);
    // const formData = new FormData();

    // Object.entries(inputData).forEach(([k, v]) => formData.append(k, v));
    try {
      const res = await axios.post("/items", inputData);
    } catch (err) {
      console.log(err);
    }
  };
  const { register, handleSubmit } = methods;
  return (
    <>
      <p>Test</p>

      {data.map((item) => (
        <>{item}</>
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          {...register("quantity")}
          name="quantity"
          placeholder="Quantity"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
