import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Counter = () => {
  const [counter, setcounter] = useState(0);
  const [countingDown, setCountingDown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!countingDown) {
        setcounter(prevcounter => prevcounter + 1);
      } else {
        setcounter(prevcounter => prevcounter - 1);
        if (counter == 0) {
          alert("Time´s up!")
          setcounter(0)
          setCountingDown(false)
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [[countingDown]]);

  const getDigit = (num, place) => {
    return Math.floor((num / place) % 10);
  }

  const resetcounter = () => {
    setcounter(0);
  };

  const regresive = () => {
    setCountingDown(true)
  }


  return (
    <>

      <div className="automaticCounter">
        <div className="automaticCalendar">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="four">{getDigit(counter, 1000)}</div>
        <div className="three">{getDigit(counter, 100)}</div>
        <div className="two">{getDigit(counter, 10)}</div>
        <div className="one">{getDigit(counter, 1)}</div>
      </div>
      
      <button className="buttonReset" onClick={resetcounter}>Reset counter</button>
      <button className="buttonReset" onClick={regresive}>Counter regresive</button>

    </>
  );
};

export default Counter;
