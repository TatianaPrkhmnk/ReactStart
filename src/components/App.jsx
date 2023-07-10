import React from 'react';
import user from '../assets/user.json'
import data from '../assets/data.json'

import { Container } from 'react-bootstrap';
import { Profile } from './Profile/profile';
import {Statistics} from './Statistics/statistics'

export const App = () => {
  return (
    <Container>

    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    /> 
    
    <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      </Container>
  );
};


