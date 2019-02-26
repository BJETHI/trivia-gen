import React, { Component } from 'react';
import OptionSelector from '../OptionSelector';
import { AmountData, CategoryData, DifficultyData, QuizTypeData } from './QuizBuilder.constants';
import styleWrapper from '../../libs/styleWrapper';
import styles from './QuizBuilder.style';

class QuizBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 5,
            category: 9,
            difficulty: 'easy',
            type: 'multiple',
        };
    };

    handleQuizStart = () => {
        const { onQuizStart } = this.props;
        const { amount, category, difficulty, type } = this.state;
        onQuizStart(amount, category, difficulty, type);
    };

    updateQuizParam = (val, type) => {
        this.setState({ [type]: val });
    };

    render() {
        const { className } = this.props;
        const { amount, category, difficulty, type } = this.state;
        return (
            <div className={`${className}`}>
                <OptionSelector data={AmountData.dataNodes} type='amount' userMessage={AmountData.userMessage} updateQuizParam={this.updateQuizParam} selected={amount} />
                <OptionSelector data={CategoryData.dataNodes} type='category' userMessage={CategoryData.userMessage} updateQuizParam={this.updateQuizParam} selected={category} />
                <OptionSelector data={DifficultyData.dataNodes} type='difficulty' userMessage={DifficultyData.userMessage} updateQuizParam={this.updateQuizParam} selected={difficulty} />
                <OptionSelector data={QuizTypeData.dataNodes} type='type' userMessage={QuizTypeData.userMessage} updateQuizParam={this.updateQuizParam} selected={type} />
                <button onClick={this.handleQuizStart} className='quiz-btn'>Start Quiz</button>
            </div>
        )
    }
}

const QuizBuilderStyles = styleWrapper(QuizBuilder, styles);

export default QuizBuilderStyles;
