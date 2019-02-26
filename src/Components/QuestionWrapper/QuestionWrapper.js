import React, { Component } from 'react';
import styleWrapper from '../../libs/styleWrapper';
import styles from './QuestionWrapper.style';
import { questionNotLoadedMessage } from './QuestionWrapper.constants';

import QuizErrorComp from '../QuizErrorComp';
import QuestionComp from '../QuestionComp';
import QuizScore from '../QuizScore';

class QuestionWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            maxLengthAllowed: 4,
            score: 0,
        };
    }

    componentDidMount() {
        const { items } = this.props;
        const results = items && items.results;
        const maxLength = results && results.length - 1;
        this.setState({ maxLengthAllowed: maxLength });
    }

    nextQuestion = (scoreInfo) => {
        const { currentQuestion, score } = this.state;
        if (scoreInfo) {
            this.setState({ score: score + 1 });
        }
        this.setState(
            { currentQuestion: currentQuestion + 1 },
        );
    };

    render() {
        const { items, className } = this.props;
        const questions = items && items.results;
        const { currentQuestion, maxLengthAllowed, score } = this.state;
        const questionCompleted = currentQuestion === maxLengthAllowed + 1;
        return (
            <div className={`${className}`}>
                {(!!questions && !questionCompleted) &&
                    <QuestionComp question={questions[currentQuestion]} nextQuestion={this.nextQuestion} />}
                {!items && <QuizErrorComp errorMessage={questionNotLoadedMessage} />}
                {questionCompleted && <div><QuizScore score={score} total={maxLengthAllowed + 1} /></div>}
            </div>
        )
    }
}

const QuestionWrapperStyles = styleWrapper(QuestionWrapper, styles);

export default QuestionWrapperStyles;
