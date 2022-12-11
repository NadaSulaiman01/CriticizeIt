import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../SignUp/sign.css";

function Forget() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email };

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

  return (
    <div className="border col-md-4 align-items-center justify-content-center">
      {/* <h3 className="text-center">Log in</h3> */}
      <h2>Forgot Password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4  mt-3 px-4">
          <Form.Control
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
      <p className="account">
        or <span> </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Forget;
