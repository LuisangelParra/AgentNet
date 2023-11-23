import { Routes, Route } from "react-router-dom";
import { AgentDashboard } from "./pages/AgentDashboard/AgentDashboard";
import {Authentication} from "./pages/Authentication/Authentication"
import React from "react";

function App() {
  return (
      <Routes>
        <Route path="/dashboard/*" element={<AgentDashboard />} />
        <Route path="/auth/*" element={<Authentication />} />
      </Routes>
  );
}

export default App;
