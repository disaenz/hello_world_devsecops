import "./App.css";
import { useEffect, useState } from "react";
import "./getLanguages";
import getLanguages from "./getLanguages";

function App() {
  const [languages, setLanguage] = useState([]);
  const [found, setFound] = useState({});
  const [myColor, setColor] = useState("black");

  useEffect(() => {
    let data = null;
    const fetchData = async () => {
      data = await getLanguages();
      setLanguage(data);
    };
    // call the function
    fetchData();
  }, []);

  const onChange = (e) => {
    const found = languages.find((l) => {
      console.log(l);
      return l.name.toLowerCase() === e.target.value;
    });
    setFound(found);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>DevOps Demo</h1>
        <p>
          <h3 style={{ fontSize: 64, color: myColor }}>{found.content}</h3>
          <br></br>
          <select
            type="button"
            class="btn btn-primary"
            style={{ width: "200px" }}
            onChange={onChange}
          >
            <option default value="english">
              English
            </option>
            <option value="german">German</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="latin">Latin</option>
            <option value="mandarin">Mandatrin</option>
            <option value="arabic">Arabic</option>
            <option value="hindi">Hindi</option>

          </select>

          <select
            type="button"
            class="btn btn-primary"
            style={{ width: "200px" }}
            onChange={onChangeColor}
          >
            <option default value="black">
              black
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="Purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="yellowgreen">Yellowgreen</option>
            <option value="chocolate">Chocolate</option>
            <option value="pink">Pink</option>
          </select>
        </p>
      </header>
    </div>
  );
}

export default App;
