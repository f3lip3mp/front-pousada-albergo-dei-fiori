import { Routes, Route} from 'react-router-dom';
import Register from "./components/Registro";
import Reserva from "./components/Reserva";


function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/reserva" element={<Reserva/>} index/>
    </Routes>
  );
}

export default App;
