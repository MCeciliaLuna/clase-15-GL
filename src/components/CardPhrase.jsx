import { useContext } from "react";
import { DarkModeContext } from "../context";
import { useEffect } from "react";
import useStore from "../api";

const CardPhrase = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const { fetchData, response } = useStore();

  useEffect(() => {
    fetchData();
    console.log(response);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card w-25 rounded-0 border-0"
        style={{ backgroundColor: darkMode ? "#001d3d" : "#fff" }}
      >
        <div
          className="card-body"
          style={{ color: darkMode ? "#f0ead2" : "#000814" }}
        >
          <h5 className="card-title">autor</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic totam
            quis, ex placeat ad repellat explicabo praesentium labore
            voluptatibus dolores dolore, minima impedit esse dicta quae. Laborum
            veniam totam nemo? Nam, obcaecati at eaque unde, quod, ipsum aliquam
            fugit voluptatibus sapiente nulla ducimus? Sed consequatur corrupti
            esse, delectus maxime reprehenderit sit? Nisi, tenetur possimus
            obcaecati id cum eveniet quibusdam totam.
          </p>
          <p className="card-text">type</p>
        </div>
      </div>
    </div>
  );
};

export default CardPhrase;
