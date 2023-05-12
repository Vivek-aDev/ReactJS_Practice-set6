import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Unarchived() {
  const [habits, setHabits] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setHabits(data.habits);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredHabits = habits.filter(({ archived }) =>
    showArchived ? archived : Unarchived
  );

  return (
    <div>
      <h2>{showArchived ? "Archived" : "Unarchived"}</h2>
      {filteredHabits.map(({ title, desc, daysFollowed, daysSkipped }) => (
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>
            <b>daysFollowed:</b> {daysFollowed}
          </p>
          <p>
            <b>daysSkipped:</b> {daysSkipped}
          </p>
          <hr />
        </div>
      ))}
      <button onClick={() => setShowArchived(!showArchived)}>
        {showArchived ? "Show Unarchived" : "Show Archived"}
      </button>
    </div>
  );
}
