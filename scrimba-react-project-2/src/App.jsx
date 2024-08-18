import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from "./components/Card"
import data from "./assets/data"

const cards = data.map(item => {
  return (
      <Card
          key={item.id}
          item={item}
          
      />
  )
})        

export default function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}


