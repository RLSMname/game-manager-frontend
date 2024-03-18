import { useEffect } from 'react';
import { useState } from 'react';
function Add(props){
    const list = props.list;
    const setList = props.setList;
    
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [dev, setDev] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        console.log("List prop in Add component:", list);
    }, [list]);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        setList([...list, { id: id, title: name, developer: dev, rating: rating }]);

        setId(0);
        setName('');
        setDev('');
        setRating(0);

         
    }


    return (
    <div>
        <h1>Add a game</h1>
        <form onSubmit={handleSubmit}>
                <h3>Id</h3>
                <input type="number" placeholder="0" value={id}  min="1" onChange={(e) => setId(e.target.value)}></input><br></br>
                <h3>Game title</h3>
                <input placeholder="Title" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <h3>Game developer</h3>
                <input placeholder="Developer" value={dev} onChange={(e) => setDev(e.target.value)}></input><br></br>
                <h3>Rating</h3>
                <input type="number" placeholder="0" value={rating} min="1" max="10" onChange={(e) => setRating(e.target.value)}></input>
                <br></br><br></br>
                <button type="submit">Add</button>
            </form>
    </div>)
}

export default Add


/*return <button onClick={addFunction}>Add</button>*/