function CardImage( props ) {

    return(        
        <div className="IdPhoto">
            <img src={props.image} alt="ID" />
        </div>
    )
}

export default CardImage