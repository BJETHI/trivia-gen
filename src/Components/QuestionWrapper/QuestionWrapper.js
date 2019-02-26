import React, { Component } from 'react';
import styleWrapper from '../../libs/styleWrapper';
import styles from './QuestionWrapper.style';
import { questionNotLoadedMessage } from './QuestionWrapper.constants';

import QuizErrorComp from '../QuizErrorComp';
import QuestionComp from '../QuestionComp';

class QuestionWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstQuestion: true,
            lastQuestion: false,
            currentQuestion: 0,
            maxLengthAllowed: 4,
        };
    }

    componentDidMount() {
        const { items } = this.props;
        const results = items && items.results;
        const maxLength = results && results.length - 1;
        this.setState({ maxLengthAllowed: maxLength });
    }

    nextQuestion = () => {
        const { currentQuestion } = this.state;
        this.setState(
            { currentQuestion: currentQuestion + 1 },
            this.checkLastQuestion
        );
    };

    prevQuestion = () => {
        const { currentQuestion } = this.state;
        this.setState(
            { currentQuestion: currentQuestion - 1 },
            this.checkFirstQuestion
        );
    };

    checkLastQuestion = () => {
        const { currentQuestion, maxLengthAllowed } = this.state;
        this.setState({ firstQuestion: false });
        if (currentQuestion === maxLengthAllowed) {
            this.setState({ lastQuestion: true });
        }
    }

    checkFirstQuestion = () => {
        const { currentQuestion } = this.state;
        this.setState({ lastQuestion: false });
        if (currentQuestion === 0) {
            this.setState({ firstQuestion: true });
        }
    }

    render() {
        const { items, className } = this.props;
        const questions = items && items.results;
        const { currentQuestion, maxLengthAllowed, firstQuestion, lastQuestion } = this.state;
        return (
            <div className={`${className}`}>
                {!!questions ? <QuestionComp question={questions[currentQuestion]} /> : <QuizErrorComp errorMessage={questionNotLoadedMessage} />}
                {!!questions &&
                    <div className='control-buttons row'>
                        <div className='col-xs-6 prev-btn-col'>
                            {<button onClick={this.prevQuestion} className='prev-button' disabled={!!firstQuestion}>Previous</button>}
                        </div>
                        <div className='col-xs-6 next-btn-col'>
                            {<button onClick={this.nextQuestion} className='next-button' disabled={!!lastQuestion}>Next</button>}
                        </div>
                        <div className='col-xs-12 submit-btn-col'>
                            {<button className='submit-button' disabled={!(currentQuestion === maxLengthAllowed)}>Submit</button>}
                        </div>
                    </div>}
            </div>
        )
    }
}

const QuestionWrapperStyles = styleWrapper(QuestionWrapper, styles);

export default QuestionWrapperStyles;
