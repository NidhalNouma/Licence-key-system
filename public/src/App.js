import React, { useState } from "react";
import Login from "./views/Login"
import Dash from "./views/Dash"

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      {user ?
        <Dash user={user} setUser={setUser} /> :
        <Login setUser={setUser} />}
    </>
  );
}

export default App;
