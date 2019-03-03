import './style/app.css';


const project = (() => {
	const projectsList = [];

	const projectsFactory = (name, tasks = []) => {
		return { name, tasks };
	}

	const addProject = () => {
		let nameVal = document.getElementById('project-name').value;
		if (nameVal == "") {
			alert('The name field cannot be empty!');
			return;
		}
		projectsList.push(projectsFactory(nameVal));
		renderProjects();
		task.renderAllTasks();
		return projectsList;
	}

	const renderProjects = () => {
		const projects = document.getElementById('projects-list');
		projects.innerHTML = '';
		const markup = projectsList.map((project, index) => 
		`<div class="project p${index}" id="${index}">
				<div class="project-top collapsible">
					<h2 class="project-name">${project.name}</h2>
					<a class="delete-project"></a>
					<a class="add-new-task">New task</a>
				</div>
				<div class="project-bottom">
					<ul class="tasks-list">
					</ul>
				</div>
				<div class="add-task-modal" style="display: none">
					<div class="modal-content">
						<div class="modal-header">
							<span class="close-add-modal">&times</span>
							<h2>Add a new task</h2>
						</div>
						<div class="modal-body">
							<label>Name<input type="text" name="name" class="name"></label>
							<label>Description<textarea class="description"></textarea></label>
							<label>Priority
								<select class="priority">
									<option value="urgent">Urgent</option>
									<option value="pretty-important">Pretty important</option>
									<option value="can-wait">Can wait</option>
								</select>
							</label>
								<label>Due date<input type="date" name="due-date" class="due-date"></label>
						</div>
						<div class="modal-footer">
								<input type="button" name="submit-task" class="submit-task" id="submit-task" value="Submit task">
						</div>
					</div>
				</div>
				</div>
		</div>`
		).join(" ");
		projects.innerHTML = markup;
	}

	const deleteProject = (index) => {
		projectsList.splice(index, 1);
		renderProjects();
		task.renderAllTasks();
		localStorage.clear();
	}

	return { projectsList, projectsFactory, addProject, renderProjects, deleteProject };
})();


const task = (() => {
	const taskFactory = (name, description, priority, dueDate) => {
		return { name, description, priority, dueDate };
	}

	const addTask = (index) => {
		const currentProject = project.projectsList[index];
		let nameVal = document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .name`).value;
		let descriptionVal = document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .description`).value;
		let priorityVal = document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .priority`).value;
		let dueDateVal = document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .due-date`).value;
		if (nameVal == "") {
			alert('You should at least specify the name');
			return;
		}
		currentProject.tasks.push(taskFactory(nameVal, descriptionVal, priorityVal, dueDateVal));
	}

	const renderTask = (index) => {
		const currentProject = project.projectsList[index];
		const tasksList = document.querySelector(`.p${index} .tasks-list`);
		tasksList.innerHTML = '';
		const markup = currentProject.tasks.map((task, index) =>
			`<li class="task g${index}" id=${index}>
				<div class="task-header">
					<h3>${task.name}</h3>
					${task.priority == 'urgent' ? `<span class="urgent">Urgent</span>` : (task.priority == 'pretty-important' ? 
					`<span class="pretty-important">Pretty important</span>` :  `<span class="can-wait">Can wait</span>`)}</span>
				</div>
				<div class="task-body">
					<p class="description">${task.description}</p>
					${task.dueDate ? `<p class='due-date'>Due date: ${task.dueDate}</p>` : ""}
					<div class="task-buttons">
						<button class="edit-task">Edit</button>
						<button class="delete-task">Delete</button>
					</div>
				</div>
				<div class="edit-task-modal" style="display: none">
					<div class="modal-content">
						<div class="modal-header">
							<span class="close-edit-modal">&times</span>
							<h2>Editing a task</h2>
						</div>
						<div class="modal-body">
							<label>Name<input type="text" name="name" class="name"></label>
							<label>Description<textarea class="description"></textarea></label>
							<label>Priority
								<select class="priority">
									<option value="urgent">Urgent</option>
									<option value="pretty-important">Pretty important</option>
									<option value="can-wait">Can wait</option>
								</select>
							</label>
								<label>Due date<input type="date" name="due-date" class="due-date"></label>
						</div>
						<div class="modal-footer">
							<input type="button" name="edittask" class="edittask" id="edittask" value="Accept">
						</div>
					</div>
				</div>
			</li>`
			).join(" ");
		tasksList.innerHTML = markup;
	};

	const editTask = (index, projectIndex) => {
		const currentProject = project.projectsList[projectIndex];
		const currentTask = currentProject.tasks[index];
		let newname = document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .name`).value;
		let newDescription = document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .description`).value;
		let newPriority = document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .priority`).value;
		let newDueDate = document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .due-date`).value;
		if (newname == "") {
			alert('You should at least specify the name');
			return;
		}
		currentTask.name = newname;
		currentTask.description = newDescription;
		currentTask.priority = newPriority;
		currentTask.dueDate = newDueDate;
		task.renderAllTasks();
	}

	const deleteTask = (index, projectIndex) => {
		const currentProject = project.projectsList[projectIndex];
		currentProject.tasks.splice(index, 1);
		renderAllTasks();
	}

	const renderAllTasks = () => {
		project.projectsList.map((project, index) => task.renderTask(index));
	}

	return { taskFactory, addTask, renderTask, editTask, deleteTask, renderAllTasks }
})();

