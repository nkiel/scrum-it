import React, { useState } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';

import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Link href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Typography>Vite + React</Typography>
      <Box className="card">
        <Button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default App;
