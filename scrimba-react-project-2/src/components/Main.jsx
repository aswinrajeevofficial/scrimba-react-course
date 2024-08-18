import "../App.css";
import photoGrid from "../assets/photo-grid.png"

export default function Main() {
    return (
        <main className="main">
            <img className="main--image-grid" src={photoGrid}/>
            <h1 className="main--title">Online Experiences</h1>
            <p className="main--description">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </main>

    )
}