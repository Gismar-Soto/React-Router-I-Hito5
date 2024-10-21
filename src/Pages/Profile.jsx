import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Profile = () => {
  const userEmail = 'user@example.com';  // Static email for now

  return (
    <Container style={{ marginTop: '50px' }}>
      <h2>Profile</h2>
      <p>Email: {userEmail}</p>
      <Button variant="danger">Log Out</Button>
    </Container>
  );
};

export default Profile;
