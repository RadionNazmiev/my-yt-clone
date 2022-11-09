import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import { SearchBar } from '.';

const NavBar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        top: 0,
        justifyContent: 'space-between',
        backgound: '#000',
        position: 'sticky',
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} height={45} alt='YT Logo' />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;
