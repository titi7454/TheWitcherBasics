import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Maps from "./Components/Maps";
import Mutants from "./Components/Mutants";
import NavBar from "./Components/NavBar";
import Schools from "./Components/Schools";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Mutants />
      <Schools />
      <Maps />
      <Contacts />
    </div>
  );
}

export default App;
