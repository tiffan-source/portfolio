import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import { useEffect } from "react"
import axios from "axios";

function App() {

    useEffect(() => {
        (async()=>{
            await axios.get(`${import.meta.env.VITE_REACT_API_URL}count`)
        })();
    })

return (
    <main className="font-ClashDisplay min-h-screen">
        <Header/>
        <Navbar/>
        <Outlet/>
        <div className="fixed top-0 left-0 w-full h-full bg-square bg-contain -z-20"></div>
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-white from-10% to-blue-50 to-95% opacity-90 -z-20"></div>
    </main>
)
}

export default App
