import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '40px'
        }}
      >
        <li>
          <button
            name="good"
            type="button"
            onClick={() => onLeaveFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            name="neutral"
            type="button"
            onClick={() => onLeaveFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            name="bad"
            type="button"
            onClick={() => onLeaveFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export { FeedbackOptions };
