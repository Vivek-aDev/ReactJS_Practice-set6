import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Profiles() {
  const [userData, setUserData] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setUserData(data.profiles);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/profile");
  }, []);

  return (
    <div>
      <h2>Profiles</h2>
      {userData && (
        <div>
          <h2>Name: {userData.name}</h2>
          <p>
            <b>Email: </b>
            {userData.email}
          </p>
          <p>
            <b>Age: </b>
            {userData.age}
          </p>
          <p>
            <b>Gender: </b>
            {userData.gender}
          </p>
          <p>
            <b>Occupation: </b>
            {userData.occupation}
          </p>
          <button
            onClick={() =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                name: "Emily"
              }))
            }
          >
            Update Name
          </button>
        </div>
      )}
    </div>
  );
}
