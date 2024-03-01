// The application should have an input field for users to type in their to-do tasks.
// Users should be able to click a button to add the task to the list.
const inputElement = document.getElementById("todo-input");
let todos =  [
    {
        text:'Item 1',
        completed:false,
    },
    {
        text:'Item 2',
        completed:false,
    }
];
function addTodo() {
    const todoText = inputElement.value;
    const newTodo = { text: todoText, completed: false };
    todos.push(newTodo);
    inputElement.value = '';
    displayTodos();
}
// Each task should be displayed as an item in an unordered list (ul).
const todoListElement = document.getElementById('todo-list');
function displayTodos() {
    todoListElement.innerHTML = '';
    
    let index = 0;
    for (let todo of todos) {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.dataset.index = index;
        li.addEventListener('click', toggle);
        li.classList.add('todo');
        if(todo.completed){
            li.classList.add('completed');
        }
        const deleteButton = document.createElement('span')
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', deleteToDo);

        li.appendChild(deleteButton);
        todoListElement.appendChild(li);
        index++;
    }
}
displayTodos();
// Users should be able to mark tasks as complete by clicking on them, which should visually
// distinguish them from incomplete tasks.
function toggle(e){
    const index = e.target.dataset.index;
    const todo = todos[index];
    todo.completed = !todo.completed;
    displayTodos();
}
// Users should be able to delete tasks individually by clicking on a delete button associated with each task.
function deleteToDo(e){
    e.stopPropagation();
    console.log(e.target.parentNode.dataset.index);
    const index = e.target.parentNode.dataset.index;
    todos.splice(index, 1);
    console.log(todos);
    displayTodos();
}
// The application should have basic styling to make it visually appealing.
