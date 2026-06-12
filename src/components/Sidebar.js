function Sidebar({ page, setPage }) {
  const menus = [
    { id: "dashboard",  icon: "🏠", label: "Dashboard"  },
    { id: "employees",  icon: "👥", label: "Employees"  },
    { id: "projects",   icon: "📁", label: "Projects"   },
    { id: "reports",    icon: "📊", label: "Reports"    },
    { id: "analytics",  icon: "📈", label: "Analytics"  },
    { id: "attendance", icon: "📅", label: "Attendance" },
    { id: "settings",   icon: "⚙️", label: "Settings"   },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-section">Navigation</div>
      {menus.map((menu) => (
        <div
          key={menu.id}
          className={`menu-item ${page === menu.id ? "active-menu" : ""}`}
          onClick={() => setPage(menu.id)}
        >
          <span className="menu-icon">{menu.icon}</span>
          {menu.label}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
