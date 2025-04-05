import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";

export default function TaskBoard() {
    const defaultTask = [{  // Array of Object
        id: crypto.randomUUID(),
        title: "Learn React",
        description: "I want to learn React JS",
        tags: ["web", "react", "js"],
        priority: "High",
        isFavorite: false
    }];
    const [tasks, setTasks] = useState(defaultTask); // stores all tasks
    const [showAddModal, setShowAddModal] = useState(false);
    const [editTask, setEditTask] = useState(null);

    function handleAddEditTask(newTask, isAdd) {
        if (isAdd === true) { // Adding Task
            setTasks([...tasks, newTask]);
        }
        else if (isAdd === false) { // Editing Task
            setTasks(tasks.map(task => {
                if (task.id == newTask.id) {
                    return newTask;
                }
                else {
                    return task;
                }
            }));
        }
        handleClose();
    }

    function handleEditTask(task) {
        setEditTask(task);
        setShowAddModal(true);
    }
    // If a function (outside JSX) needs to call component inside that function and 
    // passes a value as props to that component, then the function can not call the 
    // component. Then the function creates a state variable, stores the value on it 
    // and then passes that state variable as props to that component.

    function handleClose() {
        setShowAddModal(false);
        setEditTask(null);
    }

    // function handleDeleteTask(deleteTask) {
    //     setTasks(tasks.filter(task => {
    //         if (task.id == deleteTask.id) {
    //             ;
    //         }
    //         else {
    //             return task;
    //         }
    //     }))
    // }

    function handleDeleteTask(deleteTask) {
        setTasks(tasks.filter(task => {
            if (task.id === deleteTask.id) {
                ;
            }
            else if (task.id != deleteTask.id) {
                return task;
            }
        }));
    }

    // function handleDeleteAll() {
    //     tasks.splice(0, tasks.length);
    //     setTasks([...tasks]);
    // }

    function handleDeleteAll() {
        tasks.length = 0;
        setTasks([...tasks]);
    }

    function handleFavorite(favoriteTask) {
        setTasks(tasks.map(task => {
            if (task.id === favoriteTask.id) {
                return { ...task, isFavorite: !task.isFavorite }
            }
            else if (task.id != favoriteTask.id) {
                return task;
            }
        }))
    }

    function handleSearch(searchTerm) {  // searching based on title only
        const filtered = tasks.filter(task => {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        });
        setTasks([...filtered]);
    }

    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModal onSave={handleAddEditTask}
                onClose={handleClose} editTask={editTask} />}
            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask onSearch={handleSearch} />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] 
                bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onAdd={() => setShowAddModal(true)}
                        onDeleteAll={handleDeleteAll} />
                    {(tasks.length > 0) ? <TaskList tasks={tasks}
                        onEdit={handleEditTask} onDelete={handleDeleteTask}
                        onFavorite={handleFavorite} /> : <NoTasksFound />}
                </div>
            </div>
        </section>
    );
}
