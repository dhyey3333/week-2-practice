function Dashboard({ employees, projects }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <h1>Welcome back, Dhyey 👋</h1>
        <p>
          <span className="pulse-dot" />
          Frontend Development Intern · Digizura Technologies
        </p>
        <p className="hero-date">{today}</p>
      </div>

      {/* Stat Cards */}
      <div className="cards">
        <div className="card">
          <p>Total Employees</p>
          <h1>{employees.length}</h1>
          <p className="card-sub">↑ 2 this month</p>
        </div>
        <div className="card cyan">
          <p>Active Projects</p>
          <h1>{projects.length}</h1>
          <p className="card-sub">3 on track</p>
        </div>
        <div className="card emerald">
          <p>Tasks Completed</p>
          <h1>320</h1>
          <p className="card-sub">↑ 18% growth</p>
        </div>
        <div className="card amber">
          <p>Revenue</p>
          <h1>₹2.5Cr</h1>
          <p className="card-sub">Q2 target met</p>
        </div>
      </div>

      {/* Announcements + Projects */}
      <div className="grid">
        <div className="glass">
          <div className="section-row">
            <span className="section-title">📢 Announcements</span>
            <span className="badge-sm">3 new</span>
          </div>
          <div className="annc-item">
            <div className="annc-dot" style={{ background: "#6366f1" }} />
            <div>
              <div className="annc-label">React Training</div>
              <div className="annc-time">Monday · 10:00 AM</div>
            </div>
          </div>
          <div className="annc-item">
            <div className="annc-dot" style={{ background: "#06b6d4" }} />
            <div>
              <div className="annc-label">Team Meeting</div>
              <div className="annc-time">Friday · 3:00 PM</div>
            </div>
          </div>
          <div className="annc-item">
            <div className="annc-dot" style={{ background: "#f59e0b" }} />
            <div>
              <div className="annc-label">Bootstrap Workshop</div>
              <div className="annc-time">Next Week</div>
            </div>
          </div>
        </div>

        <div className="glass">
          <div className="section-row">
            <span className="section-title">📁 Project Progress</span>
            <span className="section-sub">{projects.length} active</span>
          </div>
          {projects.map((project) => (
            <div key={project.id}>
              <div className="progress-row">
                <span className="progress-name">{project.name}</span>
                <span className="progress-pct">{project.progress}%</span>
              </div>
              <div className="progress">
                <div
                  className={`progress-bar ${project.progress === 100 ? "green" : ""}`}
                  style={{ width: project.progress + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid-equal" style={{ marginTop: "16px" }}>
        <div className="glass" style={{ textAlign: "center", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", color: "#64748b", textTransform: "uppercase", marginBottom: "12px" }}>📈 Growth</p>
          <h1 style={{ fontSize: "36px", fontWeight: 800, color: "#818cf8" }}>+18%</h1>
          <p style={{ fontSize: "11px", color: "#475569", marginTop: "4px" }}>vs last month</p>
        </div>
        <div className="glass" style={{ textAlign: "center", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", color: "#64748b", textTransform: "uppercase", marginBottom: "12px" }}>⭐ Performance</p>
          <h1 style={{ fontSize: "36px", fontWeight: 800, color: "#22d3ee" }}>92%</h1>
          <p style={{ fontSize: "11px", color: "#475569", marginTop: "4px" }}>Team efficiency</p>
        </div>
        <div className="glass" style={{ textAlign: "center", padding: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", color: "#64748b", textTransform: "uppercase", marginBottom: "12px" }}>🎯 Goals</p>
          <h1 style={{ fontSize: "36px", fontWeight: 800, color: "#34d399" }}>14/20</h1>
          <p style={{ fontSize: "11px", color: "#475569", marginTop: "4px" }}>Monthly targets</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
