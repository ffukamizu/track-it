import styled from "styled-components";
import CheckMark from "./../../public/assets/check.svg";

export default function TodayHabit(props) {
    return (
        <HabitContainer>
            <div>
                <HabitContent>df</HabitContent>
                <CurrentStreak>df</CurrentStreak>
                <AllTimeStreak>df</AllTimeStreak>
            </div>
            <div>
                <Check>
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
    color: #666666;
`;

const AllTimeStreak = styled.p`
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`;

const Check = styled.div`
    height: 69px;
    width: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #8fc549;
`;
