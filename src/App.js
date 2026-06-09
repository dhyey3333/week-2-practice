import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";

function App() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a)",
        color: "white",
        paddingBottom: "50px"
      }}
    >

      <Navbar />

      <div style={{ padding: "40px" }}>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold"
          }}
        >
          🚀 Digizura Dashboard
        </h1>

        <p
          style={{
            opacity: 0.8,
            fontSize: "18px"
          }}
        >
          Welcome back Dhyey 👋
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >

          <StatCard
            number="120"
            title="Employees"
          />

          <StatCard
            number="15"
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
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "40px"
          }}
        >

          <div
            style={{
              background:
                "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "20px"
            }}
          >

            <h2>📊 Project Progress</h2>

            <p>Employee Portal</p>

            <progress
              value="90"
              max="100"
              style={{ width: "100%" }}
            />

            <p className="mt-3">
              React Dashboard
            </p>

            <progress
              value="75"
              max="100"
              style={{ width: "100%" }}
            />

          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "20px"
            }}
          >

            <h2>📢 Updates</h2>

            <ul>
              <li>React Training</li>
              <li>Git Workshop</li>
              <li>Bootstrap Session</li>
            </ul>

          </div>

        </div>

      </div>

    </div>

  );
}

export default App;