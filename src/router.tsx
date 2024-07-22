import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/Home.tsx'
import About from './pages/about/About.tsx'
import Skills from './pages/skills/Skills.tsx'
import Experiences from './pages/experiences/Experiences.tsx'
import Contact from './pages/contact/Contact.tsx'
import App from './App.tsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/experience",
                element: <Experiences/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])
