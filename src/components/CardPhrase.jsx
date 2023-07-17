import { useContext, useState } from "react";
import { DarkModeContext } from "../context";
import { useEffect } from "react";
import useStore from "../api";

const CardPhrase = () => {
  const [phraseUnique, setPhraseUnique] = useState([])
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const { fetchData, response } = useStore();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPhraseUnique(response);
  }, [response])

  const { author, phrase, type } = phraseUnique || {};
  

  return (
    <div className="d-flex justify-content-center m-3">
      {!phraseUnique ? <p><b>Espera...</b></p> :
        <div
        className="card rounded-0 border-0 rounded-0"
        style={{ backgroundColor: darkMode ? "#001d3d" : "#fff" }}
      >
        <div
          className="card-body"
          style={{ color: darkMode ? "#f0ead2" : "#000814" }}
        >
          <h5 className="card-title"><b>{author}</b></h5>
          <p className="card-text">
            {phrase}
          </p>
          <p className="card-text">Fuente: <a href="https://github.com/MCeciliaLuna/phrases-API"><b>PhrasesApi</b></a> | <i>{type}</i></p>
        </div>
      </div>}
    </div>
  );
};

export default CardPhrase;
