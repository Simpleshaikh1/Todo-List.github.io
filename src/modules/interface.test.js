import Interface from './interface.js';

// using describe for all the functions
describe('testing add, remove', () => {
  const lengthBeforeAddingTask = Interface.toDoList.length;
  console.log("OBJ of INTERFACE", lengthBeforeAddingTask,"TODO list:",Interface.toDoList);

  const keyPressEvent = new KeyboardEvent('keypress', {'keyCode': 65})
  console.log(window.dispatchEvent(keyPressEvent));

  test('initial confi testing ',()=>{
    expect(5).toBe(5);
  })

  test('checking if we can call the function',()=>{
    expect(Interface.myTestF(3,4)).toBe(7);
  })

  test('Should return null if the event is not [enter key press]', ()=>{
    expect(Interface.addTask(window.dispatchEvent(keyPressEvent))).toBeNull();
  })

  //testing the add  in function
  // test('Add task should return null if the event is not an [enter key press]', () => {
  //   expect(taskObj.addTask(window.dispatchEvent(keyPressEvent))).toBeNull();
  // });

  // test('Testing add by number of DOM elements', () => {
  //   const allListItems = document.querySelectorAll('.toDoList');
  //   expect(allListItems.length).toHaveLength(lengthBeforeAddingTask + 1);
  // });

  // test('Testing the delete task in funtion', () => {
  //   expect(Interface.deleteTask('keypress')).toHaveLength(lengthBeforeAddingTask - 1);
  // });

  // test('Testing the delete task in DOM', () => {
  //   expect(Interface.toDoList.length).toHaveLength(lengthBeforeAddingTask - 1);
  // });
});
