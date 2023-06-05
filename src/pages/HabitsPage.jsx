import styled from "styled-components";
import Plus from "./../../public/assets/plus.svg";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InputHabitModule from "../components/InputHabit";
import Habit from "../components/Habit";
import GlobalStyle from "../style/GlobalStyle";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";

export default function Habits() {
    const { token } = useContext(AuthContext);

    const [habitList, setHabitList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then((promise) => setHabitList(promise.data))
            .catch((promise) => console.log(promise.response));
    }, [token]);

    return (
        <PageBody>
            <GlobalStyle />
            <Header />
            <HorizontalSeparator></HorizontalSeparator>
            <ContentContainer>
                <AddHabitContainer>
                    <h2>My habits</h2>
                    <PlusButton data-test="habit-create-btn" onClick={() => setIsOpen(true)}>
                        <img src={Plus} alt="Add Habit Button" />
                    </PlusButton>
                </AddHabitContainer>
                <InputHabitModule isOpen={isOpen} setIsOpen={setIsOpen} />
                {habitList.length === 0 ? <NoHabitMessage>You don&apos;t have any registered habit. Add one now to begin tracking!</NoHabitMessage> : null}
                <HabitListContainer>
                    {habitList.map((item, index) => (
                        <Habit key={index} content={item} />
                    ))}
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
        color: #52b6ff;
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
