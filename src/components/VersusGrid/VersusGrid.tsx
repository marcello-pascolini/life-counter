import "./VersusGrid.module.scss";

interface VersusGridInterface {
    selectedCards?: {}[]
}

const VersusGrid = ({selectedCards}:VersusGridInterface) => {
    console.log(selectedCards)

    const gridColMap: any = {
        0: { gridColumn: 1, gridRow: 1 },
        1: { gridColumn: 2, gridRow: 1 },
        2: { gridColumn: 1, gridRow: 2 },
        3: { gridColumn: 2, gridRow: 2 },
    }

    return (
        <div className="grid">
            { 
                selectedCards?.map((card: any, index: number) => (
                    <div className={`col`} >
                            <div className="rotated-bg" style={{  backgroundImage: `url(${card.image_uris.art_crop})` }}></div>
                    </div>
            ))}
        </div>
    )
}

export default VersusGrid