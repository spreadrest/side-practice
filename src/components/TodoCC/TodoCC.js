import React from 'react'

export class TodoCC extends React.Component{
    
    state = {
        todos: [],
        text: '',
    }
    

    inputHandler = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addTodo(){
        const obj = {
            id: Date.now(),
            title: this.state.text,
            complete: false
        }

        this.setState( (state) => {
            return { todos: [...state.todos, obj] }
        })
    }

    componentDidMount(){
        console.log('Компонента была установлена в DOM')
    }

    componentDidUpdate(_, prevState){
        
        if(prevState.todos.length !== this.state.todos.length){
            console.log('Компонента была изменена')
        }
    }

    componentWillUnmount(){
        console.log('Компонента будет удалена')
    }

    render(){
        return(
            <div>
                <div>
                    <input 
                        type="text" 
                        value={this.state.text}
                        onChange={this.inputHandler}
                    />
                    <button
                        onClick={this.addTodo.bind(this)}
                    >Add todo</button>
                </div>
                {
                    this.state.todos.map( todo => {
                        return (
                            <div key={todo.id}>
                                <input type="checkbox" />
                                <span>{todo.title}</span>
                                <button>x</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}