import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from './../AuthContext';
export default function Header() {
    const { logInData } = useContext(AuthContext);

    return (
        <PageHeader
            atributo
            data-test="header">
            <HeaderContainer>
                <Title>TrackIt</Title>
                <Profile>
                    <img
                        data-test="avatar"
                        src={logInData}
                        alt="avatar"
                    />
                </Profile>
            </HeaderContainer>
        </PageHeader>
    );
}

const PageHeader = styled.header`
    height: 70px;
    width: 100%;
    top: 0px;
    position: fixed;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const HeaderContainer = styled.div`
    height: 70px;
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    width: 97px;
    height: 49px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
`;

const Profile = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50px;
    background-color: #ffffff;

    img {
        width: 51px;
        height: 51px;
        border-radius: 50px;
    }
`;
