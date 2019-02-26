import React, { Component } from 'react';
import styles from './QuizFooter.style';
import styleWrapper from '../../libs/styleWrapper';

class QuizFooter extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`}>
                QUIZ FOOTER
            </div>
        )
    }
}

const QuizFooterStyles = styleWrapper(QuizFooter, styles);

export default QuizFooterStyles;