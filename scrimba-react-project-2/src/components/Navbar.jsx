import airbnbLogo from '../assets/airbnb-logo.png'
import "../App.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={airbnbLogo}/>
        </nav>
    )
}