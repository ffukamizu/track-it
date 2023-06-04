import styled from "styled-components";

import Trashbin from './../../public/assets/dump.svg';

export default function Habit() {
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <HabitContainer>
            <Trash><img src={Trashbin} alt='Trash Button'/></Trash>
            <HabitContent></HabitContent>
            <WeekdayIndicator>
                {weekDays.map((day, index) => (
                    <DayButton type="button" key={index}>
                        {day}
                    </DayButton>
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

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
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