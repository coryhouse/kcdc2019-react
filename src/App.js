import React, { useState } from "react";

function App() {
  const [sessions, setSessions] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "C#" },
    { id: 3, title: "Python" }
  ]);

  function deleteSession(id) {
    const newSessions = sessions.filter(session => session.id !== id);
    setSessions(newSessions);
  }

  function renderSession(session) {
    return (
      <li key={session.id}>
        <button onClick={() => deleteSession(session.id)}>Delete</button>{" "}
        {session.title}
      </li>
    );
  }

  // what I return here gets rendered.
  return (
    <>
      <h1>KCDC Sessions</h1>
      <ul>{sessions.map(renderSession)}</ul>
    </>
  );
}

export default App;
