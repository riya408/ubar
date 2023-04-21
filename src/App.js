
import './App.css';
import Footer from './Components/Navbar/Footer/Footer';
import Navbar from './Components/Navbar/Navbar/Navbar';
import Ride from './RideService/RideServics';
import Cards from './Card/Card';

function App() {
  return (
   <>
   <Navbar/>
    <Cards/>
  <Ride/>
   <Footer/>
   
   
   </>
  );
}

export default App;
