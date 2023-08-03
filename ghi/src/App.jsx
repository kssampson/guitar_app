import { BrowserRouter, Routes, Route } from "react-router-dom"
import First from "./components/First"
import Second from "./components/Second"
import GuitarList from "./components/GuitarList"
import GuitarDetail from "./components/GuitarDetail"
import CreateGuitar from "./components/CreateGuitar"
import UpdateGuitar from "./components/UpdateGuitar"
import QuickNav from "./components/QuickNav"
// import NavBar from "./components/NavBar"


function App() {

  return (
    <BrowserRouter>
      <QuickNav/>
      <div>
        <Routes>
          <Route index element={<First/>} />
          {/* <Second/> */}
          {/* <First/> */}
          {/* <Second/> */}
          <Route path="/guitars" element={<GuitarList/>}/>
          <Route path="/guitars/:guitar_id" element={<GuitarDetail/>}/>
          <Route path="/guitars/create" element={<CreateGuitar/>}/>
          <Route path="/guitars/:guitar_id/update" element={<UpdateGuitar/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
