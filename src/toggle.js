import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState(state => ({
            on: !state.on
        }))
    }
    render() {
        const { on } = this.state
        return (
            <div>
                {
                    on &&
                    <h1>Toggle Me!</h1>
                }
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        )
    }
}
