import SpiceMeter from "../Functions/spiceMeter"

function Card(props){
    return (
    <div className='card'>
        <div
        className="nameSection"
        >
            <h3>{props.sausage.name}</h3>
            <ul className="allergies">
                {props.sausage.isLactoseFree && <li className="icon">
                <img
                src="https://imgur.com/tqpk8Vq.png"
                />    
                </li>}
                {props.sausage.isNutFree && <li className="icon">
                <img
                src="https://imgur.com/OVuWr7k.png"
                />    
                </li>}
                {props.sausage.isGlutenFree && <li className="icon">
                <img
                src="https://imgur.com/leN7joT.png"
                />    
                </li>}
                {props.sausage.isSugarFreee && <li className="icon">
                <img
                src="https://imgur.com/nCxVwJN.png"
                />    
                </li>}
                {props.sausage.isEggFree && <li className="icon">
                <img
                src="https://imgur.com/JUKRCq4.png"
                />    
                </li>}
            </ul>
            <div className="spice">
                <SpiceMeter spiceLevel={props.sausage.spiceLevel}/>
            </div>
            <ul className="animals">
                {props.sausage.isBeef && <li className="icon"><img
                src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Silhouettes-PNG/Cow_Silhouette_PNG_Clip_Art_Image.png?m=1510113302"/></li>}
                {props.sausage.isPork && <li className="icon"><img
                src="https://i.pinimg.com/originals/ea/89/94/ea8994889ef97021a1b6b4feece51d9c.png"
                /></li>}
                {props.sausage.isChicken && <li className="icon"><img
                src="https://img2.embroiderydesigns.com/printart/xlarge/cosmos_finearts/pgcfa1504.webp"
                /></li>}
            </ul>
        </div>
        <div
        className="ingredientsSection"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus voluptatibus, eius recusandae voluptatum magnam libero</div>
    </div>
    )
}

export default Card