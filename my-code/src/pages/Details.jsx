/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom"
import Game from '../model/Game'
function Details(){
    let { state } = useLocation();
    const game = state.game;
    console.log(game);
    return <Game id={game.id} title={game.title} developer={game.developer} rating={game.rating}></Game>
}

export default Details