import "./Feed.css";
import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArticleIcon from "@mui/icons-material/Article";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Flip from "react-flip-animate";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    document.querySelector("input").defaultValue = "";
  };

  return (
    <div className="feed">
      <div className="feed__container">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__container--options">
          <InputOptions
            Title={"Photo"}
            Icon={AddPhotoAlternateOutlinedIcon}
            color={"green"}
          />
          <InputOptions
            Title={"Video"}
            Icon={OndemandVideoIcon}
            color={"blue"}
          />
          <InputOptions
            Title={"Event"}
            Icon={EventAvailableIcon}
            color={"orange"}
          />
          <InputOptions
            Title={"Write an article"}
            Icon={ArticleIcon}
            color={"red"}
          />
        </div>
      </div>
      <Flip speed={1000}>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </Flip>
    </div>
  );
}

export default Feed;
