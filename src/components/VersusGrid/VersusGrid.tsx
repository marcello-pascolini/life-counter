import "./VersusGrid.module.scss";

interface VersusGridInterface {
    selectedCards: {}[]
}

const VersusGrid = ({selectedCards}:VersusGridInterface) => {
    console.log(selectedCards)

    return (
        <div>VersusGrid</div>
    )
}

export default VersusGrid