import Navigation from "./navigation";
import Assignment3 from "./labs/a3/index";
import Assignment4 from "./labs/a4/index";
import Assignment5 from "./labs/a5/index";
import Add from "./labs/a3/add";
import Kanbas from "./Kanbas/index";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/navigation" />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/labs/a3/*" element={<Assignment3 />} />
          <Route path="/labs/a3/add/:a/:b" element={<Add />} />
          <Route path="/labs/a4/*" element={<Assignment4 />} />
          <Route path="/labs/a5/*" element={<Assignment5 />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;