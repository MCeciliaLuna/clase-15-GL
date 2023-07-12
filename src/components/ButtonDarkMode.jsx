import { useContext } from "react";
import { DarkModeContext } from "../context";



const ButtonDarkMode = () => {
const [darkMode, setDarkMode] = useContext(DarkModeContext)
  return (
    <div className="d-flex justify-content-center">
      <div className="form-check form-switch m-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
    </div>
  );
};

export default ButtonDarkMode;
