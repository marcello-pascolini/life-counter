
import "./VersusGrid.module.scss";

interface VersusGridInterface {
    selectedCards?: {}[]
}

const VersusGrid = ({selectedCards}:VersusGridInterface) => {
    console.log(selectedCards)

  

    return (
        <div className="versus-grid-container">
            {/* <div className="versus-icon">
                <img src="/src/assets/icon/versus.png" alt="versus" ></img>
            </div> */}
            { 
                selectedCards?.map((card: any, index) => (
                    <div className={`versus-grid-card`} >
                        <div className={`rotated-bg ${index % 2 == 0 ? 'rotate-left' : 'rotate-right'}` }style={{  backgroundImage: `url(${card.image_uris.art_crop})` }} />
                    </div>
            ))}
        </div>
    )
}

export default VersusGrid