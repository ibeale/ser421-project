interface todoItem{
    id: number;
    text: string;
    completed: boolean;
}

interface todoList{
    todos: todoItem[];
    currentId: number;
    addTodo(text: string): void;
    toggleTodo(id: number): EventListener;
    clearCompleted: () => EventListener;
    renderTodos(): void;
}

let todoList: todoList = {
    todos: [],
    currentId: 0,
    addTodo(text: string){
        this.todos.push({
            id: this.currentId,
            text: text,
            completed: false
        });
        this.currentId++;
    },
    toggleTodo(id: number){
        let e: EventListener = (e: Event) => {
            let todoItem: todoItem | undefined = this.todos.find(todo => todo.id === id);
            if(todoItem){
                todoItem.completed = !todoItem.completed;
            }
            this.renderTodos();
        }
        return e;
    },
    clearCompleted(){
        return (e: Event) => {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.renderTodos();
        }
    },
    renderTodos(){
        let todoListElement = document.getElementById("todoList");
        if(todoListElement){
            while(todoListElement.firstChild){
                todoListElement.removeChild(todoListElement.firstChild);
            }
            for(let todo of this.todos){
                let todoItemElement = document.createElement("li");
                todoItemElement.setAttribute("id", "todoItem" + todo.id);
                
                let todoCheckboxElement = document.createElement("input");
                todoCheckboxElement.addEventListener('click', todoList.toggleTodo(todo.id));
                todoCheckboxElement.setAttribute("type", "checkbox");
                todoCheckboxElement.setAttribute("id", "todoCheckbox" + todo.id);
                (todoCheckboxElement as HTMLInputElement).checked = todo.completed;
                
                let todoCheckboxElementLabel = document.createElement("label");
                todoCheckboxElementLabel.setAttribute("for", "todoCheckbox" + todo.id);
                todoCheckboxElementLabel.innerText = todo.text;
                
                todoItemElement.appendChild(todoCheckboxElement);
                todoItemElement.appendChild(todoCheckboxElementLabel);
                todoListElement.appendChild(todoItemElement);
            }
        }
    }
};

function addTodoItemToList(){
    let todoInputElement = document.getElementById("todoInput");
    if(todoInputElement){
        let todoText = (todoInputElement as HTMLInputElement).value;
        if(todoText.length > 0){
            todoList.addTodo(todoText);
            (todoInputElement as HTMLInputElement).value = "";
        }
    }
    todoList.renderTodos();
    
}

window.onload = () => {
    let addTodoButton: HTMLElement | null = document.getElementById('addTodo');
    if(addTodoButton){
        (addTodoButton as HTMLButtonElement).addEventListener('click', addTodoItemToList);
    }

    let clearCompletedButton: HTMLElement | null = document.getElementById('clearCompleted');
    if(clearCompletedButton){
        (clearCompletedButton as HTMLButtonElement).addEventListener('click', todoList.clearCompleted());
    }
    
}