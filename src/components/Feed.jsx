import { Avatar } from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import db from "./Firebase";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((state) => state.user.user);
  const [feedInput, setFeedInput] = useState("");
  const [posts, setPosts] = useState([]);

  // firebase code for getting POST data's from firestore(CLOUD BACKEND)
  const postCollectionRef = collection(db, "posts");
  const postQuery = query(postCollectionRef, orderBy("timestamp", "desc"));

  const getPostsData = async () => {
    const data = await getDocs(postQuery);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPosts(filteredData);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    await addDoc(postCollectionRef, {
      user_name: user.displayName,
      description: user.email,
      message: feedInput,
      photoURL: user.photoURL || "",
      timestamp: serverTimestamp(),
    });
    setFeedInput("");
    getPostsData();
  };

  return (
    <div className="w-full  md:w-[66%] lg:w-[50%]">
      <div className="px-4 py-2 border md:rounded-lg bg-white">
        <div className="flex gap-3 pt-1">
          <Avatar sx={{ width: "50px", height: "50px" }} src={user.photoURL}>
            {user.displayName[0]}
          </Avatar>
          <form
            className="border border-gray-400 rounded-full w-full"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              name="feedInput"
              id="feedInput"
              className="w-full h-full rounded-full px-5 border placeholder:text-gray-500 outline-none"
              placeholder="Start a post"
              value={feedInput}
              onChange={(event) => setFeedInput(event.target.value)}
            />
          </form>
        </div>
        <div className="flex md:px-10 pt-2 justify-between">
          <FeedOption Icon={ImageSearchIcon} title="Media" color="#378FE9" />
          <FeedOption Icon={CalendarMonthIcon} title="Event" color="#C37D16" />
          <FeedOption
            Icon={NewspaperIcon}
            title="Write article"
            color="#E06847"
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-1">
        <hr className="border-gray-400 w-full" />
        <h2 className="text-xs w-[30%] md:w-[25%] text-gray-500 flex items-center justify-end ">
          <span>
            Sort by: <b>Date</b>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-4 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {posts.map(
          ({ id, user_name, description, message, photoURL, timestamp }) => (
            <FeedPost
              key={id}
              name={user_name}
              description={description}
              message={message}
              photoURL={photoURL}
              timestamp={timestamp}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;

export const FeedOption = ({ Icon, title, color }) => {
  return (
    <div className="flex gap-3 hover:bg-gray-200 px-2 py-3 rounded-md cursor-pointer">
      <Icon sx={{ color: color }} />
      <h1 className="text-gray-500 -ml-1 max-sm:text-sm font-medium my-auto">
        {title}
      </h1>
    </div>
  );
};
