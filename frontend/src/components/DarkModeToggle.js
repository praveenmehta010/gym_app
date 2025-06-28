import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} style={{ position: 'absolute', top: 10, right: 10 }}>
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;

