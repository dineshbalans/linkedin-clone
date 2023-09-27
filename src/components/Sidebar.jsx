import { Avatar } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <section className="flex flex-col w-full md:w-[32%] lg:w-[21%] space-y-2">
      <section className="bg-white  rounded-lg border">
        <div className="flex flex-col items-center text-xs border-b gap-2 pb-3">
          <img
            src="https://media.licdn.com/dms/image/D5616AQERaUUiW4V5cQ/profile-displaybackgroundimage-shrink_350_1400/0/1677848025824?e=1701302400&v=beta&t=YAHzoQE6wwUakQAC7DDEKcjz8cuNmq-h87VraQ47mOg"
            alt=""
            className="md:rounded-t-lg -mb-10 object-fill"
          />
          <Avatar
            sx={{ height: "74px", width: "74px", border: "2px solid white" }}
            src={user?.photoURL}
          >
            {user.displayName[0]}
          </Avatar>
          <div className="px-2 text-center">
            <h2 className="text-sm font-semibold hover:underline cursor-pointer">
              {user?.displayName}
            </h2>
            <h3 className="text-gray-500">{user?.email}</h3>
          </div>
        </div>
        <div className="text-xs text-gray-500 font-medium py-2">
          <div className="px-3 py-1 flex justify-between hover:bg-gray-200 cursor-pointer">
            <h2>Who's viewed your profile</h2>
            <h4 className="text-blue-500">19</h4>
          </div>
          <div className="px-3 py-1 flex justify-between hover:bg-gray-200 cursor-pointer">
            <h2>Connections</h2>
            <h4 className="text-blue-500">107</h4>
          </div>
        </div>
      </section>
      <section className="bg-white  rounded-lg border text-xs pt-3 max-sm:hidden">
        <div className="flex flex-col gap-2">
          <h2 className="px-[13px]">Recent</h2>
          <div className="flex space-x-2 hover:bg-gray-200 cursor-pointer px-[13px]">
            <GroupsIcon />
            <h2 className="text-xs  text-gray-500">
              React JS & React Native Developer
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-5">
          <h2 className="text-[#307ECC] font-medium px-[13px] hover:underline cursor-pointer">
            Groups
          </h2>
          <div className="flex space-x-2 px-[13px] hover:bg-gray-200 cursor-pointer">
            <GroupsIcon />
            <h2 className="text-xs text-gray-500">
              React JS & React Native Developer
            </h2>
          </div>
        </div>
        <div className="text-[#307ECC] font-medium flex flex-col gap-2 p-[13px]">
          <h2 className="flex justify-between">
            <span className="hover:underline cursor-pointer">Events</span>
            <AddIcon sx={{ color: "black", height: "19px" }} />
          </h2>
          <h2 className="hover:underline cursor-pointer">Followed Hashtags</h2>
        </div>
        <div className="text-center font-semibold text-sm text-gray-500 border-t p-3 cursor-pointer hover:bg-gray-200 rounded-b-lg">
          Discover More
        </div>
      </section>
    </section>
  );
};

export default Sidebar;
