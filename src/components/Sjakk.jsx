import React from 'react';
import './../styles/Sjakk.css';
import SjakkHeaderSection from './../containers/SjakkHeaderSection';
import ScoreBoard from './../containers/ScoreBoard';

export default class Sjakk extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      
    };
	}

  render() {
    return (
			<div className="SjakkContainer">
        <SjakkHeaderSection />
        <ScoreBoard />
			</div>
		)
  }
}
