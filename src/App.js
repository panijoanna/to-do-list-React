import Tasks from "./features/tasks/Tasks";
import { Route, Routes } from "react-router-dom";
import Author from "./features/author";
import { toAuthor, toTask, toDetails } from "./routes";
import Error from "./features/tasks/Error";

const App = () => (
  <>
    <Routes>
      <Route path={toTask()} element={<Tasks />}></Route>
      <Route path={toAuthor()} element={<Author />}></Route>
      <Route path={toDetails()} element={<Error />}></Route>
    </Routes>
  </>
);

export default App;
