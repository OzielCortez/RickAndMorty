import SearchBar from "./SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav(props){

    return (
        <nav className={style.navContainer}>
            <SearchBar onSearch={props.onSearch} /> 
            <Link to={"/about"}>
            <button>About</button>
            </Link>
            <Link to={"/home"}>
            <button>Home</button>
            </Link>
            <Link to={"/"}>
            <button onClick={props.logout}>Log out</button>
            </Link>
            <Link to={"/Favorites"}>
            <button>Favorites</button>
            </Link>
            
            
        </nav>
    )
}
