import { FC, useState } from "react";
import "./Home.css";

interface todoProp {
  index: number;
  name: string;
  status: string;
}

const todos: todoProp[] = [
  {
    index: 0,
    name: "First Task",
    status: "NT",
  },
  {
    index: 1,
    name: "Second Task",
    status: "NT",
  },
  {
    index: 2,
    name: "Third Task",
    status: "D",
  },
  {
    index: 3,
    name: "Forth Task",
    status: "IP",
  },
];

const Home: FC = () => {
  const [todoVisible, setTodoVisible] = useState(false);
  const [inporgressVisible, setInprogressVisible] = useState(false);
  const [doneVisbile, setDoneVisible] = useState(false);

  return (
    <div className="home_full">
      <h1>Note</h1>
      <div className="homeList">
        <div className="homeList_item">
          <button onClick={() => setTodoVisible(!todoVisible)}>Todo</button>
          {todoVisible &&
            todos
              .filter((todo) => todo.status === "NT")
              .map((todo) => (
                <div className="homeList_item_details">{todo.name}</div>
              ))}
        </div>

        <div className="homeList_item">
          <button onClick={() => setInprogressVisible(!inporgressVisible)}>
            In Progress
          </button>
          {inporgressVisible &&
            todos
              .filter((todo) => todo.status === "IP")
              .map((todo: todoProp) => (
                <div className="homeList_item_details">{todo.name}</div>
              ))}
        </div>
        <div className="homeList_item">
          <button onClick={() => setDoneVisible(!doneVisbile)}>Done</button>
          {doneVisbile &&
            todos
              .filter((todo: todoProp) => todo.status === "D")
              .map((todo: todoProp) => (
                <div className="homeList_item_details">{todo.name}</div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
