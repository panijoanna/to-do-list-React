import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasks/tasksSlice";
import Navigation from "../../Navigation";
import { TasksState } from "../../types";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state: { tasks: TasksState }) =>
    getTaskById(state, id!)
  );
  return (
    <>
      <Navigation />
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie ma takiego zadania"}
        body={
          !!task && (
            <>
              <strong>Ukończone:</strong>: {task.done ? "Tak" : "Nie"}
            </>
          )
        }
      />
    </>
  );
};

export default TaskDetails;
