import React, { Component } from "react";
import { albumTypes } from "../propTypes.js";

class AlbumComponent extends Component {
  getDescription = () => {
    const description = this.props.cardData.description;
    return description.length > 120
      ? description.substring(0, 120) + "..."
      : description;
  };

  state = {
    isFaceUp: true
  };

  handleClick = () => {
    this.setState({
      isFaceUp: !this.state.isFaceUp
    });
  };

  render() {
    const rotateStyle = this.state.isFaceUp ? "" : styles.albumRotated;
    return (
      <div className={styles.scene}>
        <article
          onClick={this.handleClick}
          className={`${styles.album} ${rotateStyle}`}
        >
          <div className={styles.albumFront}>
            <h3>{this.props.albumData.albumName}</h3>
            <img className={styles.image} src={this.props.cardData.image} />
          </div>
          <div className={styles.cardBack}>
            <h3>{this.props.albumData.albumName}</h3>
            <ul className={styles.albumDetails}>
              <li> Artist: {this.props.albumData.artist} </li>
              <li> Album Name: {this.props.albumData.albumName}</li>
              <li> Genre: {this.props.albumData.genre}</li>
              <li> Released: {this.props.albumData.released}</li>
            </ul>
          </div>
        </article>
      </div>
    );
  }
}

albumComponent.propTypes = albumTypes.isRequired;

export default AlbumComponent;
