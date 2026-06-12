import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import Reports from "./components/Reports";
import Analytics from "./components/Analytics";
import Attendance from "./components/Attendance";
import Settings from "./components/Settings";

import "./App.css";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [page, setPage] = useState("dashboard");

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Smith", department: "Development", status: "Active" },
    { id: 2, name: "Sarah Johnson", department: "HR", status: "Active" },
    { id: 3, name: "Marcus Lee", department: "Sales", status: "Active" },
    { id: 4, name: "Priya Mehta", department: "Marketing", status: "Leave" }
  ]);

  const [projects] = useState([
    { id: 1, name: "Employee Portal", progress: 90 },
    { id: 2, name: "CRM Dashboard", progress: 75 },
    { id: 3, name: "HR Portal", progress: 100 },
    { id: 4, name: "Mobile App", progress: 42 }
  ]);

  const addEmployee = (name, department) => {

    setEmployees(prev => [
      ...prev,
      {
        id: prev.length + 1,
        name,
        department,
        status: "Active"
      }
    ]);

  };

  const deleteEmployee = (id) => {

    setEmployees(
      prev =>
        prev.filter(
          emp => emp.id !== id
        )
    );

  };

  if (!loggedIn) {

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>DIGIZURA</h1>

        <p>
          Employee Management Portal
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "10px"
            }}
          >
            {error}
          </p>
        )}

        <button
  onClick={() => {

    const savedEmail =
      localStorage.getItem("userEmail");

    const savedPassword =
      localStorage.getItem("userPassword");

    if (!savedEmail || !savedPassword) {

      setError(
        "No account found. Please register first."
      );

      return;
    }

    if (
      email !== savedEmail ||
      password !== savedPassword
    ) {

      setError(
        "Invalid email or password"
      );

      return;
    }

    setError("");

    setLoggedIn(true);

  }}
>
  Login
</button>
<p
  className="login-link"
  onClick={() => {

    const newEmail =
      prompt("Enter Email");

    const newPassword =
      prompt("Create Password");

    if (
      newEmail &&
      newPassword
    ) {

      localStorage.setItem(
        "userEmail",
        newEmail
      );

      localStorage.setItem(
        "userPassword",
        newPassword
      );

      alert(
        "Account created successfully"
      );

    }

  }}
>
  Register New User
</p>
<p
  className="login-link"
  onClick={() => {

    const mail =
      prompt("Enter your email");

    const savedEmail =
      localStorage.getItem(
        "userEmail"
      );

    if (
      mail === savedEmail
    ) {

      alert(
        "Your password is: " +
        localStorage.getItem(
          "userPassword"
        )
      );

    } else {

      alert(
        "Email not found"
      );

    }

  }}
>
  Forgot Password?
</p>

      </div>

    </div>

  );

}
  return (

    <div className="app-wrapper">

      <Navbar
        setLoggedIn={setLoggedIn}
        setPage={setPage}
      />

      <div className="main-layout">

        <Sidebar
          page={page}
          setPage={setPage}
        />

        <div className="content">

          {page === "dashboard" && (
            <Dashboard
              employees={employees}
              projects={projects}
            />
          )}

          {page === "employees" && (
            <Employees
              employees={employees}
              addEmployee={addEmployee}
              deleteEmployee={deleteEmployee}
            />
          )}

          {page === "projects" && (
            <Projects
              projects={projects}
            />
          )}

          {page === "reports" && (
            <Reports
              employees={employees}
              projects={projects}
            />
          )}

          {page === "analytics" && (
            <Analytics />
          )}

          {page === "attendance" && (
            <Attendance />
          )}

          {page === "settings" && (
            <Settings />
          )}

        </div>

      </div>

    </div>

  );

}

export default App;