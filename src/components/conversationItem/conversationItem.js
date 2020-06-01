import React, {Component} from 'react';
import './conversationItem.scss';

export default class conversationItem extends Component {
  render() {
    return (
      <div className="component-conversation-item">
        <button onClick={this.navigate()} className="conversation-item">
          <img className={"conversation-image " + this.props.read} src={process.env.PUBLIC_URL + this.props.image} alt={(this.props.image).replace('../../../images/profiles/','')} />
          <div className="conversation-text">
            <div className={"conversation-title " + this.props.read}>{this.props.title}</div>
            <div className={"conversation-user " + this.props.read}><i>{this.props.username}</i></div>
            <div className="conversation-content">{this.props.content}</div>
          </div>
          <div className="conversation-info">
            <div className="conversation-date">{this.props.date}</div>
            <div className={"conversation-counter " + this.props.read}>{this.props.counter}</div>
          </div>
        </button>
      </div>
    )
  }

  navigate = () => {
    // do something
  }
}