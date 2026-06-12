import { useState } from "react";

function Settings() {
  const [toggles, setToggles] = useState({
    darkMode:      true,
    notifications: true,
    twoFactor:     false,
  });

  const flip = (key) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div>
      <div className="page-header">
        <div className="page-title">Settings</div>
        <div className="page-breadcrumb">Manage your preferences</div>
      </div>

      {/* Profile */}
      <div className="settings-panel">
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#e2e8f0", marginBottom: "12px" }}>Profile</div>
        <div className="settings-row">
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#e2e8f0" }}>Full Name</div>
            <div style={{ fontSize: "11px", color: "#475569" }}>Dhyey Ghoda</div>
          </div>
          <button style={{ padding: "6px 14px", fontSize: "11px" }}>Edit</button>
        </div>
        <div className="settings-row">
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#e2e8f0" }}>Role</div>
            <div style={{ fontSize: "11px", color: "#475569" }}>Frontend Development Intern</div>
          </div>
        </div>
        <div className="settings-row">
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#e2e8f0" }}>Company</div>
            <div style={{ fontSize: "11px", color: "#475569" }}>Digizura Technologies</div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="settings-panel">
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#e2e8f0", marginBottom: "12px" }}>Preferences</div>

        <div className="settings-row">
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#e2e8f0" }}>Dark Mode</div>
            <div style={{ fontSize: "11px", color: "#475569" }}>Use dark theme</div>
          </div>
          <div className={`toggle ${toggles.darkMode ? "on" : ""}`} onClick={() => flip("darkMode")} />
        </div>

        <div className="settings-row">
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#e2e8f0" }}>Notifications</div>
            <div style={{ fontSize: "11px", color: "#475569" }}>Push alerts for updates</div>
          </div>
          <div className={`toggle ${toggles.notifications ? "on" : ""}`} onClick={() => flip("notifications")} />
        </div>

        <div className="settings-row">
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#e2e8f0" }}>Two-Factor Auth</div>
            <div style={{ fontSize: "11px", color: "#475569" }}>Extra login security</div>
          </div>
          <div className={`toggle ${toggles.twoFactor ? "on" : ""}`} onClick={() => flip("twoFactor")} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
