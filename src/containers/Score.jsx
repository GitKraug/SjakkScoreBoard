import React from 'react';
import './../styles/Score.css';

export default class Score extends React.Component {

  render() {
    return (
			<div className="ScoreContainer">
        {
          this.props.score
        }
			</div>
		)
  }
}
