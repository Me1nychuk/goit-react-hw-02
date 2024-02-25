import PropTypes from 'prop-types';
import css from './Feedback.module.css';
const Feedback = ({ feedback, totalFeedback }) => {
 const { good, neutral, bad } = feedback;
  return (
   
      <ul className={css.feedbackList} >
        <li className={css.feedbackListItem}>Good: {good}</li>
        <li className={css.feedbackListItem}>Neutral: {neutral}</li>
        <li className={css.feedbackListItem}>Bad: {bad}</li>
        <li className={css.feedbackListItem}>Total: {totalFeedback}</li>
        <li className={css.feedbackListItem}>Positive: {Math.round(((good + neutral) / totalFeedback) * 100) || 0}%</li>
      </ul>
    )
  
  
};
Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  labels: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
};

export default Feedback;
