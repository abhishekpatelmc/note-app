import "./App.css";
import SideNav from "./components/common/sidebar/SideNav";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="full_content">
      <SideNav />
      <Home />
    </div>
  );
}

export default App;
