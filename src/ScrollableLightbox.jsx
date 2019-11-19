import React, { Component } from "react";
import "./css/scrollableLightbox.css";
export default class ScrollableLightbox extends Component {
  render() {
    const { show, close, title } = this.props;
    return (
      (show && (
        <div className="lightbox">
          <div className="content">
            <button className="lightbox-close-btn" onClick={close}></button>
            <div className="lightbox-header">
              <div className="lightbox-title">{title}</div>
            </div>
            <div className="lightbox-body">{this.props.children}</div>
          </div>
        </div>
      )) ||
      null
    );
  }
}
