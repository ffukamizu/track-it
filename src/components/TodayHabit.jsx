import styled from "styled-components";
import axios from "axios";
import CheckMark from "./../../public/assets/check.svg";

import { useContext, useState } from "react";
import { AuthContext } from "./../AuthContext";

export default function TodayHabit(props) {
    const { token } = useContext(AuthContext);

    const [isCompleted, setIsCompleted] = useState(props.content.done);

    function toggleHabit(id) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        if (isCompleted) {
            axios
                .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)
                .then(unchangeHabitColor)
                .catch((promise) => console.log(promise.response));
        } else {
            axios
                .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config)
                .then(changeHabitColor)
                .catch((promise) => console.log(promise.response));
        }
    }

    function changeHabitColor() {
        setIsCompleted(true);
        window.location.reload();

    }

    function unchangeHabitColor() {
        setIsCompleted(false);
        window.location.reload();
    }

    return (
        <HabitContainer data-test="today-habit-container">
            <div>
                <HabitContent data-test="today-habit-name">{props.content.name}</HabitContent>
                <CurrentStreak data-test="today-habit-sequence" isCompleted={isCompleted}>
                    Current streak: {props.content.currentSequence}
                </CurrentStreak>
                <AllTimeStreak
                    data-test="today-habit-record"
                    isCompleted={isCompleted}
                    currentSequence={props.content.currentSequence}
                    highestSequence={props.content.highestSequence}>
                    Highest sequence: {props.content.highestSequence}
                </AllTimeStreak>
            </div>
            <div>
                <Check data-test="today-habit-check-btn" isCompleted={isCompleted} onClick={() => toggleHabit(props.content.id)}>
                    <img src={CheckMark} alt="Check Logo" />
                </Check>
            </div>
        </HabitContainer>
    );
}

const HabitContainer = styled.li`
    background: #ffffff;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HabitContent = styled.p`
    min-height: 25px;
    width: 100%;
    left: 32px;
    top: 160px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    overflow-wrap: break-word;
    margin-bottom: 6px;
`;

const CurrentStreak = styled.p`
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${(props) => (props.isCompleted ? "#8FC549" : "#666666")};
`;

const AllTimeStreak = styled.p`
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${(props) => (props.isCompleted && props.currentSequence >= props.highestSequence && props.currentSequence > 0 ? "#8FC549" : "#666666")};
`;

const Check = styled.div`
    height: 69px;
    width: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => (props.isCompleted ? "#8FC549" : "#EBEBEB")};
`;
