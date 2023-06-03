import styled from "styled-components";
import Logo from "./../../public/assets/logo.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  return (
    <PageBody>
      <img src={Logo} alt="Logo Icon" />
      <FormSection>
        <Input type="email" placeholder="email" required value={email} onChange={setEmail}></Input>
        <Input type="password" placeholder="password" required value={password} onChange={setPassword}></Input>
        <Input type="text" placeholder="name" required value={name} onChange={setName}></Input>
        <Input type="text" placeholder="photo" required value={photo} onChange={setPhoto}></Input>
        <SubmitButton type="submit" placeholder="Submit"></SubmitButton>
      </FormSection>
      <Link to={`/`}><UserRegisterLink>Já tem uma conta? Faça login!</UserRegisterLink></Link>
    </PageBody>
  );
}

const PageBody = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin-top: 20vh;
    margin-bottom: 26px;
  }
`;

const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-top: 6px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  opacity: 0.75;
`;

const SubmitButton = styled.input`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-color: #52b6ff;
  border-style: solid;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin-top: 6px;
`;

const UserRegisterLink = styled.a`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;
