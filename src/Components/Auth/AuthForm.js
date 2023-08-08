import React, { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Footer from "../Layout/Footer";
import AuthContext from "../../ContextStore/auth-context";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const emailInput = useRef("");
  const passwordInput = useRef("");
  const authCxt = useContext(AuthContext);
  const navigate = useNavigate();
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD12XRDTBa0eyQec4iEUNwZ82htHjLn50M",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInput.current.value,
            password: passwordInput.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Invalid Email or password");
      }
      const data = await response.json();
      //   console.log(data.idToken);
      authCxt.login(data.idToken, emailInput.current.value);

      navigate("/Store", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Container
        style={{
          width: "55rem",
          margin: "10% 0 5% 12%",
        }}
      >
        <Stack gap={2} className="col-md-5 mx-auto">
          <Form
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
            onSubmit={SubmitHandler}
          >
            <h1>LOGIN</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInput}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInput}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default AuthForm;
