import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../SignUp/sign.css";

function Reset() {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { password };

    // setIsPending(true);

    fetch("http://localhost:8000/data/", {
      //link of api
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new data added");
      // setIsPending(false);
      // history.go(-1);
      // history.push("/");
    });
  };

  const passwordd = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (passwordd.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords don't match");
    } else {
      confirm_password.setCustomValidity("");
    }
  }

  return (
    <div className="border col-md-4 align-items-center justify-content-center">
      {/* <h3 className="text-center">Log in</h3> */}
      <h2>Reset Password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4 px-4">
          <Form.Control
            type="password"
            placeholder="Password*"
            required
            minLength={6}
            id="password"
            onChange={validatePassword}
          />
        </Form.Group>

        <Form.Group className="mb-5 px-4">
          <Form.Control
            type="password"
            placeholder="Confirm password*"
            required
            minLength={6}
            id="confirm_password"
            onKeyUp={validatePassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="px-4 col-lg-12">
          <Button
            className="button  px-4 col-lg-12"
            variant="primary"
            type="submit"
          >
            Reset Password
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Reset;
