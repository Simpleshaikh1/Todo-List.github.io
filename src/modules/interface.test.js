const Interface = require('./interface');

test("Testing the delete task funtion", () => {
    expect(Interface.deleteTask()).toBe()
})

test("Testing the add task function", () => {
    let lengthBeforeAddingTask = Interface.toDoList.length; // lengthBeforeAddingTask = 5
    expect(Interface.addTask('keypress')).toBe(Interface.toDoList.length == lengthBeforeAddingTask+1);
})
   