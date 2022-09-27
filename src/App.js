import {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

function App() {
    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, content: "Przejść na reacta", done: true },
        { id: 2, content: "Zjeść obiad", done: true },
    ]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

  return (
    <>
        <Header title="Lista zadań"/>
        <Section 
            title="Dodaj nowe zadanie" 
            body={<Form/>}
    />

        <Section
             title="Lista zadań"
            body={
                <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask}/>
            }
            extraHeaderContent={
                <Buttons 
                 tasks={tasks} 
                 hideDone={hideDone} 
                 toggleHideDone={toggleHideDone}/>
            }
    />
    </>
  );
}

export default App;
