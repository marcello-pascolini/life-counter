import "./VersusGrid.module.scss";

interface VersusGridInterface {
    selectedCards?: {}[]
}

const VersusGrid = ({selectedCards}:VersusGridInterface) => {
    console.log(selectedCards)

    return (
        <div className="grid">

        { selectedCards?.map((card: any) => (
                    <div className={`col`}>
                        <img src={card.image_uris.art_crop} alt={card.name} />
                    </div>
        ))}
        </div>
    )
}

export default VersusGrid