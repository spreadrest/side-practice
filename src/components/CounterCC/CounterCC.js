import React from 'react'

class CounterCC extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }


    render(){
        return(
            <>
                <h1>Class Component</h1>
                <button
                    onClick={ () => {
                        this.setState({
                            count: 0
                        })
                    }}
                >-</button>
                <i>{this.state.count}</i>
                <button
                    onClick={ () => {
                        this.setState({
                            count: 15
                        })
                    }}
                >+</button>
            </>
        )
    }
}

export {CounterCC}