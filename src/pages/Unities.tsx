import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import { Unity } from '../services/unityRestService';
import { useAdb } from '../hooks/useAdb';
import { NavBar } from '../components/NavBar';

import '../styles/unity.css';
import { Players } from './Players';

export function Unities() {
  const history = useHistory();
  const [unity, setUnity] = useState<Unity>();
  const { unityContext } = useAdb();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdateName = (newName: string) => setName(newName);
  const handleUpdateDescription = (newDescription: string) => setDescription(newDescription);

  useEffect(() => {
    if (unityContext === undefined || unityContext.name === undefined) {
      history.push('/');
      return;
    }
    setUnity(unity);
    setName(unityContext.name);
    setDescription(unityContext.description);
  }, [unityContext, unity, history]);

  return (
    <>
      <NavBar title="unities" />
      <Container>
        <div className="unities">
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                value={name}
                type="input"
                onChange={(event) => handleUpdateName(event.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
              <FormControl
                value={description}
                as="textarea"
                onChange={(event) => handleUpdateDescription(event.target.value)}
              />
            </InputGroup>
          </div>
          <Button>Save</Button>
        </div>
      </Container>
      <Container>
        <Players unity={unityContext} />
      </Container>

    </>
  );
}
