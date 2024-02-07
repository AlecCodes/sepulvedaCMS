import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from './App'
import Menu from "./Pages/Menu.jsx";
import { petLoader , sasuageLoader } from "./loaders.js";

const router = createBrowserRouter( createRoutesFromElements ( 
    <>
        <Route path="/">
            <Route path="" element={<App/>} loader={sasuageLoader}/>
            <Route path="menu" element={<Menu/>} loader={petLoader} />
        </Route>
    </>

))

export default router