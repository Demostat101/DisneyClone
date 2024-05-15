import HomePage from "./Components/HomePage"
import "../src/Components/HomePage.css"
import FirstSection from "./Components/FirstSection"
import DisneyPlus from "./Components/DisneyPlus"

function App() {


  return (
    <div className="AllContent">

      <div className="AllCombined">

        <HomePage/>
        <FirstSection/>
        <DisneyPlus/>


      </div>

    </div>
  )
}

export default App
