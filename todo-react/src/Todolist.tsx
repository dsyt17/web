type TaskType = {
  title: string;
  tasks: Array<TasksCheckboxType>;
};

type TasksCheckboxType = {
  id: number;
  title: string;
  idDone: boolean;
};

type PropsType = {
  task: TaskType;
};

export function Todolist(props: PropsType) {
  return (
    <div>
      <h1>{props.task.title}</h1>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {props.task.tasks.map((t) => (
          <li>
            <input type="checkbox" checked={t.idDone} />
            <span>{t.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
