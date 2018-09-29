import React from 'react';
import './../styles/Name.css';

export default class Name extends React.Component {

  render() {
    return (
			<div className="NameContainer">
        {
          this.props.name
        }
			</div>
		)
  }
}
