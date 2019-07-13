import React, { Component } from 'react'

export default class ToggleRPC extends Component {
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
        const { children } = this.props
        return children({
            on,
            toggle: this.toggle,
        })

    }
}
