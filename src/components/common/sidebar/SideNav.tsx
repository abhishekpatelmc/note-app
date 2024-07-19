import { useState } from "react";
import "./SideNav.css";
import HomeIcon from "../../../assets/icons/HomeIcon";
import ProfileIcon from "../../../assets/icons/ProfileIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import RightIcon from "../../../assets/icons/RightIcon";
import LeftIcon from "../../../assets/icons/LeftIcon";

const sideNavItems = [
  { index: 0, item: "Home", icon: <HomeIcon /> },
  {
    index: 1,
    item: "Profile",
    icon: <ProfileIcon />,
  },
  {
    index: 2,
    item: "Settings",
    icon: <SettingsIcon />,
  },
];

const SideNav = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const handleSideNav = () => {
    // console.log(sideNavVisible);
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <div className="sidenav">
      <div onClick={() => handleSideNav()}>
        {!sideNavVisible ? <RightIcon /> : <LeftIcon />}
      </div>

      {!sideNavVisible && (
        <div className="sidenav_list_collapsed">
          {sideNavItems.map((item) => (
            <div>{item.icon}</div>
          ))}
        </div>
      )}

      {sideNavVisible && (
        <div className="sidenav_list_full">
          {sideNavItems.map((item) => (
            <button key={item.index} className="sidenav_list_item">
              {item.icon}
              {item.item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNav;
