import React from 'react';
import './../styles/SjakkHeaderSection.css';
import SjakkBanner from './SjakkBanner';

export default class SjakkHeaderSection extends React.Component {
  render() {
    return (
			<div className="SjakkHeaderSectionContainer">
				<SjakkBanner />
			</div>
		)
  }
}
