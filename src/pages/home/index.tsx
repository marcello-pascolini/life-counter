import { useEffect, useState } from "react";
// import "../../styles/pages/home.module.scss"
import Icon from "../../components/Icon/Icon";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";
import { fetchAutocompleteData, searchCards } from "../../store";
import Button from "../../components/Button/Button";
import VersusGrid from "../../components/VersusGrid/VersusGrid";

const Home = () => {

    const [numPlayers, setNumPlayers] = useState(2)
    const [currentStep, setCurrentStep] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [autocompleteData, setAutocompleteData] = useState([])
    const [selectedCommanders, setSelectedCommanders] = useState<any>(
        {
            0: "",
            1: "",
            2: "",
            3: "",
        }
    )

    const playerSelection = [
        { playerNum: 2, label: '2 Players' },
        { playerNum: 3, label: '3 Players' },
        { playerNum: 4, label: '4 Players' },
    ];

    const playerPositionMap: any = {
        0: "1ST",
        1: "2ND",
        2: "3RD",
        3: "4TH",
    }

    const handlePlayerSelection = (playerNum: number) => {
        setNumPlayers(playerNum)
        setCurrentStep((prevValue) => prevValue + 1);
    }

    const handleCommanderSelection = (value: string, index: number) => {
        const newSelectedCommanders = { ...selectedCommanders };
        newSelectedCommanders[index] = value;
        setSelectedCommanders(newSelectedCommanders);
        setSearchTerm(value)
    };

    const goBack = () => {
        setCurrentStep((prevValue) => prevValue - 1)
        setSelectedCommanders({
            0: "",
            1: "",
            2: "",
            3: "",
        });
        setSearchTerm("")
    }

    const commanderSetter = async () => {
        const results = await searchCards(selectedCommanders);
        console.log(results)
    }
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchTerm) { // Effettua la chiamata solo se il termine di ricerca è definito
                    const data = await fetchAutocompleteData(searchTerm);
                    setAutocompleteData(data);
                } else {
                    setAutocompleteData([]); // Se il termine di ricerca è vuoto, reimposta i dati dell'autocompletamento
                }
            } catch (error) {
                console.log(error)
            }

        };

        fetchData();
    }, [searchTerm]);

   


    return (
        <>
            <div className="home-container">
                <div className="layer-0"></div>
                <div className="layer-0 layer-animation"></div>
                

                {/* STEP 1 */}
                {
                    currentStep === 1 && (
                        <div className="home-step-1">
                            <div className="title-container">
                                <h1>Start game</h1>
                            </div>
                            <div className="player-selection-container">
                                {
                                    playerSelection.map( (item: any, index: number) => (
                                        <button className="player" key={index} onClick={() => handlePlayerSelection(item.playerNum)}>
                                            <span>{item.label}</span>
                                            <div className="icon-container">
                                                {[...Array(item.playerNum)].map((_, i) => (
                                                    <Icon key={i} iconName={faDiceD20} width={24} height={24} color="#fff"/>
                                                ))}
                                            </div>
                                        </button>
                                    ))
                                }

                            </div>
                        </div> 
                    ) 
                }

                {/* STEP 2 */}
                {
                currentStep === 2 && (
                        <>
                            <div className="back-btn-box" onClick={goBack} > 
                                <Icon iconName={faArrowLeftLong} width={40} height={40} color="#fff"/>
                            </div>
                            <div className="home-step-2">
                                <div className="title-container">
                                    <h1>Choose commanders</h1>
                                </div>

                                <div className="player-insert">
                                    {            
                                        Array.from({ length: numPlayers }, (_, index: number) => (
                                            <div key={index} className="player-insert-element">
                                                <div className="player-insert-element-position">
                                                    <span>{playerPositionMap[index]}</span>
                                                </div>
                                                <div className="player-insert-element-input">
                                                    <Input 
                                                        type="text" 
                                                        placeholder="Choose your commander"
                                                        autocompleteData={autocompleteData}
                                                        value={selectedCommanders[index]} // Set value to selected commander
                                                        onChange={(e) => handleCommanderSelection(e, index)} // Pass only the value
                                                    />
                                                </div>
                                            </div>
                                    ))}

                                </div>
                                <div className="action-step-2">
                                    <Button label="Start game" onClick={commanderSetter}/>
                                </div>
                    
                            </div>                           
                        </>
                    )

                }

                {/* STEP 3 */}
                {
                currentStep === 3 && (
                        <VersusGrid />
                    )

                }
                           
            </div>
        </>
    )
}

export default Home