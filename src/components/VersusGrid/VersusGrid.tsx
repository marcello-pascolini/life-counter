
import "./VersusGrid.module.scss";
import Grid from "../Grid/Grid";

interface VersusGridInterface {
    selectedCards?: {}[]
}

const VersusGrid = ({selectedCards}:VersusGridInterface) => {


    return (
        <div className="versus-grid-container" style={selectedCards?.length === 2 ? { flexDirection: 'column' } : {}}>
            {/* <div className="versus-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/6793/6793750.png" alt="versus" />
            </div> */}
            { 
                selectedCards?.map((card: any, index) => (
                    <Grid cardData={card} index={index} key={index} totalCards={selectedCards?.length}/>
                ))
            
            }
        </div>
    )
}

export default VersusGrid