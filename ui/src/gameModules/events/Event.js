import Rare from './Rare';
import Uncommon from './Uncommon';
import Epic from './Epic';
import Legendary from './Legendary';

function Event(props) {
    const rarity = Math.random();
    console.log(rarity);

    if (rarity < 0.5) {
        return(
            <div>
                <Uncommon gameState={props.gameState} uGameState={props.uGameState}/>
            </div>
        )
    } else if (rarity < 0.85) {
        return(
            <div>
                <Rare gameState={props.gameState} uGameState={props.uGameState}/>
            </div>
        )
    } else if (rarity < 0.95) {
        return(
            <div>
                <Epic gameState={props.gameState} uGameState={props.uGameState}/>
            </div>
        )
    } else if (rarity < 1) {
        return(
            <div>
                <Legendary gameState={props.gameState} uGameState={props.uGameState}/>
            </div>
        )
    }
    
    return(
        <div>
            <h2>An error has occured.</h2>
        </div>
    )
}

export default Event;