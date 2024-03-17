import { Link } from "react-router-dom";
function Repo(props){
    const gameList = props.gameList;
    const listOfGames = gameList.map(
        g => <li key={g.id}>
            <Link to={{pathname: `/games/${g.id}`}}
                state={{ game: g  }}
            >{g.id}</Link>
            
        </li>
    );
    return <ul className="repo-list">{listOfGames}</ul>;
}

Repo.defaultProps = {
    gameList : [],
}

export default Repo