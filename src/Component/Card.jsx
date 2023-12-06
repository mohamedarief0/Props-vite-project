function card(Props) {


    return(
        <div className="cardN">
            <img className="img" src={"https://source.unsplash.com/1600x800/?"+ Props.name}></img>
            <h1>{Props.name}</h1>
            <h2>desc</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, vero!</p>
            <p>{Props.country}</p>
        </div>
    )
}
export default card;