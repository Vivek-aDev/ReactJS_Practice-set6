import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Todo() {
  const [todoData, setTodoData] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/todos");
      if (status === 200) {
        setTodoData(data.todos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Todo</h2>
      <div>
        {todoData.map(({ title, desc, todos }) => (
          <div>
            <h3>
              {title}: {desc}
            </h3>
            {
              <ol>
                {todos.map((task) => (
                  <li>{task}</li>
                ))}
              </ol>
            }
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
