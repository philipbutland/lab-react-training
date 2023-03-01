function CardNumber(props) {

    let lastnum = `${props.number}`.slice(12, 16);

    return(
        <div className="cardNumber">**** **** **** {lastnum}</div>
    )
}

export default CardNumber