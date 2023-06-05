import styled from "styled-components";
import axios from "axios";

import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { Oval } from "react-loader-spinner";

export default function InputHabitModule(props) {
    const { isOpen, setIsOpen } = props;

    const { token } = useContext(AuthContext);

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [userHabit, setUserHabit] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    function submitUserHabit(e) {
        e.preventDefault();

        const habit = {
            name: userHabit,
            days: selectedDays,
        };

        setIsDisabled(true);

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habit, config)
            .then(closeWindow)
            .catch((promise) => console.log(promise.response));
    }

    function closeWindow() {
        if (isDisabled) {
            return;
        }
        setIsOpen(false);
        setIsDisabled(false);
        setUserHabit("");
        setSelectedDays([]);
        window.location.reload();
    }

    function toggleDay(dayIndex) {
        if (selectedDays.includes(dayIndex)) {
            setSelectedDays(selectedDays.filter((day) => day !== dayIndex));
        } else {
            setSelectedDays([...selectedDays, dayIndex]);
        }
    }

    return (
        <FormSection data-test="habit-create-container" onSubmit={submitUserHabit} isOpen={isOpen}>
            <InputHabit
                data-test="habit-name-input"
                type="text"
                disabled={isDisabled}
                placeholder="nome do hábito"
                required
                value={userHabit}
                onChange={(e) => setUserHabit(e.target.value)}
            />
            <WeekdayButtonContainer>
                {weekDays.map((day, index) => (
                    <DayButton
                        data-test="habit-day"
                        type="button"
                        disabled={isDisabled}
                        key={index}
                        onClick={() => toggleDay(index)}
                        isSelected={selectedDays.includes(index)}>
                        {day}
                    </DayButton>
                ))}
            </WeekdayButtonContainer>
            <SubmitButtonContainer>
                <CancelButton data-test="habit-create-cancel-btn" type="button" disabled={isDisabled} onClick={closeWindow}>
                    Cancel
                </CancelButton>
                <SubmitButton data-test="habit-create-save-btn" isDisabled={isDisabled} disabled={isDisabled} type="submit">
                    Submit
                </SubmitButton>
                <Loading isDisabled={isDisabled}>
                    <Oval
                        height={30}
                        width={30}
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#bbbbbb"
                        strokeWidth={6}
                        strokeWidthSecondary={6}
                    />
                </Loading>
            </SubmitButtonContainer>
        </FormSection>
    );
}

const FormSection = styled.form`
    height: 150px;
    background: #ffffff;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 22px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    background: ${(props) => (props.isSelected ? "#cfcfcf" : "#ffffff")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => (props.isSelected ? "#ffffff" : "#dbdbdb")};
`;

const InputHabit = styled.input`
    height: 45px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    padding: 10px;
    ::placeholder {
        color: #d5d5d5;
    }
    :focus {
        outline: 2px solid #d5d5d5;
    }
`;

const WeekdayButtonContainer = styled.div`
    height: 30px;
    width: 100%;
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`;

const SubmitButtonContainer = styled.div`
    width: 100%;
    margin-top: 36px;
    display: flex;
    justify-content: flex-end;
    align-items: end;
`;

const CancelButton = styled.button`
    width: 84px;
    height: 35px;
    background: #ffffff;
    border-radius: 4.63636px;
    border-style: solid;
    border-color: #ffffff;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
`;

const SubmitButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border-style: solid;
    border-color: #52b6ff;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    display: ${(props) => (props.isDisabled ? "none" : "flex")};
    justify-content: center;
    align-items: center;
`;

const Loading = styled.div`
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-color: #52b6ff;
    border-style: solid;
    border-radius: 5px;
    display: ${(props) => (props.isDisabled ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`;
