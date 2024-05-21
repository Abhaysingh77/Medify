import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Doctor from "../pages/Find_Doctor/Doctor";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctors" element={<Doctor />} />
    </Routes>
  );
}

export default App;
