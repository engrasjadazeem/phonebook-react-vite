import Table from 'react-bootstrap/Table';

export default function ContactList(props) {
  const listItems = props.contacts.map((item, index) => <tr key={index}>
          <td>{index+1}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.phoneNumber}</td>
        </tr>);

  return (<Table striped bordered hover className='mt-4'>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
      {listItems}
    </tbody>
  </Table>);
}