import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Playlist() {
  const [videoData, setVideoData] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/videos"
      );
      if (status === 200) {
        setVideoData(data.videos);
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
      <h2>Playlist</h2>
      {videoData &&
        videoData?.map(({ title, thumbnail, views, likes }) => (
          <div>
            <img src={thumbnail} alt="" />
            <h3>{title}</h3>
            <p>
              <b>Likes: </b>
              {likes}
            </p>
            <p>
              <b>Views:</b>
              {views}
            </p>
          </div>
        ))}
      <button
        onClick={() => {
          const [, ...videoarray] = videoData;
          setVideoData(videoarray);
        }}
      >
        Delete first video
      </button>
    </div>
  );
}
