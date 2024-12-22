import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LogIn from "./pages/LogIn";
import Pets from "./pages/Pets";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/authContext";
import AddPets from "./pages/AddPets";
import PetData from "./pages/PetData";
import ConsultData from "./pages/ConsultData";

const App = ({}) => {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addPets" element={<AddPets />} />
          <Route path="/petData/:id" element={<PetData />} />
          <Route path="/consultData" element={<ConsultData />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
