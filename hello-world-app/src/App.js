import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "./getLanguages";
import getLanguages from "./getLanguages";

function App() {
  const [languages, setLanguage] = useState([]);
  const [found, setFound] = useState({});
 
  useEffect(() => {
    console.log("Inside useEffect");

    let data = null;
    const fetchData = async () => {
      data = await getLanguages();
      console.log("API returned this: ", data);
      setLanguage(data);
    };

    // call the function
    fetchData();
    // make
  }, []);

  const onChange = (e) => {
    //setLanguage(e.target.value);
    console.log("Inside onchnge ", languages);
    console.log("what type is this", typeof(languages));

    // const filtered = languages.filter(
    //   (l) => l.name.toLowerCase() === e.target.value
    // );
    // console.log(filtered);
    const found = languages.find((l) => {
      console.log(l);
      return l.name.toLowerCase() === e.target.value;
    });
    console.log("Inside onchnge found : ", found);

    setFound(found);
    console.log("Test selection, " + e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome Cesar to the Hello World Application</h1>
        <p>
          <h3 style={{ fontSize: 64 }}>{found.content}</h3>
          <br></br>
          <select type="button" class="btn btn-primary" onChange={onChange}>
            <option default value="english">
              English
            </option>
            <option value="german">German</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="latin">Latin</option>
            <option value="mandarin">Mandatrin</option>
            <option value="arabic">Arabic</option>
          </select>
        </p>
      </header>
    </div>
  );
}

export default App;
