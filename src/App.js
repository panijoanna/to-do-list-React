import Tasks from "./features/tasks/Tasks";
import { Route, Routes } from "react-router-dom";
import Author from "./features/author";
import { toAuthor, toTask } from "./routes";

const App = () => (
  <>
    <Routes>
      <Route path={toTask()} element={<Tasks />}></Route>
      <Route path={toAuthor()} element={<Author />}></Route>
    </Routes>
  </>
);

export default App;
