import React, { useState } from 'react'

export const CounterFC = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Functional Component</h1>
            <div>
                <button
                    onClick={() => setCount(count - 1)}
                >-</button>
                <strong>{ count }</strong>
                <button
                    onClick={() => setCount(count + 1)}
                >+</button>
            </div>
        </div>
    )
}
