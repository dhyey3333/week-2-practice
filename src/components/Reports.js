function Reports({ employees, projects }) {
  const departments = ["Development", "HR", "Sales", "Marketing"];

  return (
    <div>
      <div className="page-header">
        <div className="page-title">Reports</div>
        <div className="page-breadcrumb">Summary overview</div>
      </div>

      <div className="cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="card">
          <p>Total Employees</p>
          <h1>{employees.length}</h1>
          <p className="card-sub">Across all departments</p>
        </div>
        <div className="card cyan">
          <p>Projects</p>
          <h1>{projects.length}</h1>
          <p className="card-sub">{projects.filter((p) => p.progress === 100).length} completed</p>
        </div>
        <div className="card emerald">
          <p>Attendance</p>
          <h1>98%</h1>
          <p className="card-sub">This month</p>
        </div>
      </div>

      <div className="glass" style={{ marginTop: "16px" }}>
        <div className="section-title" style={{ marginBottom: "14px" }}>Department Breakdown</div>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Headcount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept}>
                <td style={{ fontWeight: 500 }}>{dept}</td>
                <td>{employees.filter((e) => e.department === dept).length}</td>
                <td><span className="badge active">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;
