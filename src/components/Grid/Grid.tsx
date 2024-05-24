import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import "./Grid.module.scss"

interface GridInterface {
    cardData: any;
    index: number;
}

const Grid = ({cardData, index}: GridInterface) => {
    const [life, setLife] = useState(20);
    const [delta, setDelta] = useState(0);
    const [showDelta, setShowDelta] = useState(false);

    const increaseLife = () => {
        setLife(prevLife => prevLife + 1);
        setDelta(prevDelta => prevDelta + 1);
        setShowDelta(true);
    };
    
    const decreaseLife = () => {
        setLife(prevLife => prevLife - 1);
        setDelta(prevDelta => prevDelta - 1);
        setShowDelta(true);
    };

    useEffect(() => {
        if (showDelta) {
            const timer = setTimeout(() => {
                setShowDelta(false);
                setDelta(0)
            }, 5000); 
            return () => clearTimeout(timer);
        }
    }, [showDelta]);
  


    return (

        <div className={`versus-grid-card`} >
            <div className={`rotated-bg ${index % 2 == 0 ? 'rotate-left' : 'rotate-right'}`} style={{backgroundImage: `url(${cardData.image_uris.art_crop})` }}>
                <Counter
                    life={life}
                    onIncreaseLife={increaseLife}
                    onDecreaseLife={decreaseLife}
                    showDelta={showDelta}
                    delta={delta}
                />
            
            </div>
           
        </div>
                    
    );
};

export default Grid;
