import { useContext } from "react";
import ButtonDarkMode from "./ButtonDarkMode";
import CardPhrase from "./CardPhrase";
import { DarkModeContext } from "../context";

const Wrapper = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <section style={{ backgroundColor: darkMode ? "#000814" : "#f0ead2" }} className=" d-flex justify-content-center">
      <div>
        <ButtonDarkMode />
        <CardPhrase />
      </div>
    </section>
  );
};

export default Wrapper;
