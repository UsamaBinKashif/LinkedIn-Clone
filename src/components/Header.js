import React from "react";
import "./Header.css";
import LinkedinLogo from "./linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { auth } from "./firebase";
import { useDispatch} from "react-redux";
import { logout } from "../features/userSlice";
function Header() {
  const dispatch = useDispatch();
  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedinLogo} alt="linkedin-logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Title={"Home"} Icon={HomeIcon} />
        <HeaderOptions Title={"My Network"} Icon={PeopleIcon} />
        <HeaderOptions Title={"Jobs"} Icon={BusinessCenterIcon} />
        <HeaderOptions Title={"Messaging"} Icon={MessageIcon} />
        <HeaderOptions Title={"Notifications"} Icon={NotificationsIcon} />
        <HeaderOptions Title={"Log Out"} avatar={true} onClick={logOutApp} />
      </div>
    </div>
  );
}

export default Header;
