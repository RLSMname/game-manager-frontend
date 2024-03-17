function Add(props){
    const list = props.list;
    const setList = props.setList;
    
    function addGame(){
        console.log("added element i hope")
        setList([...list, {id:69, title:"banana", developer:"devbanana", rating:5} ])
    }


    return (
    <div>
        <h1>Add a game</h1>
        <form>
               <h3>Id</h3>
              <input type="number" placeholder="0"></input><br></br>
              <h3>Game title</h3>
              <input placeholder="Title"></input>
              <br></br>
              <h3>Game developer</h3>
              <input placeholder="Developer"></input><br></br>
              <h3>Rating</h3>
              <input type="number" placeholder="0"></input>
              <br></br><br></br>
              <button onClick={addGame}>Add</button>
        </form>
    </div>)
}

export default Add


/*return <button onClick={addFunction}>Add</button>*/