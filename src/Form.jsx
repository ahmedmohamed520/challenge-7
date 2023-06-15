import React, { useState } from "react";
import { styled } from "styled-components";
import { containsOnlyNumbers, isCardNumErr, onlyLettersAndSpaces } from "./utils";
import { useNavigate } from "react-router-dom";

let nameErr, cardNumErr, monthErr, yearErr, cvcErr;
const Form = ({
    name,
    cardNum,
    month,
    year,
    cvc,
    nameChangeHandler,
    cardNumChangeHandler,
    monthChangeHandler,
    yearChangeHandler,
    cvcChangeHandler,
}) => {
    const navigate = useNavigate();

    const [nameTouched, setNameTouched] = useState(false);
    const [cardNumTouched, setCardNumTouched] = useState(false);
    const [monthTouched, setMonthTouched] = useState(false);
    const [yearTouched, setYearTouched] = useState(false);
    const [cvcTouched, setCvcTouched] = useState(false);

    const nameBlurHandler = () => setNameTouched(true);
    const cardNumBlurHandler = () => setCardNumTouched(true);
    const monthBlurHandler = () => setMonthTouched(true);
    const yearBlurHandler = () => setYearTouched(true);
    const cvcBlurHandler = () => setCvcTouched(true);

    nameErr = !(onlyLettersAndSpaces(name) && name.length > 0);
    cardNumErr = !isCardNumErr(cardNum);
    monthErr = !(month.length > 0 && month > 0 && month <= 12);
    yearErr = !year.length > 0;
    cvcErr = !(cvc.length === 3 && containsOnlyNumbers(cvc));

    const submitHandler = (e) => {
        e.preventDefault();
        nameBlurHandler();
        cardNumBlurHandler();
        monthBlurHandler();
        yearBlurHandler();
        cvcBlurHandler();

        if (!(nameErr || cardNumErr || monthErr || yearErr || cvcErr)) navigate("/challenge-7/success");
    };
    return (
        <Wrapper onSubmit={submitHandler} className="form">
            <div className={`form-control ${nameTouched && nameErr && "err"}`}>
                <label>Cardholder name</label>
                <input
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    value={name}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                <span className="err">Invalid name</span>
            </div>
            <div className={`form-control ${cardNumTouched && cardNumErr && "err"}`}>
                <label>Card number</label>
                <input
                    type="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    value={cardNum}
                    onChange={cardNumChangeHandler}
                    onBlur={cardNumBlurHandler}
                />
                <span className="err">Wrong format. numbers only</span>
            </div>
            <div className="group">
                <div
                    className={`form-control ${
                        ((monthTouched && monthErr) || (yearTouched && yearErr)) && "err"
                    }`}
                >
                    <label>Exp. date (MM/YY)</label>
                    <div className="multi-inputs">
                        <input
                            type="number"
                            placeholder="MM"
                            value={month}
                            onChange={monthChangeHandler}
                            onBlur={monthBlurHandler}
                        />
                        <input
                            type="number"
                            placeholder="YY"
                            value={year}
                            onChange={yearChangeHandler}
                            onBlur={yearBlurHandler}
                        />
                    </div>

                    <span className="err">Invalid Exp. date</span>
                </div>{" "}
                <div className={`form-control ${cvcTouched && cvcErr && "err"}`}>
                    <label>Cvc</label>
                    <input
                        type="number"
                        placeholder="e.g. 123"
                        value={cvc}
                        onChange={cvcChangeHandler}
                        onBlur={cvcBlurHandler}
                    />

                    <span className="err">Invalid cvc</span>
                </div>
            </div>

            <button className="btn">Confirm</button>
        </Wrapper>
    );
};
const Wrapper = styled.form`
    .form-control {
        width: 100%;
        margin-bottom: 1rem;
    }
    .form-control label {
        text-transform: uppercase;
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 2px;
        color: var(--clr-violet);
        margin-bottom: 4px;
        display: inline-block;
    }
    .form-control input {
        width: 100%;
        border-radius: 6px;
        padding: 0.5rem;
        border: 1px solid var(--clr-gray-1);
        color: var(--clr-violet);
        font-weight: 700;
        letter-spacing: 1px;
        transition: 0.2s all;
    }
    .form-control input:hover {
        border-color: hsl(249, 99%, 64%) hsl(278, 94%, 30%) hsl(278, 94%, 30%) hsl(249, 99%, 64%);
    }
    .form-control input:focus {
        outline: none;
        border-color: hsl(249, 99%, 64%) hsl(278, 94%, 30%) hsl(278, 94%, 30%) hsl(249, 99%, 64%);
    }
    .form-control input::placeholder {
        color: var(--clr-gray-1);
    }
    .group {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .multi-inputs {
        display: flex;
        gap: 0.5rem;
    }
`;
export default Form;
