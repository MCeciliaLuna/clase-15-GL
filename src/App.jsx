import "./App.css";
import Wrapper from "./components/wrapper";
import { DarkModeProvider } from "./context";

function App() {
    
  return (
    <DarkModeProvider>
      <Wrapper />
    </DarkModeProvider>
  );
}

export default App;
