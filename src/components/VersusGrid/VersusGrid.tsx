
import Counter from "../Counter/Counter";
import "./VersusGrid.module.scss";

interface VersusGridInterface {
    selectedCards?: {}[]
}

const VersusGrid = ({selectedCards}:VersusGridInterface) => {
    console.log(selectedCards)

  

    return (
        <div className="versus-grid-container">
            {/* <div className="versus-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/6793/6793750.png" alt="versus" />
            </div> */}
            { 
                selectedCards?.map((card: any, index) => (
                    <div className={`versus-grid-card`} >
                        <div className={`rotated-bg ${index % 2 == 0 ? 'rotate-left' : 'rotate-right'}` }style={{  backgroundImage: `url(${card.image_uris.art_crop})` }}>
                            <Counter />
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default VersusGrid