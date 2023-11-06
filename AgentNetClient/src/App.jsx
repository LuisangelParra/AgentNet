import { Routes, Route } from "react-router-dom";
import { AgentDashboard } from "./pages/AgentDashboard";

function App() {
  return (
      <Routes>
        <Route path="/dashboard/*" element={<AgentDashboard />} />
      </Routes>
  );
}

export default App;
