import React from "react";
import { styled } from "styled-components";
import confirmIcon from "./images/icon-complete.svg";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/");
    };

    return (
        <Wrapper className="form">
            <img src={confirmIcon} alt="Check icon" className="icon" />
            <h3 className="title">Thank you!</h3>
            <p className="text">We've added your card details</p>
            <button onClick={clickHandler} className="btn">
                Continue
            </button>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
        display: block;
        width: 60px;
        height: 60px;
        margin-bottom: 1.5rem;
    }
    .title {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 1.3rem;
        color: var(--clr-violet);
        margin-bottom: 0.5rem;
    }
    .text {
        color: var(--clr-gray-2);
        font-weight: 400;
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }
`;

export default Confirmation;
