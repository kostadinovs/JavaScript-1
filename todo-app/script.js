const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const completedCounter = document.getElementById('count-completed');

const todosFromStorage = localStorage.getItem('todos');
const todoArray = JSON.parse(todosFromStorage);
let todos = todoArray || [];

// input.addEventListener('keyup', () => {
//     console.log(input.value);
// })

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function printTodo(){
    todos.push({text: input.value, completed:false });
    renderTodos();
    saveTodos();
    input.value = "";
}

function renderTodos() {
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const li = document.createElement('li'); 
        li.textContent = todo.text;
        if(todo.completed){
            li.classList.add('completed');
        }
        // CHECKBOX
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            renderTodos();
            saveTodos();
        });
        li.append(checkbox);

        // DELETE BUTTON
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', () => {
            // console.log('Delete btn');
            // console.log(e.target.parentNode.textContent);
            todos.splice(i, 1);
            renderTodos();
            saveTodos();
        });
        li.appendChild(deleteBtn);

        // EDIT BUTTON
        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️'
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit todo:', todo.text);
            if  (newText === ''){
                todos.splice(i, 1);
            }
            todo.text = newText;
            renderTodos();
            saveTodos();
        });
        li.appendChild(editBtn);

        todoList.appendChild(li);
    }
}
function countCompletedTodos() {
    const completedTodos = todos
    .filter(todo => todo.completed)
    .length;
    completedCounter.textContent = `You have completed ${completedTodos} tasks!`
}

// initial render
renderTodos();
countCompletedTodos();
