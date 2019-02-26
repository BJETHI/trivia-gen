import React, { Component } from 'react'

export default class QuizErrorComp extends Component {
    render() {
        const { errorMessage } = this.props;
        return (
            <div>
                {errorMessage}
            </div>
        )
    }
}
