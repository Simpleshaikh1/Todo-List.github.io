import todoTask from './todo.js';

export default class Interface {
  
  static displayToDoList = () => {
    const toDoListContainer = document.querySelector(
      '.toDoItem',
    );

    todoTask.sort((i, j) => i.index - j.index);
    todoTask.forEach((task) => {
      const listItem = document.createElement('div');
      listItem.className = "toDoList";
      listItem.innerHTML = `
      <input type="checkbox" id="${task.index}" name="${task.description}" value="${task.description}"> ${task.description}
      `;
      const optBtn = document.createElement('button');
      optBtn.className = 'optionBtn';
      optBtn.innerHTML = '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
      listItem.appendChild(optBtn);
      toDoListContainer.appendChild(listItem);
    });
  };
}