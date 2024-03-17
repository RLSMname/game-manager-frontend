import Repo from "../repo/Repo";
import { Link } from "react-router-dom";
function Games(props){

    const list = props.list;
    return(
        <>
        <h1>List of games</h1>
        <Repo gameList={list}/>
        <Link to="/games/add"  className="add-button">Add</Link>
        </>
    )
}

export default Games