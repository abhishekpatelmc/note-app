import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [todoVisible, setTodoVisible] = useState(false);
  const [inporgressVisible, setInprogressVisible] = useState(false);
  const [doneVisbile, setDoneVisible] = useState(false);

  return (
    <div className="home_full">
      <h1>Note</h1>
      <div className="homeList">
        <div className="homeList_item">
          <button onClick={() => setTodoVisible(!todoVisible)}>Todo</button>
          {todoVisible && (
            <div className="homeList_item_details">To do list</div>
          )}
        </div>

        <div className="homeList_item">
          <button onClick={() => setInprogressVisible(!inporgressVisible)}>
            In Progress
          </button>
          {inporgressVisible && (
            <div className="homeList_item_details">In Progress</div>
          )}
        </div>
        <div className="homeList_item">
          <button onClick={() => setDoneVisible(!doneVisbile)}>Done</button>
          {doneVisbile && <div className="homeList_item_details">Done</div>}
        </div>
      </div>
      <div className="test">Hello</div>
      <div className="test">Hello</div>
      <div className="test">Hello</div>
    </div>
  );
};

export default Home;
