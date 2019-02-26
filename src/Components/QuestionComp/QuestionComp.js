import React, { Component } from 'react';
import styles from './QuestionComp.style';
import styleWrapper from '../../libs/styleWrapper';

class QuestionComp extends Component {
    validateOption = (e) => {
        const { question: { correct_answer }, nextQuestion } = this.props;
        const isCorrect = e.target.value === correct_answer;
        nextQuestion(isCorrect);
    }
    render() {
        const { question: { category, difficulty, question, correct_answer, incorrect_answers }, className } = this.props;
        let optionArray = [...incorrect_answers, correct_answer];
        return (
            <div className={`row ${className}`}>
                <div className='col-xs-6 question-category'>Category : {category}</div>
                <div className='col-xs-6 question-difficulty'>Difficulty : {difficulty}</div>
                <div className='col-xs-12 question-statement'>{question}</div>
                {optionArray && optionArray.map(option => <div className='col-xs-6 option-div'>
                    <button className='option-button' onClick={(e) => this.validateOption(e)} value={option}>{option}</button>
                </div>)}
            </div>
        )
    }
};

const QuestionCompStyles = styleWrapper(QuestionComp, styles);

export default QuestionCompStyles;
