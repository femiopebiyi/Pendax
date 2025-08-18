import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./App.css"
import { SendPage } from "./pages/SendPage"
import Footer from "./components/Footer"
import { WalletConnectProvider } from "./context/WalletConnectContext"

function App() {


  return (
    <div className='App'>
      <WalletConnectProvider>
        <Router>
          <Navbar/>
          <Footer/>
          <Routes>
            <Route path="/" element = {<SendPage/>}/>
          </Routes>
        </Router>
        </WalletConnectProvider>
    </div>
  )
}

export default App
