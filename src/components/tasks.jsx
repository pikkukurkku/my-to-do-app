import todoList from '../assets/to-dos.json'

function Tasks ({ task }) {
return (
    <div key={task.id}>
        <p>Task: {task.name} </p>
        {task.done ? <span>Done</span> : <span>Not done</span>}
    </div>
);
}

function TaskList() {
    return (
      <div>
        <h2>Task List</h2>
        {todoList.map((task) => (
          <Tasks key={task.id} task={task} />
        ))}
      </div>
    );
  }

export default TaskList;