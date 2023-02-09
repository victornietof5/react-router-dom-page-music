import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SoundWave } from './routes/SoundWave';
import { Discover } from './routes/Discover';
import { Join } from './routes/Join';
import './index.css';

const router= createBrowserRouter ([
  {
    path: "/", element: <SoundWave />,
  },
  {
    path: "/discover", element: <Discover />,
  },
  {
    path: "/join", element: <Join />,
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>  
  
);

