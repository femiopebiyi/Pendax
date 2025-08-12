import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./App.css"
import { SendPage } from "./pages/SendPage"
import Footer from "./components/Footer"

function App() {


  return (
    <div className='App'>
        <Router>
          <Navbar/>
          <Footer/>
          <Routes>
            <Route path="/" element = {<SendPage/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
