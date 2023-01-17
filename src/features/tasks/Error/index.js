import Header from "../../../common/Header";
import Section from "../../../common/Section";

const Error = () => {
  return (
    <>
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
