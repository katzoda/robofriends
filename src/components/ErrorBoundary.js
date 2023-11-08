import React, { Component } from 'react';

// ErrorBoundary component will wrap CardList
class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    // similar to try/catch
    // if this function gets triggered we update the state.hasError
    // avalaible since React 16
    // gets paramaters (error, info)
    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. This is not good.</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary;