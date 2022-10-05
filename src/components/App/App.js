import React, { useState } from 'react'
import { CounterCC } from '../CounterCC/CounterCC'
import { CounterFC } from '../CounterFC/CounterFC'
import { TodoCC } from '../TodoCC/TodoCC'

export class App extends React.Component {
    
    state = {
        todos: [],
    }


    render(){
        return (
            <div>
                <h1>Hello</h1>
                
                <TodoCC />
                {/* <CounterFC />
                <CounterCC name='Aris' /> */}
            </div>
        )
    }
}

