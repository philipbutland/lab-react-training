function Random (props){
    let randomNumber = Math.floor(Math.random()*(props.max-props.min) + props.min);
    return(
        <h1 class="helloStatement">Random value between {props.min} and {props.max} => {randomNumber}</h1>
    )
}

export default Random