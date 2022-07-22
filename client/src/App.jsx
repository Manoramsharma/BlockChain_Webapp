import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { Transactions } from "./components/Transactions";

const App = () => {

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
    </div>
  )
}

export default App
