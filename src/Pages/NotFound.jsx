import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Button variant="info" as={Link} to="/">Go Back Home</Button>
    </Container>
  );
};

export default NotFound;
