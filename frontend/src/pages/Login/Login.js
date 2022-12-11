import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../SignUp/sign.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };

    setIsPending(true);

    fetch("http://localhost:8000/data/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new data added");
      setIsPending(false);
      // history.go(-1);
      // history.push("/");
    });
  };

  return (
    <div className="border col-md-4 align-items-center justify-content-center">
      <h3 className="text-center">Log in</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4  mt-3 px-4">
          <Form.Control
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-5 px-4">
          <Form.Control
            type="password"
            placeholder="Password"
            required
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="px-4 col-lg-12">
          {!isPending && (
            <Button
              className="button  px-4 col-lg-12"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          )}
          {isPending && (
            <Button
              className="button  px-4 col-lg-12"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          )}
        </div>

        <div key={"remember-me"}>
          <Form.Check
            className="checkbox"
            type={"checkbox"}
            label={"Remember Me"}
            id={`remeber-me`}
          />
        </div>
      </Form>
      <p className="account">
        <span>
          <Link to="/forget"> Forgot your password?</Link>
          {/* Forgot your password? */}
        </span>
        <br></br>
        <span>
          <Link to="/signup"> Don't have account?</Link>
          {/* Don't have account? */}
        </span>
      </p>
    </div>
  );
}

export default Login;
