import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AgentDashboard } from "./pages/AgentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<AgentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
