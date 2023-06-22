import { useState } from "react";
import Button from "./Button";
function TempColor(){

     const  [color , setColor]  = useState('cold')
  const [temperature, setTemperature] = useState(10);
 
  function handleDecrease() {
    if (temperature > 0) {
      setTemperature(temperature - 1);
    }
    if(temperature <= 20){
      setColor('cold')
    }
  }
  function handleIncrease() {
    if (temperature < 100) {
      setTemperature(temperature + 1);
    }
    if(temperature >= 20){
      setColor('hot')
    }
  }
  return (
    <>
      <div className="container">
        <div className={`display ${color}`}>
          <h1 id="temperature">{temperature}*C</h1>
        </div>
        <div className="buttons">
          <Button onClick={handleIncrease}>+</Button>
          <Button onClick={handleDecrease}>-</Button>
        </div>
      </div>
    </>
  );
}

export default TempColor;