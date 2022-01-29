import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { findAllUnities, Unity } from '../services/unityRestService';

import '../styles/home.css';
import { useAdb } from '../hooks/useAdb';

export function Home() {
  const [unities, setUnities] = useState<Unity[]>([]);
  const history = useHistory();
  const { currentUnity } = useAdb();

  useEffect(() => {
    async function findUnities() {
      const response = await findAllUnities();
      setUnities(response);
    }
    if (unities.length === 0) {
      findUnities().then();
    }
  });

  const handleClickUnity = (event: any) => {
    const id = event.target.value;
    const unity = unities[id];
    currentUnity(unity);
    history.push('/unities');
  };

  return (
    <div className="App">
      <NavBar />
      <Container className="tableUnities">
        <h1>Unities</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            unities?.map(
              (unity) => (
                <tr key={unity.id}>
                  <td>{unity.name}</td>
                  <td>{unity.description}</td>
                  <td>
                    <Button
                      value={unities.indexOf(unity)}
                      onClick={(event) => handleClickUnity(event)}
                    >
                      Open
                    </Button>
                  </td>
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
