import { useEffect } from "react";
import { useState } from "react";
import User from "./Info.jsx";

export default function GitProfileFinder() {
  const [userName, setUserName] = useState("NehaNaiduu");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGitUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }
  }

  function handleSubmit() {
    fetchGitUserData()
  }

  useEffect(() => {
    fetchGitUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="container">
      <div className="input-field">
        <input
          className="inputName"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit} className="submit">Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}