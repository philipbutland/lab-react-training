function CardText(props) {
    return(
        <div className="IdText">
            <div><b>First Name: </b>{props.firstName}</div>
            <div><b>Last Name: </b>{props.lastName}</div>
            <div><b>Gender: </b>{props.gender}</div>
            <div><b>Height: </b>{props.height}</div>
            <div><b>Birth: </b>{props.birth}</div>
        </div>
    )
}

export default CardText