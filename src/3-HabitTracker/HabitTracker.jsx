import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function HabitTracker() {
  const [habitsData, setHabitData] = useState([]);
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setHabitData(data.habits);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Habit Tracker</h2>
      <ul>
        {habitsData &&
          habitsData?.map(({ title, desc, daysFollowed, daysSkipped }) => (
            <li>
              <h3>{title}:</h3>
              <p>{desc}</p>
              <p>
                <b>Days Followed:</b>
                {daysFollowed}
              </p>
              <p>
                <b>Days Skipped:</b>
                {daysSkipped}
              </p>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
}
