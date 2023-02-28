function Greetings(props) {

    switch(props.lang) {
        case "en": return(<h1 className="helloStatement">Hello {props.children}</h1>);
        case "fr": return(<h1 className="helloStatement">Bonjour {props.children}</h1>)
        case "es": return(<h1 className="helloStatement">Hola {props.children}</h1>)
        case "de": return(<h1 className="helloStatement">Hallo {props.children}</h1>)
    }
    return(<h1><i>Sorry, Language not recognised</i></h1>)

}

export default Greetings