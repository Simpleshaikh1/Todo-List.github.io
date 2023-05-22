import './style.css';
import TaskList from './modules/taskList.js';

const clearBtn = document.querySelector('#clearBtn');
const todoInput = document.querySelector('#todoInsert');
const todoBtn = document.querySelector('#todoBtn');
const planned = document.querySelector('#taskList');

const taskList = new TaskList(clearBtn, todoInput, todoBtn, planned);
taskList.init();