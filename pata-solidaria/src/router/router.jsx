import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Contact } from "../pages/Contact"
import { Home } from "../pages/Home"


export const AppRoutes = () =>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
         </Routes>
        </BrowserRouter>
       
    )
}