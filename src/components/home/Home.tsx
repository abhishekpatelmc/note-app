import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Note</h1>

      <div className="homeList">
        <button>Todo</button>
        <button>In Progress</button>
        <button>Done</button>
      </div>
    </div>
  );
};

export default Home;
