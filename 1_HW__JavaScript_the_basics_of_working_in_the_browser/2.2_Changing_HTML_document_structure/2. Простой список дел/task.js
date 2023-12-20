const tasksInput = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");
const taskRemove = document.querySelector(".task__remove");
const taskAdd = document.querySelector(".tasks__add");

taskAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const text = tasksInput.value;

    const divTask = document.createElement('div');
    divTask.className = 'task';

    const divTaskTitle = document.createElement('div');
    divTaskTitle.className = 'task__title';
    divTaskTitle.textContent = text;
    divTask.appendChild(divTaskTitle);

    const remove = document.createElement('a');
    remove.href = "#";
    remove.className = 'task__remove';
    remove.innerHTML = "&times";

    remove.addEventListener('click', () => divTask.remove());
    divTask.appendChild(remove);

    taskList.appendChild(divTask);
    tasksInput.value = "";
});
