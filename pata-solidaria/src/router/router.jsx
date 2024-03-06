import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { JobVolunteer } from "../pages/JobVolunteer"


export const AppRoutes = () =>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/trabalhovoluntariado" element={<JobVolunteer/>} />
         </Routes>
        </BrowserRouter>
       
    )
}