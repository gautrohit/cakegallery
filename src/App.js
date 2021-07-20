import logo from "./logo.svg";
import "./Styles/CakeDetails.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import CakeDetails from "./Components/CakeDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <CakeDetails />
    </div>
  );
}

export default App;
