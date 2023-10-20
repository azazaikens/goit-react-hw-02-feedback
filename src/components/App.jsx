import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (type) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  const handleResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const onClickResetForm = (event) => {
    const { name } = event.target;
    if (name !== "good" && name !== "neutral" && name !== "bad") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
  }


  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={handleLeaveFeedback}
            onResetFeedback={handleResetFeedback}
          />
        </Section>
        <Section>
          <Statics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
            onClick={onClickResetForm}
          />
        </Section>
      </div>
    );
}
