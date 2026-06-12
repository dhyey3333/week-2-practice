function Analytics() {
  const bars   = [60, 75, 55, 90, 70, 85, 92];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const maxH   = 80;

  return (
    <div>
      <div className="page-header">
        <div className="page-title">Analytics</div>
        <div className="page-breadcrumb">Performance insights</div>
      </div>

      <div className="cards">
        <div className="card">
          <p>Growth</p>
          <h1>75%</h1>
        </div>
        <div className="card cyan">
          <p>Performance</p>
          <h1>92%</h1>
        </div>
        <div className="card emerald">
          <p>Efficiency</p>
          <h1>88%</h1>
        </div>
        <div className="card amber">
          <p>Retention</p>
          <h1>96%</h1>
        </div>
      </div>

      <div className="glass">
        <div className="section-title" style={{ marginBottom: "4px" }}>Weekly Performance</div>
        <div style={{ fontSize: "11px", color: "#475569", marginBottom: "16px" }}>
          Team productivity this week
        </div>
        <div className="bar-group">
          {bars.map((v, i) => (
            <div
              key={i}
              className="bar"
              style={{ height: `${(v / 100) * maxH}px` }}
              title={`${labels[i]}: ${v}%`}
            />
          ))}
        </div>
        <div className="bar-labels">
          {labels.map((l) => (
            <div key={l} className="bar-label">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
