import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Fetch extends Component {
    state = {
        data: null,
        loading: false,
    }

    fetchData = () => {
        const { endpoint, method, headers, body } = this.props
        this.setState({ loading: true })
        fetch(endpoint,
            body ? {
                method,
                mode: "cors",
                credentials: "same-origin",
                headers,
                body
            } : {
                    method,
                    mode: "cors",
                    credentials: "same-origin",
                    headers
                })
            .then(response => {
                console.log('response', response)
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw new Error(`Error: ${response.status}`)
                }
            })
            .then(data => {
                this.setState({
                    data,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    error: error.message,
                    loading: false,
                    data: null
                })
            })
    }

    componentDidMount() {
        this.fetchData(this.props.request)
    }

    render() {
        const { data, error, loading } = this.state
        const { children } = this.props
        return (
            <>
                {
                    error &&
                    <div>{error}</div>
                }
                {
                    loading &&
                    <div>loading...</div>
                }
                {
                    data &&
                    children({ data })
                }
            </>
        )
    }
}

Fetch.defaultProps = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
}