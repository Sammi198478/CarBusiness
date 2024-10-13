
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Navbar'
import Hero from './Hero'
import {FilterAndSearch} from './Filter'
import Trending from './TrendingCard'
import BestSelling  from './BestSelling'
import  Reviews  from './Reviews'
import FindVehicles  from './Vehiclex'
import Footer from './Footer'
function App() {
 

  return (
    <>
   <Navbar/>
   <Hero/>
   <FilterAndSearch/>
   
   <Trending/>
   <BestSelling />
   < Reviews />
   <FindVehicles />
   <Footer/>
     
    </>
  )
}

export default App
