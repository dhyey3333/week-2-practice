function Projects({ projects }) {
  const statusColor = (progress) => {
    if (progress === 100) return "#34d399";
    if (progress >= 70)   return "#818cf8";
    return "#fbbf24";
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-title">Projects</div>
        <div className="page-breadcrumb">Track all ongoing work</div>
      </div>

      <div className="grid-2col">
        {projects.map((project) => (
          <div key={project.id} className="glass">
            <div className="section-row">
              <span className="section-title">{project.name}</span>
              <span className="badge-sm">{project.progress === 100 ? "Done" : "Active"}</span>
            </div>
            <div style={{ fontSize: "11px", color: "#475569", marginBottom: "10px" }}>
              Progress: {project.progress}%
            </div>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className={`progress-bar ${project.progress === 100 ? "green" : ""}`}
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <span style={{ fontSize: "11px", color: "#475569" }}>Started Jan 2025</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: statusColor(project.progress) }}>
                {project.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
