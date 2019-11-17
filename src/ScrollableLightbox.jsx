import React, { Component } from "react";
import "./css/scrollableLightbox.css";
export default class ScrollableLightbox extends Component {
  render() {
    const { show, close, title } = this.props;
    return (
      (show && (
        <div className="lightbox">
          <div className="content">
            <div className="lightbox-header">
              {title}
              <button className="lightbox-close-btn" onClick={close}>
                關閉
              </button>
            </div>
            <hr></hr>
            <div className="lightbox-body">{this.props.children}</div>
          </div>
        </div>
      )) ||
      null
    );
  }
}
