import React from 'react';
import './../styles/SjakkBanner.css';

export default class SjakkBanner extends React.Component {
  render() {
    return (
	  <div className="SjakkBanner">
        <img className="ChessPng" src={require('./../img/sjakk.png')} alt='logo' />
        <p className="BannerTextHeading">Resultater</p>
      </div>
	)
  }
}
