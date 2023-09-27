import React from "react";
import { Info, LinkedIn } from "@mui/icons-material";
import { FiberManualRecord } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Widget = () => {
  const user = useSelector((state) => state.user.user);
  const newsArticle = (heading, subInfo) => (
    <div className="flex py-1">
      <FiberManualRecord sx={{ height: "15px", paddingTop: "6px" }} />
      <div className="text-sm">
        <h1 className="font-medium">{heading}</h1>
        <h2 className="text-xs text-gray-500">{subInfo}</h2>
      </div>
    </div>
  );

  return (
    <div className="hidden w-[26%] lg:flex flex-col gap-2">
      <div className="px-4 py-2 border rounded-lg bg-white w-full h-80">
        <div className="flex justify-between py-1">
          <h2 className="font-semibold">LinkedIn News</h2>
          <Info />
        </div>
        <div>
          {newsArticle("Call for freshers 2023", "Top News - 8,532 readers")}
          {newsArticle("How Student can get job ready", "Top News - 7,917 readers")}
          {newsArticle("More indians to study abroad", "Top News - 7,123 readers")}
          {newsArticle("React VS Angular VS Vue", "Top News - 6,104 readers")}
          {newsArticle("Is Java Outdated ? Can it give a comeback ?", "Top News - 4,730 readers")}
        </div>
        <button className="w-full mt-2 hover:bg-gray-200 p-2 flex justify-center gap-1 rounded-lg">
          <span>Show More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-5 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 py-4 border rounded-lg bg-white w-full h-[272px] sticky top-16 flex flex-col gap-2">
        <h1 className="text-sm text-center text-gray-600">
          Stay updated on jobs, tech and more with LinkedIn
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Avatar src={user.photoURL} sx={{ height: "74px", width: "74px" }}>
            {user.displayName[0]}
          </Avatar>
          <LinkedIn sx={{ height: "90px", width: "90px", color: "#0288D1" }} />
        </div>
        <h1 className="text-base text-center">
          Hitachi Social Innovation is POWERING GOOD
        </h1>
        <div className="flex justify-center">
          <button className="border-2 rounded-full px-5 py-1 border-[#0288D1] text-[#0288D1] font-semibold hover:bg-[#a0cae0]">
            Follow
          </button>
        </div>
      </div>
    </div> 
  );
};

export default Widget;
