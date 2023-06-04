import styled from "styled-components";

export default function InputHabitModule() {
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <FormSection>
            <InputHabit type='text' placeholder="nome do hábito" required></InputHabit>
            <WeekdayButtonContainer>
                {weekDays.map((day, index) => (
                    <DayButton type='button' key={index}>{day}</DayButton>
                ))}
            </WeekdayButtonContainer>
            <SubmitButtonContainer>
                <CancelButton type='button'>Cancel</CancelButton>
                <SubmitButton type='submit'>Submit</SubmitButton>
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
    display: block; // show / hide here
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
`;
