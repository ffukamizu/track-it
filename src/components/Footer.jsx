import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <PageFooter>
            <FooterContainer>
                <Link to={`/habitos`}>Hábitos</Link>
                <Link to={`/hoje`}>
                    <ProgressIndicatorContainer>Hoje</ProgressIndicatorContainer>
                </Link>
                <Link to={`/historico`}>Histórico</Link>
            </FooterContainer>
        </PageFooter>
    );
}

const PageFooter = styled.footer`
    height: 70px;
    width: 100%;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    z-index: 3;
`;

const FooterContainer = styled.nav`
    height: 70px;
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    a:hover,
    a:visited,
    a:link,
    a:active {
        text-decoration: none;
        color: #52b6ff;
    }
`;

const ProgressIndicatorContainer = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50px;
    margin-bottom: 40px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    background: #52b6ff;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
