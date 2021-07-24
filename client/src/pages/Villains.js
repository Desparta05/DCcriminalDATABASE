import React, { Component } from 'react';
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import ProfileCard from "../components/ProfileCard";
// import { List, ListItem } from "../components/List";
// import { Col, Row, Container } from "../components/Grid";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
// import SearchField from '../components/SearchField';
import villains from "../villains.json"

class Villains extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    villains
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const villains = this.state.villains.filter(villain => villain._id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ villains });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Villains List</Header>
        {this.state.villains.map(villain => (
          <ProfileCard
          key={villain._id} 
          {...villain}

          />
        ))}
      </Wrapper>
    );
  }
}

export default Villains;

// Alias, Image, Name, City, Gender, Height, Weight, EyeColor, HairColor, Powers, Description
