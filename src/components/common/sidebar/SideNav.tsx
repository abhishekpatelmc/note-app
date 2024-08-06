import { useState } from "react";
import "./SideNav.css";
import HomeIcon from "../../../assets/icons/HomeIcon";
import ProfileIcon from "../../../assets/icons/ProfileIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import RightIcon from "../../../assets/icons/RightIcon";
import LeftIcon from "../../../assets/icons/LeftIcon";

const sideNavItems = [
  { index: 0, item: "Home", icon: <HomeIcon className="icon-style" /> },
  {
    index: 1,
    item: "Profile",
    icon: <ProfileIcon className="icon-style" />,
  },
  {
    index: 2,
    item: "Settings",
    icon: <SettingsIcon className="icon-style" />,
  },
];

const SideNav = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const handleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <div className="sidenav">
      <div className="expand_button" onClick={() => handleSideNav()}>
        {!sideNavVisible ? (
          <RightIcon className="icon-style icon-backgrond" />
        ) : (
          <div className="company_name">
            <p className="company_name_text">Note App</p>
            <LeftIcon className="icon-style icon-backgrond" />
          </div>
        )}
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
            <div key={item.index} className="sidenav_list_item">
              {item.icon}
              {item.item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNav;
