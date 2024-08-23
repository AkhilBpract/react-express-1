import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);
  const methods = useForm();
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/items");
      // const res = await fetch("/api/items").then((response) => response.json());
      console.log(data);
      setData(data);
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
      const res = await axios.post("/api/items", inputData);
    } catch (err) {
      console.log(err);
    }
  };
  const { register, handleSubmit } = methods;
  return (
    <>
      <p>Test</p>

      {data.map(({ name }) => (
        <>
          <p> {name}</p>
        </>
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

export default Index;
