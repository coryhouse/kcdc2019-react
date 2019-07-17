import React, { useState } from "react";

function App() {
  const [sessions, setSessions] = useState(["React", "C#", "Python"]);

  function renderSession(session) {
    return <li key={session}>{session}</li>;
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
