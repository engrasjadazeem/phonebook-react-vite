import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Form from 'react-bootstrap/Form';

export default function NewContact(props){
  let firstName = '';
  let lastName = '';
  let phoneNumber = '';

  const updateFirstName = (name) => {
    firstName = name;
  }

  const updateLasttName = (name) => {
    lastName = name;
  }

  const updatePhoneNumber = (number) => {
    phoneNumber = number;
  }

  const emptyFields = () => {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
  }

  const handleClick = (event) => {
    event.preventDefault();
    props.addNewContact([firstName, lastName, phoneNumber]);
    emptyFields();
  }

  return (<div>
    <Form onSubmit={handleClick}>
      <h4>Add New Contact</h4>
      <Form.Group className='mt-1'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" id="firstName" onChange={e => updateFirstName(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className='mt-1'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  id="lastName" onChange={e => updateLasttName(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group className='mt-1'>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text"  id="phoneNumber" onChange={e => updatePhoneNumber(e.target.value)}></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-3'>
        Add New
      </Button>
    </Form>
  </div>);
}