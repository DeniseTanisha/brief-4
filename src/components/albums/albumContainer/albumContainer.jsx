import React, { Component } from 'react';
import AlbumComponent from "../albumComponent";
import PropTypes from "prop-types";
//import SearchBar from "../../searchBar/searchBar"


class AlbumContainer extends Component {
    state = {
      albums: [],
      searchText: "",
      filteredList: []
    };
          this.setState({
            albums: albums,
            filteredList: albums
          });
        });
    }
  
    setSearchText = event => {
      const searchText = event.target.value;
      const filteredList = this.filterAlbums(searchText);
  
      this.setState({ searchText: searchText, filteredList });
    };
  
    filterAlbums = searchText => {
      return this.state..filter(album => {
        const ar = Object.values(album).filter(str => {
          if (typeof str == "string") {
            return str.toLowerCase().includes(searchText.toLowerCase());
          }
          return false;
        });
        return ar.length > 0 ? true : false;
      });
    };
  
    // render() {
    //   return (
    //       <SearchBar
    //         searchText={this.state.searchText}
    //         setSearchText={this.setSearchText}
    //         />
          
        // this.state.filteredList.map((album, index) => (
        //       <AlbumComponent albumData={album} key={index} />
        //     ))}

    //   )
    // };
    
  
  
  
  export default AlbumContainer;
