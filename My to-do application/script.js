
const input = document.getElementById('todo-input');
const button = document.querySelector('button');
const todoList = document.getElementById('todo-list')

function createTodoItem(todo){
    let li = document.createElement('li');
    li.textContent = todo;
    li.addEventListener('click', function() {
        li.classList.add('completed')
    });

    const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
        });
        li.appendChild(checkbox);
   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    return li;
}

function printTodo(){
    let todo = input.value;
    if (todo){
        let li = createTodoItem(todo);
        todoList.appendChild(li);
        input.value = "";
    }
}

button.addEventListener('click', printTodo);
   

