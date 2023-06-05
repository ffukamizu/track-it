import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TodayHabit from "../components/TodayHabit";
import GlobalStyle from "../style/GlobalStyle";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";

const date = dayjs().format('dddd');
const fullDate = dayjs().format('DD/MM');

export default function Today() {
    const { token } = useContext(AuthContext);

    const [todayList, setTodayList] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then((promise) => setTodayList(promise.data))
            .catch((promise) => console.log(promise.response));
    }, [token]);

    return (
        <PageBody>
            <GlobalStyle />
            <Header />
            <HorizontalSeparator></HorizontalSeparator>
            <ContentContainer>
                <TodayContainer>
                    <h2>
                        {date}, {fullDate}
                    </h2>
                    <h3>No habit completed yet</h3>
                </TodayContainer>
                <HabitListContainer>
                    {todayList.map((item, index) => (
                        <TodayHabit key={index} content={item}/>
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

const TodayContainer = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 45px;
    h2 {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
    }
    h3 {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #bababa;
    }
`;

const HabitListContainer = styled.ul`
    height: 100%;
    width: 340px;
`;

const HorizontalSeparator = styled.div`
    height: 100px;
    width: 100%;
`;
