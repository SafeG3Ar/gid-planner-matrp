import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
const Signout = () => {
  Meteor.logout();
  return (
    <Header id="signout-page" as="h2" textAlign="center">
      <p>You are signed out.</p>
    </Header>
  );
};

export default Signout;
