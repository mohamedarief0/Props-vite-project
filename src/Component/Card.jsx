function card(Props) {


    return(
        <div className="cardN">
            <img className="img" src={"https://source.unsplash.com/1600x800/?"+ Props.name}></img>
            <h3>{Props.name}</h3>
            <h4>{Props.desc}</h4>
            <p>{Props.country}</p>
            <div className="flex-f">
            <h4>₹ {Props.price}</h4>
            <button className="btn">Add to card</button>

            </div>
        </div>
    )
}
export default card;