import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Video() {
  const [videoDetails, setVideoDetails] = useState([]);
  const [showLabel, setShowLabel] = useState(false);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setVideoDetails(data.videos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/getvideo");
  }, []);

  const { title, thumbnail, views, likes } = videoDetails;

  return (
    <div>
      <h2>Video</h2>
      <div>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>
          <b>Views: </b>
          {views} views
        </p>
        <p>
          <b>Likes: </b>
          {likes} likes
        </p>
        {showLabel && (
          <p>
            <b>Label: </b>Self Motivational
          </p>
        )}
      </div>
      <button onClick={() => setShowLabel(true)}>Label</button>
    </div>
  );
}
