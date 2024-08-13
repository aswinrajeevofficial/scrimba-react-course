import reactLogo from "../assets/react-icon-small.png"
import "../App.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={reactLogo}/>
            <h2 className="navbar--logoText">ReactFacts</h2>
            <p className="navbar--text">React Course - Project 1</p>
        </nav>
    )
}