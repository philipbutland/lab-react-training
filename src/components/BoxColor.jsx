function BoxColor(props){

    function rgbToHex(r, g, b) {
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
      }

      let hexValue = rgbToHex(`${props.ired}`,`${props.igreen}`,`${props.iblue}`)

     return(
        <div className="boxHolder">
            <div className="colouredBox" style={{background: `rgb(${props.ired},${props.igreen},${props.iblue})`}}>
                <div className="rgbText">
                    rgb({props.ired},{props.igreen},{props.iblue})
                </div>
                <div className="rgbText">
                    {hexValue}
                </div>
            </div>
        </div>

     )
}

export default BoxColor