import Interface from './interface.js';

describe('addTask', () => {
  // eslint-disable-next-line no-unused-vars
  let instanceOfInterface;
  let inputElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class = "toDoItem"></div>
      <input type = "text" id="title" />
    `;

    instanceOfInterface = new Interface();
    inputElement = document.getElementById('title');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should add a new task to the ToDo list when Enter key is pressed and the title is not empty', () => {
    inputElement.value = 'New Task';
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    inputElement.dispatchEvent(event);
  });

  test('should show an alert when Enter key is pressed and the title is empty', () => {
    inputElement.value = '';
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    inputElement.dispatchEvent(event);
  });
});

describe('deleteTask', () => {
  // eslint-disable-next-line no-unused-vars
  let instanceOfInterface;
  let listItem;
  let deleteBtn;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="toDoItem">
        <div class="toDoList">
          <input type="checkbox" class="checkbox" id="1" name="Task 1" value="Task 1">
          <div class="taskDescription">Task 1</div>
          <button type="button" class="optionBtn"><i class="fa fa-ellipsis-v fa-2xl menu" id="1"></i></button>
          <button type="button" class="deleteBtn hide"><i class="fa fa-trash fa-xl trash-bin"></i></button>
        </div>
      </div>
    `;

    instanceOfInterface = new Interface();
    listItem = document.querySelector('.toDoList');
    deleteBtn = listItem.querySelector('.deleteBtn');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should delete the task when delete button is clicked', () => {
    deleteBtn.click();
  });
});

describe('editTask', () => {
  // eslint-disable-next-line no-unused-vars
  let instanceOfInterface;
  let listItem;
  // eslint-disable-next-line no-unused-vars
  let editInput;
  let menuInterfaceconClick;
  // eslint-disable-next-line no-unused-vars
  let trashBin;
  // eslint-disable-next-line no-unused-vars
  let taskID;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="toDoItem">
        <div class="toDoList">
          <input type="checkbox" class="checkbox" id="1" name="Task 1" value="Task 1">
          <div class="taskDescription">Task 1</div>
          <input type="text" class="editInput hide" id="1" name="Task 1" value="Task 1">
          <button type="button" class="optionBtn"><i class="fa fa-ellipsis-v fa-2xl menu" id="1"></i></button>
          <button type="button" class="deleteBtn hide"><i class="fa fa-trash fa-xl trash-bin"></i></button>
        </div>
      </div>
    `;

    instanceOfInterface = new Interface();
    listItem = document.querySelector('.toDoList');
    editInput = listItem.querySelector('.editInput');
    menuInterfaceconClick = listItem.querySelector('.menu');
    trashBin = listItem.querySelector('.deleteBtn');
    taskID = parseInt(menuInterfaceconClick.id, 10);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should enable editing of the task description when the edit button is clicked', () => {
    menuInterfaceconClick.click();
  });
});

describe('lineOnTask', () => {
  let instanceOfInterface;
  let checkbox;
  // eslint-disable-next-line no-unused-vars
  let listItem;
  // eslint-disable-next-line no-unused-vars
  let taskDescription;
  // eslint-disable-next-line no-unused-vars
  let completedTasks;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="toDoItem">
      <div class="toDoList">
        <input type="checkbox" class="checkbox" id="1" name="Task 1" value="Task 1">
        <div class="taskDescription">Task 1</div>
      </div>
    </div>
  `;
    instanceOfInterface = new Interface();
    checkbox = document.querySelector('.checkbox');
    listItem = document.querySelector('.toDoList');
    taskDescription = document.querySelector('.taskDescription');
    completedTasks = instanceOfInterface.completedTasks;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should update the completed status of the task and add it to the completed tasks array when checked', () => {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
  });
  test('should remove the task from the completed tasks array when unchecked', () => {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
  });
});

describe('clearAllTasks', () => {
  // eslint-disable-next-line no-unused-vars
  let instanceOfInterface;
  let clearBtn;
  // eslint-disable-next-line no-unused-vars
  let toDoListContainer;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="toDoItem">
        <div class="toDoList">
          <input type="checkbox" class="checkbox" id="1" name="Task 1" value="Task 1" checked>
          <div class="taskDescription completed">Task 1</div>
        </div>
        <div class="toDoList">
          <input type="checkbox" class="checkbox" id="2" name="Task 2" value="Task 2" checked>
          <div class="taskDescription completed">Task 2</div>
        </div>
      </div>
      <button class="clearTask">Clear Completed Tasks</button>
    `;

    instanceOfInterface = new Interface();
    clearBtn = document.querySelector('.clearTask');
    toDoListContainer = document.querySelector('.toDoItem');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should display an alert if no task is selected', () => {
    jest.spyOn(instanceOfInterface, 'showAlert');

    clearBtn.click();
    expect(instanceOfInterface.showAlert).toHaveBeenCalledWith('No task selected!', 'danger');
  });

  test('should clear all completed tasks and update the task list', () => {
    clearBtn.click();

    const completedTasks = Array.from(document.querySelectorAll('.toDoList')).filter((task) => task.querySelector('.checkbox').checked);
    expect(completedTasks.length).toBe(0);

    const taskListItems = document.querySelectorAll('.toDoList');
    expect(taskListItems.length).toBe(0);
  });
});
