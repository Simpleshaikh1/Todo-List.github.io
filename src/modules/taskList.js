import Tasks from './tasks.js';

class TaskList {
  constructor(todoInput, planned, todoBtn, clearBtn) {
    this.todoInput = todoInput;
    this.planned = planned;
    this.todoBtn = todoBtn;
    this.clearBtn = clearBtn;
    this.editIndex = -1;
  }

  render = () => {
    this.planned.innerHTML = '';
    const sortedTasks = Tasks.getSortTasks();
    if (sortedTasks.length === 0) {
      this.clearBtn.style.display = 'none';
      const message = document.createElement('button');
      message.className = 'message';
      message.textContent = 'What is your task Today?';
      this.planned.appendChild(message);
      return;
    }
    this.clearBtn.style.display = 'block';

    sortedTasks.forEach((task, index) => {
      const taskList = document.createElement('li');
      const check = document.createElement('input');
      const descriptionInput = document.createElement('p');
      const listBtn = document.createElement('button');
      const icons = document.createElement('i');
      icons.className = 'fa-solid fa-trash delete';
      listBtn.appendChild(icons);
      const editBtn = document.createElement('button');
      const editIcons = document.createElement('i');
      editIcons.className = 'fa-solid fa-pen edit';
      editBtn.appendChild(editIcons);
      const btnDiv = document.createElement('div');
      btnDiv.append(editBtn, listBtn);
      btnDiv.className = 'btn-div';
      const div = document.createElement('div');
      div.className = 'listsdiv';
      check.type = 'checkbox';
      descriptionInput.innerText = `${task.description}`;
      if (task.completed) {
        descriptionInput.classList.add('line-through');
        check.checked = true;
      }

      check.addEventListener('change', () => {
        Tasks.toggleCompletedTask(index);
        if (task.completed) {
          descriptionInput.classList.add('line-through');
        } else {
          descriptionInput.classList.remove('line-through');
        }
      });

      listBtn.addEventListener('click', () => {
        Tasks.removeTask(index);
        this.render();
      });

      editBtn.addEventListener('click', () => {
        this.editIndex = index;
        this.todoInput.value = task.description;
        this.todoBtn.innerHTML = '<i class=\'fa-solid fa-pen edit\'></i>';
      });

      div.append(check, descriptionInput, btnDiv);
      taskList.append(div);
      this.planned.appendChild(taskList);
    });

    this.todoInput.value = '';
    this.todoBtn.innerHTML = '<i class="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>';
    this.editIndex = -1;
  }

  init = () => {
    this.render();
    this.todoBtn.addEventListener('click', () => {
      if (this.todoInput.value.trim() !== '') {
        if (this.editIndex === -1) {
          Tasks.addTask(this.todoInput.value);
        } else {
          Tasks.editTask(this.editIndex, this.todoInput.value);
          this.editIndex = -1;
        }
        this.todoInput.value = '';
        this.render();
      }
    });

    this.clearBtn.addEventListener('click', () => {
      Tasks.tasks = Tasks.tasks.filter((tasks) => !tasks.completed);
      Tasks.saveData();
      this.render();
    });
  }
}

export default TaskList;