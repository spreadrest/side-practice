import React from 'react'

export class TodoCC extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            todos: [],
            text: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            text: e.target.value
        })
        console.log(this.state.text)
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
            </div>
        )
    }
}