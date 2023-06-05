import styled from "styled-components";
import axios from "axios";
import Logo from "./../../public/assets/logo.svg";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginScreen() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    function userLogIn(e) {
        e.preventDefault();
        
        const user = {
            email: userEmail,
            password: userPassword,
        };

        setIsDisabled(true);

        axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", user)
            .then(userLogInSuccesful)
            .catch((promise) => {
                console.log(promise.response.data)
                setIsDisabled(false);
            });
    }

    function userLogInSuccesful(promise) {
        console.log(promise.data);
        navigate('/habitos');
        setIsDisabled(false);
    }

    return (
        <PageBody>
            <img src={Logo} alt="Logo Icon" />
            <FormSection onSubmit={userLogIn}>
                <Input disabled={isDisabled} type="email" placeholder="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></Input>
                <Input disabled={isDisabled} type="password" placeholder="password" required value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></Input>
                <SubmitButton disabled={isDisabled} type="submit" placeholder="Submit"></SubmitButton>
            </FormSection>
            <Link to={`/cadastro`}>
                <UserRegisterLink>Don&apos;t have an account? Sign-up now!</UserRegisterLink>
            </Link>
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
    color: #666666;
    padding: 10px;
    ::placeholder {
        color: #d5d5d5;
    }
    :focus {
        outline: 2px solid #d5d5d5;
    }
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

const UserRegisterLink = styled.p`
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
`;
