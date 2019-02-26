import React, { Component } from 'react'
import styles from './QuizScore.style';
import styleWrapper from '../../libs/styleWrapper';

class QuizScore extends Component {
    render() {
        const { className, score, total } = this.props;
        return (
            <div className={`${className}`}>
                You Managed to score <span className='score'>{score}</span> out of <span className='total'>{total}</span>
            </div>
        )
    }
}

const QuizScoreStyles = styleWrapper(QuizScore, styles);

export default QuizScoreStyles;