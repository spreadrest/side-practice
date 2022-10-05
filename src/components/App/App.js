import React, { useState } from 'react'
import { CounterCC } from '../CounterCC/CounterCC'
import { CounterFC } from '../CounterFC/CounterFC'
import { TodoCC } from '../TodoCC/TodoCC'

export class App extends React.Component {
    
    state = {
        isDeleted: false
    }


    render(){
        return (
            <div>
                <h1>Hello</h1>
                <button
                    onClick={() => this.setState(
                        (state, props) => {
                            return {isDeleted: !state.isDeleted}
                        }
                    )}
                >{this.state.isDeleted ? 'Показать' : 'Скрыть'} компоненту</button>
                
                {
                    !this.state.isDeleted && <TodoCC />
                }


                {/* <CounterFC />
                <CounterCC name='Aris' /> */}
            </div>
        )
    }
}

