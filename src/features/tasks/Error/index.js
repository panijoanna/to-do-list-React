import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Navigation from "../../../Navigation";

const Error = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
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

export default Error;
