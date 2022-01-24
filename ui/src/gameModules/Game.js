import { useState } from 'react';
import { Link } from 'react-router-dom';
import Battle from './Battle';
import Event from './events/Event';
import gameAssets from '../assets/gameAssetsPkg';

function Game(props) {
    const [gameState, uGameState] = useState({
        ...props.storeState,
        currentPlayer: null,
        inBattle: false,
        nextMonster: null,
        movesMade: 1,
        eventProb: Math.random(),
        money: 0,
        hunger: 100
    });

    while (!gameState.currentPlayer) {
        const playerOne = new gameAssets.PC.Player();
        function handleSubmit(event) {
            event.preventDefault();
            playerOne.setName(event.target.name.value);
            uGameState({ ...gameState, currentPlayer: playerOne });
        }
        return (
            <div>
                <main>
                    <h2>Hello adventurer! What's your name?</h2>
                    <form id='nameForm' onSubmit={handleSubmit}>
                        <input type='text' id='name' name='name' required></input>
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
            hunger: gameState.hunger - 5,
            eventProb: Math.random()
        })
    }

    function PlayerInfo() {
        return(
            <div id='playerInfo'>
                <h2>{gameState.currentPlayer.name}'s Adventure: Day {gameState.movesMade}</h2>
                <h3>Health: {gameState.currentPlayer.health}</h3>
                <h3>Mana: {gameState.currentPlayer.mana}</h3>
                <h3>Hunger: {gameState.hunger}</h3>
                <h3>Money: ${gameState.money}</h3>
            </div>
        )
    }

    //decides what to load for player if not in battle
    if (!gameState.inBattle) {
        console.log(gameState.eventProb);
        // decides whether or not to do an event
        if (gameState.eventProb <= 0.5 && gameState.movesMade > 1) {
            return (
                <div id='event'>
                    <PlayerInfo />
                    <Event gameState={gameState} uGameState={uGameState} />
                </div>
            )
        }
        return (
            <div id='downTime'>
                <PlayerInfo />
                <button onClick={downTimeClickHandle}>Continue Forward</button>
            </div>)
    }
    return (
        <div id='battle'>
            <PlayerInfo />
            <Battle gameState={gameState} uGameState={uGameState} />
        </div>
    )
}
export default Game;