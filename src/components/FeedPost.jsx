import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";

const FeedPost = ({ name, description, message, photoURL, timestamp }) => {
  const [showMore, setShowMore] = useState(message.length > 200 ? true : false);
  const showMoreHandler = () => {
    setShowMore((prevState) => !prevState);
  };
  return (
    <div>
      <div className="px-4 pt-4 border md:rounded-lg bg-white flex flex-col space-y-3">
        <div className="flex gap-2 ">
          <Avatar src={photoURL} sx={{ height: "53px", width: "53px" }}>
            {name[0]}
          </Avatar>
          <div className="text-xs">
            <h1 className="font-medium text-sm">{name}</h1>
            <h2>{description}</h2>
            <h3>{new Date(timestamp.seconds * 1000).toDateString()}</h3>
          </div>
        </div>
        <div className="overflow-clip">
          <span>{showMore ? `${message.slice(0, 200)}...` : message}</span>{" "}
          {message.length > 200 && (
            <button
              onClick={showMoreHandler}
              className={
                showMore
                  ? "text-gray-500 text-sm hover:text-blue-500 hover:underline"
                  : "text-gray-500 text-sm hover:text-blue-500 hover:underline flex ml-auto"
              }
            >
              {showMore ? "show more" : "show less"}
            </button>
          )}
        </div>
        <div className="flex justify-around px-5 border-t py-[2px]">
          <FeedInpOption
            Icon={ThumbUpOffAltIcon}
            title="Like"
            color="#666666"
          />
          <FeedInpOption Icon={CommentIcon} title="Comment" color="#666666" />
          <FeedInpOption Icon={RepeatIcon} title="Repost" color="#666666" />
          <FeedInpOption Icon={SendIcon} title="Sent" color="#666666" />
        </div>
      </div>
    </div>
  );
};

export default FeedPost;

const FeedInpOption = ({ Icon, title, color }) => {
  return (
    <div className="flex gap-3 hover:bg-gray-200 px-2 py-3 rounded-md cursor-pointer">
      <Icon sx={{ color: color }} />
      <h1 className="text-gray-500 -ml-1 font-medium my-auto max-sm:hidden">
        {title}
      </h1>
    </div>
  );
};
