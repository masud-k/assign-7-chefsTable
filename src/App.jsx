import Navbar from "./Component/Header/Navbar"
import Menu from "./Component/Menu"
import './App.css'

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="hero">
        <div className="banner">
          <h2>The world’s most popular chicken restaurant chain specializing in Original Recipe</h2>
          <p>Food shown are for illustration purpose only. Actual product may differ from the images shown in this website. The KFC name, logos, and related marks are trademarks of KFC, Inc.</p>
          <div className="flex gap-3">
            <a href="">Explore Now</a>
            <a href="">Order Now</a>
          </div>
        </div>
      </section>
      <div>
        <Menu />
      </div>
    </>
  )
}

export default App
