import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function NewContact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const emptyFields = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.addNewContact([firstName, lastName, phoneNumber]);
    emptyFields();
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
        <h4>Add New Contact</h4>
        <Form.Group className="mt-1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-1">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add New
        </Button>
      </Form>
    </div>
  );
}
