const list = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

const createList = (tarefa) => {
  return (
    <li>{tarefa}</li>
  )
}

const Task = () => {
  return (
    <ul>{ list.map((tarefa) => createList(tarefa)) }</ul>
  );
}

export default Task;
