import styled from "styled-components";
import axios from "axios";
import Logo from "./../../public/assets/logo.svg";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setimage] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault();

        const user = {
            email: email,
            name: name,
            image: image,
            password: password,
        };

        setIsDisabled(true);

        axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", user)
            .then(registerSuccesful)
            .catch((promise) => {
                console.log(promise.response)
                setIsDisabled(false);
            });
    }

    function registerSuccesful(promise) {
        console.log("successful");
        console.log(promise.data);
        navigate("/");
        setIsDisabled(false);
    }

    return (
        <PageBody>
            <img src={Logo} alt="Logo Icon" />
            <FormSection onSubmit={registerUser}>
                <Input 
                    disabled={isDisabled} 
                    type="email" 
                    placeholder="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}></Input>
                <Input
                    disabled={isDisabled}
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></Input>
                <Input 
                    disabled={isDisabled} 
                    type="text" 
                    placeholder="name" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}></Input>
                <Input 
                    disabled={isDisabled} 
                    type="text" 
                    placeholder="image" 
                    required 
                    value={image} 
                    onChange={(e) => setimage(e.target.value)}></Input>
                <SubmitButton
                    disabled={isDisabled} 
                    type="submit" 
                    placeholder="Register"></SubmitButton>
            </FormSection>
            <Link to={`/`}>
                <UserRegisterLink>Already have an account? Log-in now!</UserRegisterLink>
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
