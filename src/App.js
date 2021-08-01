import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await fetch.json();
    console.log(response, tours);
  };

  useEffect(()=>{})

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <h2>
      <Tours />
    </h2>
  );
}

export default App;
