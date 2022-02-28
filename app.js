const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".add-btn");
const todoList = document.querySelector(".todoList");
const todoCheck = document.querySelector('.select')

todoButton.addEventListener("click", addTodoArray);
todoList.addEventListener('click', checkTodo);
todoCheck.addEventListener('click', stateCheck)

let todos = []

todos = JSON.parse(localStorage.getItem('wholeTodoList'))

const state = {
    all: 'All', completed: 'Completed', uncompleted: 'Uncompleted'
}

function renderLocalTodos () {
    console.log(todos)
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.setAttribute('id', todo.id)
        if (todo.state === state.completed) {
            todoDiv.classList.add('completed')
        }
        const newTodo = document.createElement('li');
        newTodo.innerText = todo.text;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement('button');
        completedButton.classList.add('complete-btn');
        completedButton.setAttribute('id', todo.idComplete)
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.setAttribute('id', todo.idTrash)
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    })
}
renderLocalTodos()

function addTodoArray(event) {
    event.preventDefault();
    todos = [...todos, {
        id: Math.random(), idComplete: Math.random(), idTrash: Math.random(), text: todoInput.value, state: state.all
    }]
    addTodo()
    let localTodos = []
   localTodos = todos
   localStorage.setItem ('wholeTodoList', JSON.stringify(localTodos))
}

function addTodo() {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.setAttribute('id', todos[todos.length-1].id)
    const newTodo = document.createElement('li');
    newTodo.innerText = todos[todos.length-1].text;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.setAttribute('id', todos[todos.length-1].idComplete)
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.setAttribute('id', todos[todos.length-1].idTrash)
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function checkTodo(e) {
    if (e.target.classList.value === 'trash-btn') {
        todos = todos.filter(todo => todo.idTrash !== +e.target.id)
    }
    else if (e.target.classList.value === 'complete-btn') {
        const todoContainer = e.target.parentElement;
        todoContainer.classList.toggle('completed')
        if (todoContainer.classList.value === 'todo completed') {
            const completedTodo = todos.find(todo => todo.idComplete === +e.target.id)
            completedTodo.state = state.completed
        }
        else {
        const completedTodo = todos.find(todo => todo.idComplete === +e.target.id)
        completedTodo.state = state.all
        }
   }
   renderAllTodos()
   let localTodos = []
   localTodos = todos
   localStorage.setItem ('wholeTodoList', JSON.stringify(localTodos))
}

function renderAllTodos () {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.setAttribute('id', todo.id)
        if (todo.state === state.completed) {
            todoDiv.classList.add('completed')
        }
        const newTodo = document.createElement('li');
        newTodo.innerText = todo.text;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement('button');
        completedButton.classList.add('complete-btn');
        completedButton.setAttribute('id', todo.idComplete)
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.setAttribute('id', todo.idTrash)
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    })
    }
    
    function renderCompletedTodos () {
    todoList.innerHTML = "";
    completedTodos = todos.filter(todo => todo.state === state.completed)
    completedTodos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.setAttribute('id', todo.id)
        if (todo.state === state.completed) {
            todoDiv.classList.add('completed')
        }
        const newTodo = document.createElement('li');
        newTodo.innerText = todo.text;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement('button');
        completedButton.classList.add('complete-btn');
        completedButton.setAttribute('id', todo.idComplete)
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.setAttribute('id', todo.idTrash)
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    })
    }
    
    function renderUncompletedTodos () {
    todoList.innerHTML = "";
    uncompletedTodos = todos.filter(todo => todo.state != state.completed)
    uncompletedTodos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.setAttribute('id', todo.id)
        if (todo.state === state.completed) {
            todoDiv.classList.add('completed')
        }
        const newTodo = document.createElement('li');
        newTodo.innerText = todo.text;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement('button');
        completedButton.classList.add('complete-btn');
        completedButton.setAttribute('id', todo.idComplete)
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.setAttribute('id', todo.idTrash)
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    })
    }

function stateCheck (e) {
    switch (e.target.value){
        case 'All' :
        renderAllTodos()    
        break
        case 'Completed' :
        renderCompletedTodos()
        break
        case 'Uncompleted' :
        renderUncompletedTodos()
        break
    }
}