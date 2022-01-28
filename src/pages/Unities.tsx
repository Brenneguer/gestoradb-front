import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Unity } from '../services/unityRestService';
import { useAdb } from '../hooks/useAdb';
import { NavBar } from '../components/NavBar';

export function Unities() {
  const history = useHistory();
  const [unity, setUnity] = useState<Unity>();
  const { unityContext } = useAdb();

  useEffect(() => {
    if (unityContext === undefined) {
      history.push('/');
    }
    setUnity(unity);
  }, [unityContext, unity, history]);

  return (
    <>
      <NavBar title="unities" />
      <Container className="tableUnities">
        <div>
          <div>
            {
              unityContext?.name
            }
          </div>
          <div>
            {
              unityContext?.description
            }
          </div>
          <div>
            {
              unityContext?.id
            }
          </div>
        </div>
      </Container>

    </>
  );
}
