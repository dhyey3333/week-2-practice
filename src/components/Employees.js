import { useState } from "react";

function Employees({ employees, addEmployee, deleteEmployee }) {
  const [name,       setName]       = useState("");
  const [department, setDepartment] = useState("");
  const [search,     setSearch]     = useState("");

  const handleAdd = () => {
    if (!name || !department) { alert("Please fill all fields"); return; }
    addEmployee(name, department);
    setName("");
    setDepartment("");
  };

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="page-header">
        <div className="page-title">Employees</div>
        <div className="page-breadcrumb">Manage your team members</div>
      </div>

      <div className="grid">
        {/* Add form */}
        <div className="glass">
          <div className="section-title" style={{ marginBottom: "14px" }}>Add Employee</div>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select department</option>
            <option>Development</option>
            <option>HR</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>
          <button onClick={handleAdd} style={{ width: "100%", marginTop: "4px" }}>
            + Add Employee
          </button>
        </div>

        {/* Table */}
        <div className="glass">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              placeholder="Search employees…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ marginBottom: 0 }}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan="5" style={{ textAlign: "center", padding: "24px", color: "#475569" }}>No employees found</td></tr>
              )}
              {filtered.map((emp) => (
                <tr key={emp.id}>
                  <td style={{ color: "#475569" }}>{emp.id}</td>
                  <td style={{ fontWeight: 500, color: "#e2e8f0" }}>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>
                    <span className={`badge ${emp.status === "Active" ? "active" : "leave"}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn-danger btn-sm"
                      onClick={() => deleteEmployee(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
