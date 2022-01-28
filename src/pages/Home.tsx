import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import { findAllUnities, Unity } from '../services/unityRestService';

import '../styles/home.css';

export function Home() {
  const [unities, setUnities] = useState<Unity[]>([]);

  useEffect(() => {
    async function findUnities() {
      const response = await findAllUnities();
      setUnities(response);
    }
    if (unities.length === 0) {
      findUnities();
    }
  });

  return (
    <div className="App">
      <NavBar />
      <Container className="tableUnities">
        <Table striped bordered hover size="sm">
          <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {
            unities?.map(
              (unity) => (
                <tr>
                  <td>{unity.name}</td>
                  <td>{unity.description}</td>
                  <td>{unity.id}</td>
                </tr>
              ),
            )
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
