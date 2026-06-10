import { useState } from "react";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";

function App() {

  const [employees, setEmployees] = useState(120);
  const [projects, setProjects] = useState(15);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a)",
        color: "white"
      }}
    >

      <Navbar />

      <div style={{ padding: "40px" }}>

        <h1>🚀 Digizura Employee Portal</h1>

        <p>
          Week 2 Day 3 - React State Management
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          <StatCard
            number={employees}
            title="Employees"
          />

          <StatCard
            number={projects}
            title="Projects"
          />

          <StatCard
            number="320"
            title="Tasks Completed"
          />

          <StatCard
            number="₹2.5 Cr"
            title="Revenue"
          />

        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => setEmployees(employees + 1)}
            style={btnGreen}
          >
            ➕ Add Employee
          </button>

          <button
            onClick={() => setEmployees(employees - 1)}
            style={btnRed}
          >
            ➖ Remove Employee
          </button>

          <button
            onClick={() => setProjects(projects + 1)}
            style={btnBlue}
          >
            📁 Add Project
          </button>

        </div>

        <div
          style={{
            marginTop: "40px",
            background:
              "rgba(255,255,255,0.12)",
            padding: "25px",
            borderRadius: "20px",
            backdropFilter: "blur(10px)"
          }}
        >

          <h2>📢 Live Dashboard Updates</h2>

          <p>
            Total Employees: {employees}
          </p>

          <p>
            Total Projects: {projects}
          </p>

        </div>

      </div>

    </div>
  );
}

const btnGreen = {
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer"
};

const btnRed = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer"
};

const btnBlue = {
  background: "#3b82f6",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer"
};

export default App;