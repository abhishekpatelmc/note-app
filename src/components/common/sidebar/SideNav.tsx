import "./SideNav.css";

const sideNavItems = ["Profile", "Home", "Settings"];

const SideNav = () => {
  return (
    <div className="sidenav">
      <ul className="sidenav_list">
        {sideNavItems.map((item, index) => (
          <li key={index} className="bottomBorder">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
