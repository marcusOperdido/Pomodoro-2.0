import "./App.css";
import Contador from "../partials/contador/contador.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";
import CorDoTempo from "../context/cor.jsx";
import Navbar from "../partials/Navbar/Navbar.jsx";

function App() {
  return (
    <AuthProvider>
      <CorDoTempo>
        <Navbar />
        <Contador />
      </CorDoTempo>
    </AuthProvider>
  );
}

export default App;
