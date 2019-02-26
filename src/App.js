import React, { Component } from 'react';
import QuizBuilder from './Components/QuizBuilder';
import QuestionWrapper from './Components/QuestionWrapper';

import QuizHeader from './Components/QuizHeader';
import QuizFooter from './Components/QuizFooter';

// import { items } from './mockData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      quizLoaded: false,
    }
  }
  handleButtonClick = (amount = 5, category = 9, difficulty = 'easy', type = 'multiple') => {
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
      .then(response => response.json())
      .then(json => this.setState({ quizLoaded: true, items: json }));
  }
  render() {
    const { quizLoaded, items } = this.state;
    // const quizLoaded = true;
    return (
      <div>
        <QuizHeader />
        {quizLoaded ?
          <div><QuestionWrapper items={items} /></div> :
          <div><QuizBuilder onQuizStart={this.handleButtonClick} /></div>}
        <QuizFooter />
      </div>
    )
  };
}

export default App;
