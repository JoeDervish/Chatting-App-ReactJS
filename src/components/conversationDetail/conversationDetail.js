import React, {Component} from 'react';
import './conversationDetail.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import check from '../../images/icons/check.png';
import smileyFace from '../../images/icons/smiley_face.png';
import note from '../../images/icons/note.png';
import clock from '../../images/icons/clock.png';
import history from '../../images/icons/history.png';
import group from '../../images/icons/group.png';
import filter from '../../images/icons/filter.png';
import search from '../../images/icons/search.png';
import add from '../../images/icons/add.png';
import send from '../../images/icons/send.png';

export default class conversationDetail extends Component {
  render() {
    return (
      <div className="component-conversation-detail">
        <div className="conversation-detail-header">
          <div className="title">mom's discharge plan</div>
          <div className="right-nav">
            <button className="nav-item" onClick={this.navigate()}>
              <img className="nav-item-image" src={group} alt="" />
            </button>
            <button className="nav-item" onClick={this.navigate()}>
              <img className="nav-item-image" src={filter} alt="" />
            </button>
            <button className="nav-item" onClick={this.navigate()}>
              <img className="nav-item-image" src={search} alt="" />
            </button>
          </div>
        </div>
        <div className="conversation-creation-info">
          <div className="creation-text">Starter Care Plan created + daily actions added</div>
          <div className="creation-date">12:10p</div>
        </div>
        <CustomScrollbars style={{ height: 612 }} className="scrollbar">
          <div className="conversation-detail-body">
            <div className="conversation-row bubble-right">
              <div className="conversation-bubble">
                <div className="reminder">
                  <div className="title">Daily grooming assistance</div>
                  <div className="date">
                    <div className="icon">
                      <img src={clock} alt="" />
                    </div>
                    <div className="text">
                      <span>Dec 1</span>
                      <i>Daily</i>
                    </div>
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img src={note} alt="" />
                    </div>
                    <span className="text">assist with daily grooming activities such as bathing, teeth, hair</span>                   
                  </div>
                  <div className="footer">
                    <button className="button" onClick={this.navigate()}>
                      <div className="icon">
                        <img src={check} alt="" />
                      </div>
                      <span className="text">done</span>
                    </button>
                    <div className="info">
                      <div className="icon">
                        <img className="icon-image" src={process.env.PUBLIC_URL + "/images/profiles/profile-1.png"} alt="" />
                      </div>
                      <div className="text">
                        <span className="status">Derek Smith completed</span>
                        <span className="status-date">Mar 23 3:23p</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="convesration-info">
                <div className="conversation-owner">me</div>
                <div className="conversation-date">12:20p</div>
                <img className="user-image" src={process.env.PUBLIC_URL + "/images/profiles/profile-1.png"} alt="" />
              </div>
            </div>
            <div className="conversation-row bubble-left">
              <div className="conversation-bubble">
              <div className="case">
                  <div className="title">chest pain</div>
                  <div className="date">
                    <div className="icon">
                      <img src={clock} alt="" />
                    </div>
                    <div className="text">
                      <span>FRI Oct 12 4:27 PM</span>
                      <span className="status-date">kbecker@gmail.com completed - THU Oct 11 3:29 PM</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="status">
                      <div className="icon">
                        <img src={smileyFace} alt="" />
                      </div>
                      <span className="text">Severe</span>        
                    </div>
                    <div className="history">
                      <div className="icon">
                        <img src={history} alt="" />
                      </div>
                      <span className="text">View History</span>
                    </div>           
                  </div>
                </div>
              </div>
              <div className="convesration-info">
                <div className="conversation-owner">me</div>
                <div className="conversation-date">9:12a</div>
                <img className="user-image" src={process.env.PUBLIC_URL + "/images/profiles/profile-2.png"} alt="" />
              </div>
            </div>
            <div className="conversation-row bubble-left">
              <div className="conversation-bubble">I moved Karen’s knitting kit from the study upstairs to the the living room.</div>
              <div className="convesration-info">
                <div className="conversation-owner">SK</div>
                <div className="conversation-date">11:58a</div>
                <img className="user-image" src={process.env.PUBLIC_URL + "/images/profiles/profile-2.png"} alt="" />               
              </div>
            </div>
            <div className="conversation-row bubble-right">
              <div className="conversation-bubble">That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.</div>
              <div className="convesration-info">
              <div className="conversation-owner">me</div>
                <div className="conversation-date">1:45p</div>
                <img className="user-image" src={process.env.PUBLIC_URL + "/images/profiles/profile-2.png"} alt="" />
              </div>
            </div>
          </div>
        </CustomScrollbars>
        <div className="message-box">
          <button className="add-button">
              <img src={add} alt="add" />
          </button>
          <input type="text" placeholder="message" className="message-input" />
          <button className="send-button">
              <img src={send} alt="send" />
          </button>
        </div>     
      </div>
    )
  }

  navigate = () => {
    // do something
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