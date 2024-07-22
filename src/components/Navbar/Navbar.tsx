import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { NavList } from "./NavList";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let location = useLocation();
    console.log(location.pathname);

  return (
    <div className="">
        <div className="fixed bottom-4 left-[calc(50%_-_1.5rem)] z-40 sm:hidden">
            <span className=" cursor-pointer text-3xl text-white inline-flex h-12 w-12 rounded-full bg-black justify-center items-center">
                <FontAwesomeIcon
                icon={!isMenuOpen ? faBars : faClose}
                onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </span>
        </div>
        <div className="fixed w-full bottom-6 left-0 sm:flex justify-center hidden z-40">
            <ul className="flex gap-2 items-center justify-center bg-black w-fit p-2 px-6 rounded-full text-sm font-semibold">
                {
                    NavList.map((item, index) => (
                        <li key={index}
                        className={" p-2 px-4 " + 
                            (location.pathname.toLocaleLowerCase() === "/"+item.name.toLocaleLowerCase() || (location.pathname === "/" && item.name === "Home")
                            ? "bg-white text-black rounded-full" : "text-white"
                            )
                        }>
                                <Link to={"/"+item.name.toLocaleLowerCase()}>
                                    {item.name}
                                </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        {
            isMenuOpen &&
            <ul className="bg-white absolute w-full h-screen p-2 top-0 left-0 flex flex-col justify-center items-center gap-4 z-20 sm:hidden">
            {
                NavList.map((item, index) => (
                    <li key={index} className={
                        "uppercase text-[2.5rem] font-semibold " + 
                        (location.pathname.toLocaleLowerCase() === "/"+item.name.toLocaleLowerCase() || (location.pathname === "/" && item.name === "Home")
                        ? "" : "text-stroke-3 text-white")
                        }>
                            <Link to={"/"+item.name.toLocaleLowerCase()} onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </Link>
                    </li>
                ))
            }
            </ul>
        }
    </div>
  )
}

export default Navbar