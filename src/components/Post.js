import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Title={"Like"} Icon={ThumbUpIcon} color={"gray"} />
        <InputOptions Title={"Comment"} Icon={CommentIcon} color={"gray"} />
        <InputOptions Title={"Share"} Icon={ShareIcon} color={"gray"} />
        <InputOptions Title={"Send"} Icon={SendIcon} color={"gray"} />
      </div>
    </div>
  );
}

export default Post;
