function SpiceMeter(props){

    const spice = props.spiceLevel
    const meter = []
    for (let i=0; i < spice; i++){
        meter.push(1)
    }
    for (let i=0; i < 5-spice; i++){
        meter.push(0)
    }

    console.log("METER", meter)

    return(
        <>
            {meter.map((element) => {
                return (
                <li className="icon">{(element) ? <img src="https://imgur.com/iF0MgNn.png"/> : <img src="https://imgur.com/Hq3pYHG.png"/>}</li>
                )
            })}
        </>
    )
}

export default SpiceMeter