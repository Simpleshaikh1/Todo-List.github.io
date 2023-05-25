const Interface = require('./interface.js');

// using describe for all the functions
describe('testing add, remove', () => {
  const lengthBeforeAddingTask = Interface.toDoList.length;
  // testing the add  in function
  test('Testing the add task by function', () => {
    expect(Interface.addTask('keypress')).toHaveLength(lengthBeforeAddingTask + 1);
  });

  test('Testing add by number of DOM elements', () => {
    const allListItems = document.querySelectorAll('.toDoList');
    expect(allListItems.length).toHaveLength(lengthBeforeAddingTask + 1);
  });

  test('Testing the delete task in funtion', () => {
    expect(Interface.deleteTask('keypress')).toHaveLength(lengthBeforeAddingTask - 1);
  });

  test('Testing the delete task in DOM', () => {
    expect(Interface.toDoList.length).toHaveLength(lengthBeforeAddingTask - 1);
  });
});
