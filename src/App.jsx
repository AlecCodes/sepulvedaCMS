import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {client} from './client'
import { useLoaderData } from 'react-router'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const [pets, setPets] = useState([])

  const result = useLoaderData()
  console.log(result)

  return (
    <>
      <h1>Sepulveda Meats & Provisions</h1>
      <div className='imageContainer'>
        <img
        id='butcherImage'
        src='https://philipwarrenbutchers.co.uk/cdn/shop/collections/warrens-counter_7ec32326-1b0d-46b1-9919-d16dd434ce96_1350x759.jpg?v=1604571836'
        />
      </div>
      <div>
        <h1>HIIi omg</h1>
        <ul>
          {result.map((element) => {
            return(
              <Card sausage={element}/>
            )
          })}

        </ul>
      </div>
    </>
  )
}

export default App
