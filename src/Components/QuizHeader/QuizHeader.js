import React, { Component } from 'react';
import styles from './QuizHeader.style';
import styleWrapper from '../../libs/styleWrapper';

class QuizHeader extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`}>
                QUIZ HEADER
            </div>
        )
    }
}

const QuizHeaderStyles = styleWrapper(QuizHeader, styles);

export default QuizHeaderStyles;