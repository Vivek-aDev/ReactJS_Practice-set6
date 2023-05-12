import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function SocialMediaProfile() {
  const [profileDetails, setProfileDetails] = useState([]);
  const [followCount, setFollowCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProfileDetails(data.profile);
        setFollowCount(data.profile.followers);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/profile");
  }, []);

  const { name, age, gender, email, occupation, followedBy } = profileDetails;

  return (
    <div>
      <h2>Social Media</h2>
      <div>
        <h3>{name}</h3>
        <p>
          <b>Age:</b>
          {age}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Email: </b>
          {email}
        </p>
        <p>
          <b>Occupation: </b>
          {occupation}
        </p>
        <p>
          <b>Followers: </b>
          {followCount}
        </p>
        <p>
          <b>FollowedBy</b>
          {followedBy}
        </p>
      </div>
      <button
        onClick={() => {
          setFollowCount(followCount + 1);
          setDisabled(true);
        }}
        disabled={disabled}
      >
        follow {name}
      </button>
    </div>
  );
}
