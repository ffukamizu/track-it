import styled from "styled-components";
import axios from "axios";
import Logo from "./../../public/assets/logo.svg";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function LoginScreen() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const { setToken, setLogInData } = useContext(AuthContext);
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
                alert(`Error: ${promise.response.data.message}`);
                setIsDisabled(false);
                setUserEmail("");
                setUserPassword("");
            });
    }

    function userLogInSuccesful(promise) {
        setToken(promise.data.token);
        setLogInData(promise.data.image);
        navigate("/habitos");
        setIsDisabled(false);
    }

    return (
        <PageBody>
            <img src={Logo} alt="Logo Icon" />
            <FormSection onSubmit={userLogIn}>
                <Input
                    data-test="email-input"
                    disabled={isDisabled}
                    type="email"
                    placeholder="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}></Input>
                <Input
                    data-test="password-input"
                    disabled={isDisabled}
                    type="password"
                    placeholder="password"
                    required
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}></Input>
                <SubmitButton data-test="login-btn" isDisabled={isDisabled} disabled={isDisabled} type="submit" placeholder="Submit">
                    Submit
                </SubmitButton>
                <Loading isDisabled={isDisabled}>
                    <Oval
                        height={40}
                        width={40}
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#bbbbbb"
                        strokeWidth={6}
                        strokeWidthSecondary={6}
                    />
                </Loading>
            </FormSection>
            <UserRegisterLink disabled={isDisabled} data-test="signup-link">
                <Link to={`/cadastro`}>Don&apos;t have an account? Sign-up now!</Link>
            </UserRegisterLink>
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

const SubmitButton = styled.button`
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-color: #52b6ff;
    border-style: solid;
    border-radius: 5px;
    margin-top: 6px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    display: ${(props) => (props.isDisabled ? "none" : "flex")};
    justify-content: center;
    align-items: center;
`;

const Loading = styled.div`
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-color: #52b6ff;
    border-style: solid;
    border-radius: 5px;
    display: ${(props) => (props.isDisabled ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`;

const UserRegisterLink = styled.button`
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    background-color: #ffffff;
    border-style: solid;
    border-color: #ffffff;
`;
