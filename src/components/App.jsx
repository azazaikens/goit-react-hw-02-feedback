import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbackOptions = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage =
      total === 0 ? 0 : Math.floor((good / total) * 100);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.countTotalFeedbackOptions}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            total !== 0 ? (
              <Statics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        />
      </div>
    );
  }
}
