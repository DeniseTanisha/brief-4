import React, { Component } from 'react';
import albums from "../../../assets/data/data.js";

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
        const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated;
        return (
          <div className={styles.scene}>
            <article
              onClick={this.handleClick}
              className={`${styles.card} ${rotateStyle}`}
            >
              <div className={styles.cardFront}>
                <h3>{this.props.cardData.name}</h3>
                <div className={styles.topSection}>
                  <section className={styles.description}>
                    {this.getDescription()}
                  </section>
                  <img
                    className={styles.picture}
                    src={this.props.cardData.picture}
                  />
                </div>
                <Skills skills={this.props.cardData.skills} />
              </div>
              <div className={styles.cardBack} />
            </article>
          </div>
        );
      }
    }
    
    CardComponent.propTypes = cardTypes.isRequired;
    
 
export default AlbumComponent;