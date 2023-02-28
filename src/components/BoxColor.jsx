function BoxColor(props){

    let ired=props.ired
    let igreen=props.igreen
    let iblue=props.iblue

     return(
         <div className="colouredBox" style={{background: rgb({ired}, {igreen}, {iblue})}}></div>
     )
}

export default BoxColor