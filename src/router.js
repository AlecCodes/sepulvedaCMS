import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from './App'

const router = createBrowserRouter( createRoutesFromElements ( 
    <>
        <Route path="/">
            <Route path="" element={<App/>}/>
        </Route>
    </>

))