import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <List>
          <ListItem
            title="Course Name"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Course ID"
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Details"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Start date"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="Location"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
