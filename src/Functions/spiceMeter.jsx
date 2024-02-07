function SpiceMeter(props){

    const spice = props.spiceLevel

    return(
        <>
            <div>
                {spice > 0 && '*'.repeat(spice)}
            </div>
        </>
    )
}

export default SpiceMeter