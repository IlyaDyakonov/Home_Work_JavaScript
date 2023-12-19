const tasks_input = document.querySelector(".tasks__input");
const task_list = document.querySelector(".tasks__list");
const task_remove = document.querySelector(".task__remove");
const task_add = document.querySelector(".tasks__add");

task_add.addEventListener('click', () => {
    const text = tasks_input.value;

    const div_task = document.createElement('div');
    div_task.className = 'task';

    const div_task_title = document.createElement('div');
    div_task_title.className = 'task__title';
    div_task_title.textContent = text;
    div_task.appendChild(div_task_title);

    const remove = document.createElement('a');
    remove.href = "#";
    remove.className = 'task__remove';
    remove.innerHTML = "&times";
    remove.addEventListener('click', () => div_task.remove());
    div_task.appendChild(remove);

    task_list.appendChild(div_task);
    tasks_input.value = "";
});