import styled from "styled-components";
import axios from "axios";
import Trashbin from "./../../public/assets/dump.svg";

import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

export default function Habit(props) {
    const { token } = useContext(AuthContext);
    
    const [close, setClose] = useState(false);

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function deleteHabit() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.content.id}`, config)
            .then(closeHabit)
            .catch((promise) => console.log(promise.response));
    }

    function closeHabit() {
        setClose(true);
    }

    return (
        <HabitContainer isClosed={close}>
            <Trash onClick={deleteHabit}>
                <img src={Trashbin} alt="Trash Button" />
            </Trash>
            <HabitContent>{props.content.name}</HabitContent>
            <WeekdayIndicator>
                {weekDays.map((day, index) => (
                    <DayIcon type="button" key={index} active={props.content.days.includes(index)}>
                        {day}
                    </DayIcon>
                ))}
            </WeekdayIndicator>
        </HabitContainer>
    );
}

const HabitContainer = styled.li`
    background: #ffffff;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 10px;
    position: relative;
    display: ${(props) => (props.isClosed ? 'none' : 'block')};
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
`;

const WeekdayIndicator = styled.div`
    height: 30px;
    width: 100%;
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`;

const DayIcon = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => (props.active ? "#ffffff" : "#dbdbdb")};
    background-color: ${(props) => (props.active ? "#CFCFCF" : "#ffffff")};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Trash = styled.button`
    height: 15px;
    width: 15px;
    right: 7px;
    top: 10px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
`;
