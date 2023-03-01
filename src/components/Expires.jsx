function Expires(props){

    return(
        <div className="cardExpiry">
            <span>Expires {props.month}/{props.year}&nbsp;&nbsp;&nbsp;</span> {props.bank}
        </div>
    )
}

export default Expires