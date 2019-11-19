import React, { Component } from "react";
import "./css/scrollableLightbox.css";
export default class ScrollableLightbox extends Component {
  render() {
    const { show, close, title } = this.props;
    return (
      <div className={show ? "lightbox" : "lightbox lightbox-close"}>
        <div
          className={
            show
              ? "lightbox-content lightbox-visible"
              : "lightbox-content lightbox-hidden"
          }
        >
          <button className="lightbox-close-btn" onClick={close}></button>
          <div className="lightbox-header">
            <div className="lightbox-title">{title}</div>
          </div>
          <div className="lightbox-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
