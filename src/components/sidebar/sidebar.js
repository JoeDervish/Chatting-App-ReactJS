import React, {Component} from 'react';
import './sidebar.scss';
import logo from '../../images/logo.png';
import conversationsIcon from '../../images/icons/conversations.png';
import settingsIcon from '../../images/icons/settings.png';
import profileIcon from '../../images/icons/profile.png';
import exitIcon from '../../images/icons/exit.png';

export default class sidebar extends Component {
  render() {
    return ( 
      <div className="component-sidebar">
        <button className="brand" onClick={this.navigate()}>
          <img className="logo-img" src={logo} alt="logo" />
        </button>        
        <ul className="sidebar-item-list">
          <li className="sidebar-item active">
            <button onClick={this.navigate()}>
              <img className="sidebar-item-image" src={conversationsIcon} alt="conversation" />
            </button>
          </li>
          <li className="sidebar-item">
            <button onClick={this.navigate()}>
              <img className="sidebar-item-image" src={profileIcon} alt="profile" />
            </button>
          </li>
          <li className="sidebar-item">
            <button onClick={this.navigate()}>
              <img className="sidebar-item-image" src={settingsIcon} alt="settings" />
            </button>
          </li>
          <li className="sidebar-item">
            <button onClick={this.navigate()}>
              <img className="sidebar-item-image" src={exitIcon} alt="exit" />
            </button>
          </li>
        </ul>
      </div>
    )
  }

  navigate = () => {
    // do something
  }
}