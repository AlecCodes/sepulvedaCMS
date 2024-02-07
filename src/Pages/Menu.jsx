import { useLoaderData } from "react-router-dom"

function Menu(props){
    const pets = useLoaderData()
    console.log(pets)
    return (
        <div>
            <h1>Menu:</h1>
        </div>
    )
}

export default Menu