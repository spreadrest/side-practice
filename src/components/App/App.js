import React, { useState } from 'react'
import { CounterCC } from '../CounterCC/CounterCC'
import { CounterFC } from '../CounterFC/CounterFC'

export const App = () => {
    

    return (
        <div>
            <h1>Hello</h1>
            <CounterFC />
            <CounterCC name='Aris' />
        </div>
    )
}

