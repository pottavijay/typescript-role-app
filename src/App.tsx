import React from "react";
import { User } from "./types";

const user: User = {
  name: "Vijay",
  age: 16,
};

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hello, {user.name}</h1>
      <p>You are {user.age} years old.</p>
    </div>
  );
};

export default App;
