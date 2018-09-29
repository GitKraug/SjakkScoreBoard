import React from 'react';
import './../styles/ScoreBoard.css';
import ScoreRow from './ScoreRow';

export default class ScoreBoard extends React.Component {
	constructor(props) {
    super(props);
    
    this.scoreChange = this.scoreChange.bind(this);

    this.state = {
      score: [
        this.createPlayer("Eirik Fykse"),
        this.createPlayer("Steinar Kraugerud"),
        this.createPlayer("Asbjørn Steinskog"),
        this.createPlayer("Alexander Premer"),
        this.createPlayer("Mads Erdal"),
        this.createPlayer("Edvard Erdal"),
        this.createPlayer("Kjetil Sørbø")
      ]
    };
	}

  createPlayer(name) {
    var storedScore = localStorage.getItem(name)

    return {
      "name": name,
      "score": storedScore ? storedScore : 0
    }
  }

  validNr(nr) {
    return !isNaN(nr)
  }

  scoreChange(player) {
    if(this.validNr(player.score)) {
      this.updateScores(player)
    }
  }

  updateScores(player) {
    var players = this.state.score
    for(var i = 0; i < players.length; i++) {
      if(players[i].name === player.name) {
        players[i] = player
      }
    }

    this.setState({
      score: players
    })

    this.updateLocalStorage(players)
  }

  sortScores() {
    var scoreList = []
    var players = this.state.score

    var sorted = false

    while(!sorted) {
      var max = players[0]

      for(var j = 0; j < players.length; j ++) {
        if(players[j].score >= max.score) {
          max = players[j]
        }
      }

      players = players.filter(a => a.name!==max.name)
      scoreList.splice(0, 0, max)

      if(players.length===0) {
        sorted = true
      }
    }

    return scoreList.reverse()
  }

  updateLocalStorage(players) {
    for(var i = 0; i < players.length; i++) {
      localStorage.setItem(players[i].name, players[i].score)
    }
  }

  render() {
    return (
			<div className="ScoreBoardContainer">
        {
          this.sortScores(this.state.score).map(s => <ScoreRow name={s.name} score={s.score} scoreChange={(player) => this.scoreChange(player)} />)
        }
			</div>
		)
  }
}
