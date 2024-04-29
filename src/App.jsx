import Navbar from "./Component/Header/Navbar"
import Menus from "./Component/Menus"
import Cooks from "./Component/Cooks"
import './App.css'
import Image from "./Component/Image/Banner.jpg"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [carts, setCarts] = useState([]);

  const handleMenu = menu => {
    console.log(carts)
    console.log(menu)
    const alreadyExist = carts.find(cart => cart.recipe_id == menu.recipe_id);
    if (!alreadyExist) {
      setCarts([...carts, menu]);
    }
    else {
      toast.error("You already have this recipe in your cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }


  }
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
      <div className="card md:grid grid-cols-12 bg-base-300">
        <div className="col-span-8 m-4">
          <Menus handleMenu={handleMenu} />
        </div>
        <div className="col-span-4">
          <Cooks carts={carts} />
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
