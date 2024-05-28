import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import "./Grid.module.scss"

interface GridInterface {
    cardData: any;
    index: number;
    totalCards: number;
}

const Grid = ({cardData, index, totalCards}: GridInterface) => {
    const [life, setLife] = useState(40);
    const [delta, setDelta] = useState(0);
    const [showDelta, setShowDelta] = useState(false);


    const gridCardLayout: any = {
        //4 PLAYERS
        4 : {
            1: {
                flex: '100%',
                height: '50%',
                maxWidth: '50%',
                position: 'relative',
                overflow: 'hidden',
            },
            2: {
                flex: '100%',
                height: '50%',
                maxWidth: '50%',
                position: 'relative',
                overflow: 'hidden',
            },
            3: {
                flex: '100%',
                height: '50%',
                maxWidth: '50%',
                position: 'relative',
                overflow: 'hidden',
            },
            4: {
                flex: '100%',
                height: '50%',
                maxWidth: '50%',
                position: 'relative',
                overflow: 'hidden',
            }
        },
        //3 PLAYERS
        3 : {
            1: {
                flex: '100%',
                height: '50%',
                maxWidth: '50%',
                position: 'relative',
                overflow: 'hidden',
            },
            2: {
                flex: '100%',
                height: '50%',
                maxWidth: '50%',
                position: 'relative',
                overflow: 'hidden',
            },
            3: {
                flex: '100%',
                height: '50%',
                maxWidth: '100%',
                position: 'relative',
                overflow: 'hidden'
            },
        },
        //2 PLAYERS
        2 : {
            1: {
              flex: "1",
              
            },
            2: {
                flex: "1",
           
            },
        },
    }

    const rotateBgCardLayout: any = {
        //4 PLAYERS
        4 : {
            1: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50vh",
                height: "50vw",
                backgroundSize: "cover",
                backgroundPosition: "25%"
            },
            2: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50vh",
                height: "50vw",
                backgroundSize: "cover",
                backgroundPosition: "25%"
            },
            3: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50vh",
                height: "50vw",
                backgroundSize: "cover",
                backgroundPosition: "25%"
            },
            4: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50vh",
                height: "50vw",
                backgroundSize: "cover",
                backgroundPosition: "25%"
            }
        },
        //3 PLAYERS
        3 : {
            1: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50vh",
                height: "50vw",
                backgroundSize: "cover",
                backgroundPosition: "25%"
            },
            2: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "50vh",
                height: "50vw",
                backgroundSize: "cover",
                backgroundPosition: "25%"
            },
            3: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',  
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: '25%',
                transform: 'rotate(0deg)'
            },
        },
        //2 PLAYERS
        2 : {
            1: {
                transform: "translate(0%) rotate(180deg)",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            2: {
                transform: "translate(0%)",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

    }

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

    
    useEffect(() => {
       console.log(totalCards, "totalCards")
    }, [totalCards]);
  


    return (

        <div style={gridCardLayout[totalCards][index + 1]}>
            <div 
                className={`${index % 2 == 0 ? 'rotate-left' : 'rotate-right'}`} 
                style={{
                    backgroundImage: `url(${cardData.image_uris.art_crop})`,
                    ...rotateBgCardLayout[totalCards][index + 1]
                }} 
            >
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
