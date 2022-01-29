import { BrowserRouter, Routes, Route } from "react-router-dom";
// views
import Signup from "./views/Signup";
import ShowData from "./views/ShowData";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>page title</h1>
      </div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/show" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;