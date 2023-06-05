import styled from 'styled-components';
import axios from 'axios';
import Logo from './../../public/assets/logo.svg';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

export default function UserRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
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
            .post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', user)
            .then(registerSuccesful)
            .catch((promise) => {
                alert(`Error: ${promise.response.data.message}`);
                setIsDisabled(false);
                setEmail('');
                setPassword('');
                setName('');
                setImage('');
            });
    }

    function registerSuccesful() {
        navigate('/');
        setIsDisabled(false);
    }

    return (
        <PageBody>
            <img
                src={Logo}
                alt="Logo Icon"
            />
            <FormSection onSubmit={registerUser}>
                <Input
                    data-test="email-input"
                    disabled={isDisabled}
                    type="email"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></Input>
                <Input
                    data-test="password-input"
                    disabled={isDisabled}
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></Input>
                <Input
                    data-test="user-name-input"
                    disabled={isDisabled}
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}></Input>
                <Input
                    data-test="user-image-input"
                    disabled={isDisabled}
                    type="text"
                    placeholder="image"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}></Input>
                <SubmitButton
                    data-test="signup-btn"
                    disabled={isDisabled}
                    isDisabled={isDisabled}
                    type="submit"
                    placeholder="Submit">
                    Submit
                </SubmitButton>
                <Loading
                    data-test="signup-btn"
                    isDisabled={isDisabled}>
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
            <UserRegisterLink disabled={isDisabled}>
                <Link
                    data-test="login-link"
                    to={`/`}>
                    Already have an account? Log-in now!
                </Link>
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
    font-family: 'Lexend Deca';
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
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    margin-top: 6px;
    display: ${(props) => (props.isDisabled ? 'none' : 'flex')};
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
    display: ${(props) => (props.isDisabled ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`;

const UserRegisterLink = styled.button`
    font-family: 'Lexend Deca';
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
