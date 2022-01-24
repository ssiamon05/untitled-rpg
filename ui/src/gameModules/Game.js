import { useState } from 'react';
import {Link} from 'react-router-dom';
import Battle from './Battle';
import Event from './events/Event';
import gameAssets from '../assets/gameAssetsPkg';

function Game(props) {
    const [gameState, uGameState] = useState({
        ... props.storeState,
        currentPlayer: null,
        inBattle: false,
        nextMonster: null,
        movesMade: 0,
        eventProb: 50
    });

    while (!gameState.currentPlayer) {
        const playerOne = new gameAssets.PC.Player();
            function handleSubmit(event) {
                event.preventDefault();
                playerOne.setName(event.target.name.value);
                uGameState({...gameState, currentPlayer: playerOne});
            }
        return(
            <div>
                <main>
                    <h2>Hello adventurer! What's your name?</h2>
                    <form id='nameForm' onSubmit={handleSubmit}>
                        <input type='text' id='name' name ='name' required></input>
                        <button type='submit'>Submit</button>
                    </form>
                </main>
                <Link to='/'>Quit Game</Link>
            </div>
        )
    }
    
    function downTimeClickHandle(event) {
        event.preventDefault();
        uGameState({
            ...gameState,
            movesMade: gameState.movesMade + 1,
            eventProb: gameState.eventProb + 10
        })
    }
    if (!gameState.inBattle) {
        if (gameState.eventProb >= (Math.random()*100) + 1) {
            return(
                <div id='event'>
                    <h2>{gameState.currentPlayer.name}'s Adventure: Day {gameState.movesMade}</h2>
                    <Event gameState={gameState} uGameState={uGameState} />
                </div>
            )
        }
        return(
            <div id='downTime'>
                <h2>{gameState.currentPlayer.name}'s Adventure: Day {gameState.movesMade}</h2>
                <h3>Health: {gameState.currentPlayer.health}</h3>
                <h3>Mana: {gameState.currentPlayer.mana}</h3>
                <button onClick={downTimeClickHandle}>Continue Forward</button>
            </div>)
    }
    return(
        <div id='battle'>
            <h2>{gameState.currentPlayer.name}'s Adventure: Day {gameState.movesMade}</h2>
            <Battle gameState={gameState} uGameState={uGameState}/>
        </div>
    ) 
}
export default Game;