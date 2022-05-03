import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchTalentsResults from "./pages/SearchTalentsResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/searchTalentsResults"
            element={<SearchTalentsResults />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
