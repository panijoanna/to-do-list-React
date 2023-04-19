import Tasks from "./features/tasks/Tasks";
import { Route, Routes } from "react-router-dom";
import Author from "./features/Author";
import { toAuthor, toTask, toDetails } from "./routes";
import TaskDetails from "./features/taskDetails";

const App = () => (
  <Routes>
    <Route path={toTask()} element={<Tasks />} />
    <Route path={toAuthor()} element={<Author />} />
    <Route path={toDetails()} element={<TaskDetails />} />
  </Routes>
);

export default App;
