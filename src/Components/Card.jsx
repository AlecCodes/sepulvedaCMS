import SpiceMeter from "../Functions/spiceMeter"

function Card(props){
    return (
    <div className='card'>
        <div
        className="nameSection"
        >
            <h3>{props.sausage.name}</h3>
            <ul className="allergies">
                {props.sausage.isLactoseFree && <li>lactose free</li>}
                {props.sausage.isNutFree && <li>nut free</li>}
                {props.sausage.isGlutenFree && <li>Gluten free</li>}
                {props.sausage.isSugarFreee && <li>sugar free</li>}
                {props.sausage.isEggFree && <li>egg free</li>}
            </ul>
            <div className="spice">
                <SpiceMeter spiceLevel={props.sausage.spiceLevel}/>
            </div>
            <ul className="animals">
                {props.sausage.isBeef && <li>beef</li>}
                {props.sausage.isPork && <li>pork</li>}
                {props.sausage.isChicken && <li>chicken</li>}
            </ul>
        </div>
        <div
        className="ingredientsSection"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus voluptatibus, eius recusandae voluptatum magnam libero</div>
    </div>
    )
}

export default Card