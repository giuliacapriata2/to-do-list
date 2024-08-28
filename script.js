document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');


    function addTask() {
        const inputValue = taskInput.value;
        const taskText = inputValue.trim();

        if (taskText !== '') {

            const li = document.createElement('li');


            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';


            const span = document.createElement('span');
            span.textContent = taskText;


            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Elimina';
            deleteButton.onclick = function (event) {

                event.stopPropagation();
                taskList.removeChild(li);
            };


            checkbox.onchange = function () {
                if (checkbox.checked) {
                    span.classList.add('completed');
                } else {
                    span.classList.remove('completed');
                }
            };


            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);


            taskList.appendChild(li);


            taskInput.value = '';
        }
    }


    addTaskBtn.addEventListener('click', addTask);
});
