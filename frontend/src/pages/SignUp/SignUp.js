import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./sign.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, username, jobTitle, gender, password };

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

  const passwordd = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (passwordd.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords don't match");
    } else {
      confirm_password.setCustomValidity("");
    }
  }

  // password.onchange = validatePassword;
  // confirm_password.onkeyup = validatePassword;

  return (
    <div className="border col-md-4 align-items-center justify-content-center">
      <h3 className="text-center">Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4  mt-3 px-4">
          <Form.Control
            type="email"
            placeholder="Email*"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4 px-4">
          <Form.Control
            type="text"
            placeholder="Username*"
            required
            minLength={6}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4 px-4">
          <Form.Control
            type="text"
            placeholder="Job title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Form.Group>

        <div className="px-4">
          <Form.Select
            aria-label="Default select example"
            className="mb-4"
            onChange={(e) => setGender(e.target.value)}
          >
            <option selected disabled text-secondary>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </div>

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
          {!isPending && (
            <Button
              className="button  px-4 col-lg-12"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          )}
          {isPending && (
            <Button
              className="button  px-4 col-lg-12"
              variant="primary"
              type="submit"
            >
              Loading...
            </Button>
          )}
        </div>
      </Form>
      <p className="account">
        Already have account?{" "}
        <span>
          <Link to="/login">Sign in</Link>
          {/* Sign in */}
        </span>
      </p>

      {/* <p>{email}</p>
      <p>{password}</p>
      <p>{username}</p>
      <p>{jobTitle}</p>
      <p>{gender}</p> */}
    </div>
  );
}

export default SignUp;
//npx json-server --watch data/db.json --port 8000
