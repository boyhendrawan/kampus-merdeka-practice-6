import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col,Card } from "react-bootstrap";

function Dashboard() {

  // define global var
  const {user}=useSelector(features=>features.auth);
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column justify-content-center text-center ">
           <Card>
            <Card.Header>Dashboard</Card.Header>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>Hello myname is {user?.name} </Card.Text>

            </Card.Body>
            <Card.Footer>{user?.email}</Card.Footer>

           </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
