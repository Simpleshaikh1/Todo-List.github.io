class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const Tasks = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],

  saveData: () => {
    localStorage.setItem('tasks', JSON.stringify(Tasks.tasks));
  },

  addTask: (description) => {
    const newTask = new Task(description, false, Tasks.tasks.length + 1);
    Tasks.tasks.push(newTask);
    Tasks.saveData();
  },

  editTask: (index, newDescription) => {
    const task = Tasks.tasks[index];
    task.description = newDescription;
    Tasks.saveData();
  },

  toggleCompletedTask: (index) => {
    const task = Tasks.tasks[index];
    task.completed = !task.completed;
    Tasks.saveData();
  },

  removeTask: (index) => {
    Tasks.tasks.splice(index, 1);
    Tasks.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    Tasks.saveData();
  },
  getSortTasks: () => Tasks.tasks.sort((a, b) => a.index - b.index),
};

export default Tasks;