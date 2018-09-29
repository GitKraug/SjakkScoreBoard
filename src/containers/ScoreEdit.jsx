import React from 'react';
import './../styles/ScoreEdit.css';

export default class ScoreEdit extends React.Component {
  constructor(props) {
    super(props);

    this.scoreOk = this.scoreOk.bind(this);
    this.scoreEntered = this.scoreEntered.bind(this);

    this.state = {
      txt: '',
      player: {"name": this.props.name, "score": this.props.score}
    };
  }

  scoreEntered(event) {
      this.setState({
          txt: event.target.value,
          player: this.state.player
      })
  }

  scoreOk() {
      this.props.onOk({
        "name": this.props.name, "score": this.state.txt === '' ? this.props.score : parseFloat(this.state.txt)
      })
  }

  render() {
    return (
        <div className="ScoreEditContainer">
          <input className="PlayerNameInput" placeholder={"0"} onChange={this.scoreEntered} value={this.state.txt} ref={"PlayerNameInputField"} autoFocus />
          <div className="okBtn" onClick={this.scoreOk}>
            <p className="okTxt">OK</p>
          </div>
        </div>
		)
  }
}