const openModal = (index, modal, projectIndex) => {
	if (modal.classList.contains('edit-task-modal')) {
		const currentProject = project.projectsList[projectIndex];
		const currentTask = currentProject.tasks[index];
		document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .name`).value = currentTask.name;
		document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .description`).value = currentTask.description;
		document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .priority`).value = currentTask.priority;
		document.querySelector(`.g${index} .edit-task-modal > .modal-content > .modal-body > label > .due-date`).value = currentTask.dueDate;
	}

	if (modal.style.display === 'none') {
		modal.style.display = 'block';
	} else {
		modal.style.display = 'none';
	}
}


const calculateOuterHeight = (element) => {
 let height = element.offsetHeight;
 let style = getComputedStyle(element)
 height += parseInt(style.marginTop) + parseInt(style.marginBottom);
 return height;
}


const addEventListeners = (() => {
	document.getElementById('add-project-btn').addEventListener('click', function(e) {
		project.addProject();
		document.getElementById('project-name').value = '';
	});

	document.getElementById('project-name').addEventListener('keydown', function(e) {
		if(e.keyCode === 13) {
			project.addProject();
			this.value = '';
		}
	});

	const projects = document.getElementById('projects-list');
	projects.addEventListener('click', function (e) {
		if (e.target.classList.contains('add-new-task')) {
			let index = e.target.parentNode.parentNode.id;
			let modal = document.querySelector(`.p${index} .add-task-modal`);
			openModal(index, modal);
  	} else if (e.target.classList.contains('submit-task')) {
	  	let index = e.target.parentNode.parentNode.parentNode.parentNode.id;
	  	task.addTask(index);
	  	task.renderTask(index);
		  document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .name`).value = '';
			document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .description`).value = '';
			document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .priority`).value = '';
			document.querySelector(`.p${index} .add-task-modal > .modal-content > .modal-body > label > .due-date`).value = '';
	  	let bottom = document.querySelector(`.p${index} .project-bottom`);
	  	let tasks = document.querySelector(`.p${index} .project-bottom > .tasks-list`);
	  	let tasksHeight = calculateOuterHeight(tasks);
	  	bottom.style.maxHeight = tasksHeight + "px";
	  	let addModal = document.querySelector(`.p${index} .add-task-modal`);
	  	openModal(index, addModal);
  	} else if (e.target.classList.contains('delete-task')) {
  		let taskIndex = e.target.parentNode.parentNode.parentNode.id;
  		let projectIndex = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  		task.deleteTask(taskIndex, projectIndex);
  	} else if (e.target.classList.contains('edit-task')) {
  		let taskIndex = e.target.parentNode.parentNode.parentNode.id;
  		let projectIndex = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  		let editModal = document.querySelector(`.g${taskIndex} .edit-task-modal`);
  		openModal(taskIndex, editModal, projectIndex);
  	} else if  (e.target.classList.contains('edittask')) {
      let taskIndex = e.target.parentNode.parentNode.parentNode.parentNode.id;
      let projectIndex = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
      task.editTask(taskIndex, projectIndex);
  	} else if (e.target.classList.contains('delete-project')) {
  		let index = e.target.parentNode.parentNode.id;
  		project.deleteProject(index);
  	} else if (e.target.classList.contains('close-add-modal')) {
  		let index = e.target.parentNode.parentNode.parentNode.parentNode.id;
  		let modal = document.querySelector(`.p${index} .add-task-modal`);
  		modal.style.display = 'none';
  	} else if (e.target.classList.contains('close-edit-modal')) {
  		let taskIndex = e.target.parentNode.parentNode.parentNode.parentNode.id;
  		let modal = document.querySelector(`.g${taskIndex} .edit-task-modal`);
  		modal.style.display = 'none';
  	} else if (e.target.classList.contains('collapsible')) {
  		e.target.classList.toggle('expanded');
			let content = e.target.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
  	} else if (e.target.parentNode.classList.contains('collapsible')) {
  		e.target.parentNode.classList.toggle('expanded');
			let content = e.target.parentNode.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
  	}
	})

})();

project.renderProjects();
task.renderAllTasks();

