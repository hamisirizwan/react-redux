import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "./components/Description";
import Details from "./components/Details";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              alignItems: "center",
              color: "aqua",
            }}
          >
            KARIBU DUKETU
          </h1>
        </div>
        <hr style={{ marginTop: "0" }} />

        <Routes>
          <Route path="/" element={<Details />}></Route>
          <Route path="/des" element={<Description />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
