import React, {Component} from 'react';
import './conversationsList.scss'
import newCovesration from '../../images/icons/new_conversation.png';
import ConvesationItem from '../conversationItem/';
import conversationData from '../../data/conversations.json';
import { Scrollbars } from 'react-custom-scrollbars';

export default class conversationsList extends Component {
  render() {
    return (
      <div className="component-conversations-list">
        <div className="conversations-list-header">
          <div className="text">Conversations</div>          
          <div className="icon">
            <img src={newCovesration} alt="new_conversation" />
          </div>
        </div>
        <div className="conversations-list">
        <CustomScrollbars style={{ width: 380, height: 612 }} className="scrollbar">
        {conversationData.map((data, index) => {
            return <ConvesationItem key={data.id} title={data.title} username={data.username} content={data.content} date={data.date} read={data.read} counter={data.counter} image={data.image} conversation={data} />
          })}  
        </CustomScrollbars>          
        </div>
      </div>
    ) 
  }
}

class CustomScrollbars extends Component {
  constructor(props) {
    super(props);
    this.renderView = this.renderView.bind(this);
    this.renderTrackVertical = this.renderTrackVertical.bind(this);
    this.renderThumbVertical = this.renderThumbVertical.bind(this);
  }

  renderView({ ...props }) {
      return (
          <div className="view" {...props}/>
      );
  }

  renderTrackVertical({ ...props }) {
    return (
        <div className="track-vertical" {...props}/>
    );
  }

  renderThumbVertical({ ...props }) {
    return (
        <div className="thumb-vertical" {...props}/>
    );
  }

  render() {
      return (
          <Scrollbars
              renderView={this.renderView}
              renderTrackVertical={this.renderTrackVertical} 
              renderThumbVertical={this.renderThumbVertical} 
              {...this.props}/>
      );
  }
}