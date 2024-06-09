import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const ManualCounter = () => {
    const [contador, setContador] = useState(0)

    const contadorManual = () => {
        if (contador < 9999) {
            setContador(contador + 1);
        } else {
            setContador(0);
        }
    };

    const getDigit = (num, place) => {
        return Math.floor((num / place) % 10);
    }

    const resetcounter = () => {

        setContador(0);
    };

    return (
        <>
            <div className="manualCounter">
                <div className="manualCalendar">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="four">{getDigit(contador, 1000)}</div>
                <div className="three">{getDigit(contador, 100)}</div>
                <div className="two">{getDigit(contador, 10)}</div>
                <div className="one">{getDigit(contador, 1)}</div>
            </div>
            <button className="buttonManual" onClick={contadorManual}>Click to count manually</button>
            <button className="buttonManual" onClick={resetcounter}>Reset</button>

        </>
    );
};

export default ManualCounter;