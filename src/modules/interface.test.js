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
