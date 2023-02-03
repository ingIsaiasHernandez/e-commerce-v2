import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setInputName } from "../../store/slices/inputName.slice";

const Login = () => {
  // const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // const [inputvalue, setInputValue] = useState("");

  // const navigate = useNavigate();

  // const clickButton = () => {
  //   dispatch(setInputName(inputvalue));
  //   navigate("/");
  // };

  const submit = (data) => {
    console.log(data);
    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) alert("invalid credentials");
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <Form
        onSubmit={handleSubmit(submit)}
        style={{ maxWidth: "300px", margin: "auto" }}
        className="p-5 border rounded-3"
      >
        <h5 className="mb-5 "> Welcome! Enter your email and password to continue</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted "></Form.Text>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="mt-2 " variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
