
import { useState } from "react";
import "./Counter.module.scss";

interface CounterInterface {
    selectedCards?: {}[]
}

const Counter = ({selectedCards}:CounterInterface) => {
    console.log(selectedCards)
    const [life, setLife] = useState(40); // Inizialmente la vita del giocatore è 20

    const increaseLife = () => {
      setLife(life + 1);
    };
  
    const decreaseLife = () => {
      setLife(life - 1);
    };
  

    return (
        <div className="life-counter">
  
            <button onClick={decreaseLife}>-</button>
            <span>{life}</span>
            <button onClick={increaseLife}>+</button>
      </div>
    )
}

export default Counter