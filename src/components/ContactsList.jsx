import Table from "react-bootstrap/Table";
import React from "react";

export default function ContactList(props) {
  const {contactsList} = props;
  const listItems = contactsList.map((item, index) => (
    <tr key={`${index}-${item.phoneNumber}`}>
      <td>{index + 1}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.phoneNumber}</td>
    </tr>
  ));

  return (
    <div>
      {contactsList.length > 0 && (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </Table>
      )}
    </div>
  );
}
