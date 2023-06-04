import styled from "styled-components";
import "./../../node_modules/react-circular-progressbar/dist/styles.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Footer() {
    const percentage = 70;

    return (
        <PageFooter>
            <FooterContainer>
                <Link to={`/habitos`}>Habit</Link>
                <Link to={`/hoje`}>
                    <ProgressIndicatorContainer>
                        <CircularProgressbar
                            background
                            backgroundPadding={6}
                            value={percentage}
                            text={"Today"}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "round",
                                textSize: "18px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 255, 255, 1)`,
                                textColor: "#ffffff",
                                trailColor: "#52B6FF",
                                backgroundColor: "#52B6FF",
                                transform: "rotate(0.25turn)",
                            })}
                        />
                    </ProgressIndicatorContainer>
                </Link>
                <Link to={`/historico`}>History</Link>
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
    margin-bottom: 40px;
`;
