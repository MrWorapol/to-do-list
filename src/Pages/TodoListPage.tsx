import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import '../App.css'
import ItemList, { TodoListInterface } from '../components/ItemList';



export default function TodoListPage() {
    const [todo,setTodo] = useState('');
    const [todoList,setTodoList] = useState<TodoListInterface[]>([]);
    const [number,setNumber] = useState(0);
    const handleChange = (e : any) => {  
        setTodo(e.target.value); 
    }

    const handleSubmit = () => {
        setTodoList([{subject : todo,status : false},...todoList]);

        
    }
    
    return (
        <div className="card">
            
            <h1>TO DO LIST</h1>

            <TextField variant='outlined' type="text" name="todos" id="todos"  onChange={handleChange}
                required label="What do you want to do?" 
                size='small'
                style={{ 
                    width: '400px',
                    }}/>
            <Button type="submit" variant="outlined"  
                onClick={handleSubmit}
                size='medium'
                style={{
                    fontSize: '1em',
                    marginLeft :  '10px'}}
            >Add</Button>     

            <ItemList todoList={todoList}/>  

        </div>
    )
}