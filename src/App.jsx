import { styled } from "styled-components";
import deskBgMain from "./images/bg-main-desktop.png";
import mobBgMain from "./images/bg-main-mobile.png";
import bgCardFront from "./images/bg-card-front.png";
import bgCardBack from "./images/bg-card-back.png";
import { useState } from "react";
import { containsOnlyNumbers, isCardNumErr, onlyLettersAndSpaces } from "./utils";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./Confirmation";
function App() {
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");

    const nameChangeHandler = (e) => setName(e.target.value);
    const cardNumChangeHandler = (e) => setCardNum(e.target.value);
    const monthChangeHandler = (e) => setMonth(e.target.value);
    const yearChangeHandler = (e) => setYear(e.target.value);
    const cvcChangeHandler = (e) => setCvc(e.target.value);

    return (
        <Wrapper>
            <div className="main-bg">
                <div className="card-back card">
                    <div className="cvc">{cvc || "000"}</div>
                </div>
                <div className="card-front card">
                    <div className="circles">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                    </div>
                    <div className="card-num">{cardNum || "0000 0000 0000 0000"}</div>
                    <div className="card-info">
                        <div className="name">{name || "Jane Appleseed"}</div>
                        <div className="data">
                            {month || "00"}/{year || "00"}
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <Routes>
                    <Route
                        path="/challenge-7/"
                        element={
                            <Form
                                name={name}
                                cardNum={cardNum}
                                month={month}
                                year={year}
                                cvc={cvc}
                                nameChangeHandler={nameChangeHandler}
                                cardNumChangeHandler={cardNumChangeHandler}
                                monthChangeHandler={monthChangeHandler}
                                yearChangeHandler={yearChangeHandler}
                                cvcChangeHandler={cvcChangeHandler}
                            />
                        }
                    />
                    <Route path="/challenge-7/success" element={<Confirmation />} />
                </Routes>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;

    .main-bg {
        background-image: url(${deskBgMain});
        background-repeat: no-repeat;
        height: 100vh;
        width: 36vw;
        position: relative;
    }
    .card {
        background-size: cover;
        position: absolute;
        width: 340px;
        height: 186.35px;
    }
    .card-back {
        background-image: url(${bgCardBack});
        top: 53vh;
        left: 23vw;
        position: relative;
    }
    .cvc {
        color: #fff;
        position: absolute;
        right: 43px;
        bottom: 87px;
        font-size: 0.8rem;
        letter-spacing: 2px;
    }

    .card-front {
        background-image: url(${bgCardFront});
        top: 18vh;
        left: 17.5vw;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 1.2rem;
    }
    .circles {
        display: flex;
        align-items: center;
        gap: 0.7rem;
    }
    .circle-1 {
        width: 35px;
        height: 35px;
        background-color: #fff;
        border-radius: 50%;
    }
    .circle-2 {
        width: 15px;
        height: 15px;
        background-color: transparent;
        border: 1px solid var(--clr-gray-1);
        border-radius: 50%;
    }
    .card-num {
        font-size: 1.3rem;
        margin-top: 3.2rem;
        letter-spacing: 3.5px;
    }
    .card-info {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: var(--clr-gray-1);
        text-transform: uppercase;
        font-size: 0.667rem;
        letter-spacing: 2px;
        font-weight: 500;
    }

    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64vw;
    }
    @media only screen and (max-width: 1140px) {
        .form-container {
            padding-left: 15vw;
        }
        .card-back {
            left: 16vw;
        }
        .card-front {
            left: 10.5vw;
        }
    }

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        .main-bg {
            height: 40vh;
            width: 100%;
            background-size: cover;
            background-image: url(${mobBgMain});
        }
        .card-back {
            position: absolute;
            top: 2rem;
            left: 17vw;
        }
        .card-front {
            position: absolute;
            top: 8.5rem;
            left: 6vw;
        }
        .form-container {
            padding: 0;
            width: 100%;
            margin-bottom: 2rem;
        }
    }
`;
export default App;
