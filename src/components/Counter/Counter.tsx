

import "./Counter.module.scss";

interface CounterInterface {
    life: number;
    onIncreaseLife: () => void;
    onDecreaseLife: () => void;
    showDelta: boolean;
    delta: number;
}

const Counter = ({ life, onIncreaseLife, onDecreaseLife, showDelta, delta }: CounterInterface) => {

 

    return (
        <div className="life-counter">
        <div className="points">
            <button onClick={onDecreaseLife}>-</button>
            <span>{life}</span>
            <button onClick={onIncreaseLife}>+</button>
        </div>
        {showDelta && <div className="delta">{delta > 0 ? `+${delta}` : delta}</div>}
    </div>
    )
}

export default Counter