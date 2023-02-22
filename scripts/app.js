//define an empty array to store the to-do items
let tasks = [];

//function to add a new to-do item to the array
function addTask(event) {
	event.preventDefault();
	//get the value of the input field
	const input = document.getElementById('new-task');
	const task = input.value;
	// add the new to-do item to the array
	tasks.push({task, completed: false});
	input.value = '';
	displayTasks();
}

function displayTasks() {
	const list = document.getElementById('task-list');
	list.innerHTML = '';
	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];
		const item = document.createElement('li');
		item.textContent = task.task;
		if (task.completed) {
			item.classList.add('completed');
		}
		const statusButton = document.createElement('button');
		statusButton.textContent = 'Status';
		statusButton.addEventListener('click', () => {
			alert(`Task status: ${task.completed ? 'Done' : 'Pending'}`); 
		});
		const doneButton = document.createElement('button');
		doneButton.textContent = 'Done';
		doneButton.addEventListener('click', () => {
			removeTask(i);
		});
		item.appendChild(statusButton);
		item.appendChild(doneButton);
		item.addEventListener('click', () => {
			task.completed = !task.completed;
			displayTasks();
		});
		list.appendChild(item);
	}
}

function removeTask(index) {
	tasks.splice(index, 1);
	displayTasks();
}

document.querySelector('form').addEventListener('submit', addTask);
displayTasks();