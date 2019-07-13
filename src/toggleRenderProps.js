import React, { Component } from 'react'

export default class ToggleRenderProps extends Component {
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
        const { render } = this.props
        return (
            <div>
                {
                    render({
                        on,
                        toggle: this.toggle,
                    })
                }
            </div>
        )
    }
}
