import React, { Component } from "react";
import styles from "./albumComponent.module.scss";
import PropTypes from "prop-types";

class AlbumComponent extends Component {
  render() {
    return (
      <div className={styles.scene}>
          <ul className={styles.albumDetails}>
              <li> Artist: {this.props.albumData.artist} </li>
              <li> Album Name: {this.props.albumData.albumName}</li>
              <li> Genre: {this.props.albumData.genre}</li>
              <li> Released: {this.props.albumData.released}</li>
            </ul>
          </div>
    )
  }
}


export default AlbumComponent;
