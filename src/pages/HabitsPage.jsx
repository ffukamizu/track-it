import styled from "styled-components";
import Plus from "./../../public/assets/plus.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InputHabitModule from "../components/InputHabit";
import Habit from "../components/Habit";
import GlobalStyle from "../style/GlobalStyle";

export default function Habits() {
    return (
        <PageBody>
            <GlobalStyle />
            <Header />
            <HorizontalSeparator></HorizontalSeparator>
            <ContentContainer>
                <AddHabitContainer>
                    <h2>My habits</h2>
                    <PlusButton>
                        <img src={Plus} alt="Add Habit Button" />
                    </PlusButton>
                </AddHabitContainer>
                <InputHabitModule />
                <NoHabitMessage>You don&apos;t have any registered habit. Add one now to begin tracking!</NoHabitMessage>
                <HabitListContainer>
                    <Habit />
                </HabitListContainer>
            </ContentContainer>
            <HorizontalSeparator></HorizontalSeparator>
            <Footer />
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 340px;
    display: flex;
    flex-direction: column;
`;

const AddHabitContainer = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    h2 {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
    }
`;

const PlusButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border-style: solid;
    border-color: #52b6ff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoHabitMessage = styled.p`
    width: 340px;
    height: 74px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;

const HabitListContainer = styled.ul`
    height: 100%;
    width: 340px;
`;

const HorizontalSeparator = styled.div`
    height: 100px;
    width: 100%;
`;
