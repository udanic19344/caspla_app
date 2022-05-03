import "./App.css";
import Home from "./pages/Home";
import SearchTalentsResults from "./pages/SearchTalentsResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
