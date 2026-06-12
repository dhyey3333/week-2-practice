function Attendance() {
  const departments = [
    { name: "Development", pct: 95  },
    { name: "HR",          pct: 100 },
    { name: "Sales",       pct: 88  },
    { name: "Marketing",   pct: 92  },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="page-title">Attendance</div>
        <div className="page-breadcrumb">Today's overview</div>
      </div>

      <div className="cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="card emerald">
          <p>Present</p>
          <h1>98</h1>
          <p className="card-sub">86% of team</p>
        </div>
        <div className="card red">
          <p>Absent</p>
          <h1>12</h1>
          <p className="card-sub">10% of team</p>
        </div>
        <div className="card amber">
          <p>Late</p>
          <h1>5</h1>
          <p className="card-sub">4% of team</p>
        </div>
      </div>

      <div className="glass" style={{ marginTop: "16px" }}>
        <div className="section-title" style={{ marginBottom: "14px" }}>Department Attendance</div>
        {departments.map((d) => (
          <div key={d.name}>
            <div className="progress-row">
              <span className="progress-name">{d.name}</span>
              <span className="progress-pct">{d.pct}%</span>
            </div>
            <div className="progress">
              <div
                className={`progress-bar ${d.pct === 100 ? "green" : ""}`}
                style={{ width: `${d.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
