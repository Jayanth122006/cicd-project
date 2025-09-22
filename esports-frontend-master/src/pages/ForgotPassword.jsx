import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #bbb;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 6px;
  background: #222;
  color: #fff;
`;

const Button = styled.button`
  background: #e50914;
  color: white;
  border: none;
  padding: 14px;
  width: 100%;
  margin-top: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ff0f1f;
  }
`;

const SmallText = styled.div`
  margin-top: 15px;
  text-align: center;
  color: #bbb;
  font-size: 15px;

  a {
    color: #e50914;
    font-weight: bold;
    text-decoration: none;
    margin-left: 5px;
  }
`;

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Title>Forgot Password</Title>
      <Description>
        Enter your registered email, and we’ll send you reset instructions.
      </Description>
      <Input placeholder="Email Address" type="email" />
      <Button>Send Reset Link</Button>
      <SmallText>
        Remembered your password?
        <Link to="/auth/login">Back to Login</Link>
      </SmallText>
    </AuthLayout>
  );
}
