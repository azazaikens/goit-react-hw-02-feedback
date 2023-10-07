const Statics = ({ good, neutral, bad, total, positivePercentage }) => {
//   const total = good + neutral + bad;
//   const countPositiveFeedbackPercentage =
//     total > 0 ? Math.floor((good / total) * 100) : 0;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutal: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive Feedback:
          {positivePercentage} %
        </li>
      </ul>
    </div>
  );
};

export { Statics };