import Navbar from "./Component/Header/Navbar"
import Menus from "./Component/Menus"
import Cooks from "./Component/Cooks"
import './App.css'
import Image from "./Component/Image/Banner.jpg"

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <section className="hero container mx-auto" style={{ backgroundImage: `url(${Image})` }}>
        <div className="banner">
          <h2>The world’s most popular chicken restaurant chain specializing in Original Recipe</h2>
          <p>Food shown are for illustration purpose only. Actual product may differ from the images shown in this website. The KFC name, logos, and related marks are trademarks of KFC, Inc.</p>
          <div className="flex gap-3">
            <a href="">Explore Now</a>
            <a href="">Our Feedback</a>
          </div>
        </div>
      </section>
      <div className="our">
        <h1>Our Recipes</h1>
        <p>Subscribe to our Newsletter for weekly recipe inspiration as well as seasonal menu tips and resources. Every Friday I launch a new family friendly recipe that even the pickiest eaters will eat.  </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <Menus/>
        </div>
        <div className="col-span-3">
          <Cooks/>
        </div>
      </div>
    </>
  )
}

export default App
