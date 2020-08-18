import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    clickHandler = () => {
        // this.setState((prevState) => 
        // ({ count: prevState.count + 2 }), () => {
        //     console.log(`callback value = ${this.state.count}`)
        // })

        // this.setState((prevState, props, dummy) =>
        //     ({ count: prevState.count + parseInt(props.step) }), () => {
        //         console.log(`callback value = ${this.state.count}`)
        //     })
        this.setState((prevState, props) => {
            return { count: prevState.count + parseInt(props.step) }
        }, () => {
            console.log(`callback value = ${this.state.count}`)
        })

        console.log(`button clicked ${this.state.count} times`)
    }      
    clickHandler10 = () => {
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
        this.clickHandler()
    }

    render() {
        return (
            <div>
                <h2>counter={this.state.count}</h2>
                <button onClick={this.clickHandler}>click</button>
                <button onClick={this.clickHandler10}>10x click</button>
            </div>
        )
    }
}
