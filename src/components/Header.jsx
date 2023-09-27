import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import { auth } from "../components/Firebase";

function Header() {
  const [userPopUp, setuserPopUp] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    setuserPopUp((prevState) => !prevState);
    dispatch(userActions.logout());
    auth.signOut();
  };

  return (
    <>
      <div className="border sticky top-0 z-50 bg-white flex py-[2px] justify-evenly md:justify-around w-full">
        <div className="flex items-center max-sm:w-1/5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 mr-1">
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
          <div className="sm:block md:hidden h-full flex items-center">
          <SearchIcon />
          </div>
          <div className="hidden w-[50%] lg:w-fit md:flex items-center h-9 -ml-64 p-3 bg-[#EDF3F8] rounded space-x-3">
            <SearchIcon />
            <input
              type="search"
              name=""
              id=""
              className="outline-none bg-transparent"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-5 ">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            onClick={() => setuserPopUp((prevState) => !prevState)}
            avatar={true}
            title="Me"
          />
        </div>
      </div>
      {userPopUp && (
        <div className="absolute bg-white p-3 rounded border w-1/6 left-[72%] my-1">
          <button onClick={logoutHandler} className="w-full">
            Sign Out
          </button>
        </div>
      )}
    </>
  );
}

export default Header;

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector((state) => state.user.user); 
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center text-[#666666] hover:text-black"
    >
      {Icon && <Icon />}
      {avatar && (
        <Avatar
          sx={{
            width: "24px",
            height: "24px",
            marginTop: "5px",
            marginBottom: "-3px",
          }}
          src={user?.photoURL}
        >{user?.displayName[0]}</Avatar>
      )}
      <h1 className="hidden lg:block text-sm">
        <span>{title}</span>
        {avatar && (
          <span className="-ml-1">
            <ArrowDropDownIcon />
          </span>
        )}
      </h1>
    </div>
  );
};
