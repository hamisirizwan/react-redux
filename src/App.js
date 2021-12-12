import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "./components/Description";
import Details from "./components/Details";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "aqua",
          }}
        >
          WELCOME TO REDUX TUTORIAL
        </h1>
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
