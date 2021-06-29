import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then( res => {
    const todo = res.data as Todo; //This enforces our interface for the object!

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id : number, title : string, completed : boolean) => { //Providing types for our fcn arguments
    console.log(`
        ID: ${id}
        Title: ${title}
        Completed: ${completed}    
    `);
}