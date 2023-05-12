import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function SocialMedia() {
  const [socialData, setSocialData] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/posts");
      if (status === 200) {
        setSocialData(data.posts);
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
      <h2>Social Media</h2>
      {socialData &&
        socialData?.map(({ caption, src, views, likes, category }) => (
          <div>
            <img src={src} alt={caption} />
            <p>
              <b>{caption}</b>
            </p>
            <p>
              <b>Likes:</b>
              {likes}
            </p>
            <p>
              <b>Views:</b>
              {views}
            </p>
          </div>
        ))}
      <div>
        {
          <button
            onClick={() =>
              setSocialData(
                socialData.filter(({ category }) => category === "Bakery")
              )
            }
          >
            Show Bakery
          </button>
        }
      </div>
    </div>
  );
}
