import React from 'react';
import './../styles/ScoreRow.css';
import Name from './Name';
import Score from './Score';
import ScoreEdit from './ScoreEdit';

export default class ScoreRow extends React.Component {
  constructor(props) {
    super(props);

    this.onOk = this.onOk.bind(this);
    this.onPen = this.onPen.bind(this);

    this.state = {
      txt: false
    };
  }

  onPen() {
    this.setState({txt: true})
  }

  onOk(player) {
    this.setState({txt: false})
    this.props.scoreChange(player)
  }

  render() {
    return (
			<div className="ScoreRowContainer">
        <Name name={this.props.name} />
        <Score score={this.props.score} />
        {!this.state.txt && <img className="PenPng" src={require('./../img/pen.png')} alt='logo' onClick={this.onPen} />}
        {this.state.txt && <ScoreEdit onOk={(player) => this.onOk(player)} name={this.props.name} score={this.props.score} />}
			</div>
		)
  }
}
