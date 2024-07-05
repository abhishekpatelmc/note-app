import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Note</h1>
      <div className="homeList">
        <button className="homeList_item">Todo</button>
        <button className="homeList_item">In Progress</button>
        <button className="homeList_item">Done</button>
      </div>
    </div>
  );
};

export default Home;
