import PropTypes from 'prop-types';

function Game(props){
    const id = props.id > 0 ? props.id : 1;
    const title = props.title;
    const developer = props.developer;
    const rating = props.rating;

    return(
        <div className='game'>
            <h2>{id}</h2>
            <div>
                <h3>{title} by {developer}</h3>
                <h4>{rating}⭐</h4>
            </div>
        </div>

    )
}

Game.defaultProps = {
    id: 1,
    title: "",
    developer: "",
    rating: 0.0
}

Game.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    developer: PropTypes.string,
    rating: PropTypes.number
}


export default Game