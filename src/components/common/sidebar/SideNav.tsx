import "./SideNav.css";

const sideNavItems = ["Profile", "Home", "Settings"];

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav_list">
        {sideNavItems.map((item, index) => (
          <button key={index} className="bottomBorder">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
