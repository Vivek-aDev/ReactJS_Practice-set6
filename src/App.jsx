import "./styles.css";
import { Products } from "./1-Products/Products";
import { Todo } from "./2-Todo/Todo";
import { HabitTracker } from "./3-HabitTracker/HabitTracker";
import { Playlist } from "./4-Playlist/Playlist";
import { SocialMedia } from "./5-SocialMedia/SocialMedia";
import { Unarchived } from "./6-Unarchived/Unarchived";
import { Projects } from "./7-Projects/Projects";
import { Profiles } from "./8-Profiles/Profiles";
import { Video } from "./9-Video/Video";
import { SocialMediaProfile } from "./10-SocialMediaProfile/SocialMediaProfile";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>ReactJS Practice Question Set 6</h1>{" "}
      <hr />
      <Products />
      <hr />
      <Todo />
      <hr />
      <HabitTracker />
      <hr />
      <Playlist />
      <hr />
      <SocialMedia />
      <hr />
      <Unarchived />
      <hr />
      <Projects />
      <hr />
      <Profiles />
      <hr />
      <Video />
      <hr />
      <SocialMediaProfile />
    </div>
  );
}
