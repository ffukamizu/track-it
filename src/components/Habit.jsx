import styled from "styled-components";
import axios from "axios";
import Trashbin from "./../../public/assets/dump.svg";

import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

export default function Habit(props) {
    const { token } = useContext(AuthContext);

    const [close, setClose] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function deleteHabit() {
        setIsConfirming(true);
    }

    function confirmDeleteHabit() {
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

    function cancelDeleteHabit() {
        setIsConfirming(false);
    }

    return (
        <HabitContainer isClosed={close}>
            {isConfirming ? (
                <ConfirmDialog>
                    <p>Are you sure you want to delete this habit?</p>
                    <button onClick={confirmDeleteHabit}>Yes</button>
                    <button onClick={cancelDeleteHabit}>No</button>
                </ConfirmDialog>
            ) : (
                <Trash onClick={deleteHabit}>
                    <img src={Trashbin} alt="Trash Button" />
                </Trash>
            )}
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
    display: ${(props) => (props.isClosed ? "none" : "block")};
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

const ConfirmDialog = styled.div`
    height: 78px;
    width: 320px;
    font-family: "Lexend Deca";
    background-color: #126ba5;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
    position: absolute;
    font-size: 14px;
    top: 0px;
    left: 0px;
    z-index: 3;

    p {
        margin-bottom: 16px;
        color: #ffffff;
    }

    button {
        font-family: "Lexend Deca";
        margin-right: 8px;
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        background-color: #f2f2f2;
        cursor: pointer;

        &:hover {
            background-color: #e2e2e2;
        }
    }
`;
