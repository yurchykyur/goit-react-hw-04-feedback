import React, { Component } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import AppName from 'components/AppName';

import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => {
      return { [opt]: prevState[opt] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return positivePercentage ? positivePercentage : 0;
  };

  render() {
    return (
      <AppContainer>
        <AppName title="Cafe Espresso costumer feedback" />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppContainer>
    );
  }
}
