import { useState, useEffect, useRef } from "react";

const NOTIFICATIONS = [
  {
    id: 1,
    title: "React Training scheduled",
    desc: "Monday at 10:00 AM in Hall B",
    time: "2 min ago",
    unread: true
  },
  {
    id: 2,
    title: "New employee added",
    desc: "Marcus Lee joined Sales team",
    time: "1 hr ago",
    unread: true
  },
  {
    id: 3,
    title: "Project milestone reached",
    desc: "HR Portal is now 100% complete",
    time: "3 hrs ago",
    unread: true
  }
];

function Navbar({
  setLoggedIn,
  setPage
}) {

  const today =
    new Date().toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );

  const [notifOpen, setNotifOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [notifs, setNotifs] =
    useState(NOTIFICATIONS);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount =
    notifs.filter(
      (n) => n.unread
    ).length;

  useEffect(() => {

    const handler = (e) => {

      if (
        notifRef.current &&
        !notifRef.current.contains(
          e.target
        )
      ) {
        setNotifOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(
          e.target
        )
      ) {
        setProfileOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );

  }, []);

  const markAllRead = () => {

    setNotifs(
      notifs.map((n) => ({
        ...n,
        unread: false
      }))
    );

  };

  return (

    <div className="navbar">

      <div className="navbar-brand">

        <div className="navbar-logo">
          DZ
        </div>

        <span className="navbar-name">
          DIGIZURA
        </span>

      </div>

      <div className="navbar-right">

        <span className="navbar-date">
          {today}
        </span>

        <div
          className="navbar-actions"
        >

          <div
            className="notif-wrap"
            ref={notifRef}
          >

            <div
              className="navbar-notif"
              onClick={() =>
                setNotifOpen(
                  !notifOpen
                )
              }
            >

              🔔

              {unreadCount > 0 && (

                <div className="notif-badge">

                  {unreadCount}

                </div>

              )}

            </div>

            {notifOpen && (

              <div className="notif-dropdown">

                <div className="notif-header">

                  <span>
                    Notifications
                  </span>

                  <span
                    className="notif-clear"
                    onClick={
                      markAllRead
                    }
                  >
                    Mark all read
                  </span>

                </div>

                {notifs.map((n) => (

                  <div
                    key={n.id}
                    className="notif-item"
                  >

                    <div className="notif-title">
                      {n.title}
                    </div>

                    <div className="notif-desc">
                      {n.desc}
                    </div>

                    <div className="notif-time">
                      {n.time}
                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

          <div
            className="profile-wrap"
            ref={profileRef}
          >

            <div
              className="navbar-avatar"
              onClick={() =>
                setProfileOpen(
                  !profileOpen
                )
              }
            >

              DG

            </div>

            {profileOpen && (

              <div className="profile-dropdown">

                <div className="profile-header">

                  <div className="profile-avatar">

                    DG

                  </div>

                  <h3>
                    Dhyey Ghoda
                  </h3>

                  <p>
                    Frontend Intern
                  </p>

                </div>

                <div
  className="profile-item"
  onClick={() => setPage("dashboard")}
>
  👤 My Profile
</div>

<div
  className="profile-item"
  onClick={() => setPage("attendance")}
>
  📅 Attendance
</div>

<div
  className="profile-item"
  onClick={() => setPage("analytics")}
>
  📊 Analytics
</div>

<div
  className="profile-item"
  onClick={() => setPage("projects")}
>
  📁 Projects
</div>

<div
  className="profile-item"
  onClick={() => setPage("settings")}
>
  ⚙ Settings
</div>

<div
  className="profile-item"
  onClick={() =>
    document.body.classList.toggle("light-theme")
  }
>
  🌙 Dark Mode
</div>

<div
  className="profile-item logout"
  onClick={() => {
    setLoggedIn(false);
    setProfileOpen(false);
  }}
>
  🚪 Logout
</div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;