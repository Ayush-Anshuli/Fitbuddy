import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ExercisDetails from './components/ExercisDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles'
const router = createBrowserRouter ([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/exercisedetails/:id',
        element:<ExercisDetails/>
      },

    ]
  }
])
const theme = createTheme();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>

  <ChakraProvider>
    <RouterProvider router={router}/>
    
  </ChakraProvider>
  </ThemeProvider>
   

);

reportWebVitals();
