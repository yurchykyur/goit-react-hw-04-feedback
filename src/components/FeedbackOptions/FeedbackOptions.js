import PropTypes from 'prop-types';

import {
  FeedbackContainer,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackContainer>
      {options.map(option => {
        return (
          <FeedbackItem key={option}>
            <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </FeedbackBtn>
          </FeedbackItem>
        );
      })}
    </FeedbackContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
