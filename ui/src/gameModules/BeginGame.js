import {Link} from 'react-router-dom';


function BeginGame(props) {
    return(
        <main>
            <h2>Would you like to start a new Game?</h2>
            <Link to='/game'>Let's do this!</Link>
        </main>
    );
}

export default BeginGame;