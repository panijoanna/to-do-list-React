import Tasks from "./features/tasks/Tasks";
import { Route, Routes } from "react-router-dom";
import Author from "./features/author";

const App = () => (
  <>
    <Routes>
      <Route path="/to-do-list-React" element={<Tasks />}></Route>
      <Route path="/o-autorze" element={<Author />}></Route>
    </Routes>
  </>
);

export default App;
