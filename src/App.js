import Tasks from "./features/tasks/Tasks";
import { Route, Routes } from "react-router-dom";
import Author from "./features/author";
import { toAuthor, toTask, toDetails } from "./routes";
import TaskDetails from "./features/taskDetails";

const App = () => (
  <>
    <Routes>
      <Route path={toTask()} element={<Tasks />}></Route>
      <Route path={toAuthor()} element={<Author />}></Route>
      <Route path={toDetails()} element={<TaskDetails />}></Route>
    </Routes>
  </>
);

export default App;
