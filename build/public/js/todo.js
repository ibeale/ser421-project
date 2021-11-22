"use strict";
var todoList = {
    todos: [],
    currentId: 0,
    addTodo: function (text) {
        this.todos.push({
            id: this.currentId,
            text: text,
            completed: false
        });
        this.currentId++;
    },
    toggleTodo: function (id) {
        var _this = this;
        var e = function (e) {
            var todoItem = _this.todos.find(function (todo) { return todo.id === id; });
            if (todoItem) {
                todoItem.completed = !todoItem.completed;
            }
            _this.renderTodos();
        };
        return e;
    },
    clearCompleted: function () {
        var _this = this;
        return function (e) {
            _this.todos = _this.todos.filter(function (todo) { return !todo.completed; });
            _this.renderTodos();
        };
    },
    renderTodos: function () {
        var todoListElement = document.getElementById("todoList");
        if (todoListElement) {
            while (todoListElement.firstChild) {
                todoListElement.removeChild(todoListElement.firstChild);
            }
            for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                var todo = _a[_i];
                var todoItemElement = document.createElement("li");
                todoItemElement.setAttribute("id", "todoItem" + todo.id);
                var todoCheckboxElement = document.createElement("input");
                todoCheckboxElement.addEventListener('click', todoList.toggleTodo(todo.id));
                todoCheckboxElement.setAttribute("type", "checkbox");
                todoCheckboxElement.setAttribute("id", "todoCheckbox" + todo.id);
                todoCheckboxElement.checked = todo.completed;
                var todoCheckboxElementLabel = document.createElement("label");
                todoCheckboxElementLabel.setAttribute("for", "todoCheckbox" + todo.id);
                todoCheckboxElementLabel.innerText = todo.text;
                todoItemElement.appendChild(todoCheckboxElement);
                todoItemElement.appendChild(todoCheckboxElementLabel);
                todoListElement.appendChild(todoItemElement);
            }
        }
    }
};
function addTodoItemToList() {
    var todoInputElement = document.getElementById("todoInput");
    if (todoInputElement) {
        var todoText = todoInputElement.value;
        if (todoText.length > 0) {
            todoList.addTodo(todoText);
            todoInputElement.value = "";
        }
    }
    todoList.renderTodos();
}
window.onload = function () {
    var addTodoButton = document.getElementById('addTodo');
    if (addTodoButton) {
        addTodoButton.addEventListener('click', addTodoItemToList);
    }
    var clearCompletedButton = document.getElementById('clearCompleted');
    if (clearCompletedButton) {
        clearCompletedButton.addEventListener('click', todoList.clearCompleted());
    }
};
