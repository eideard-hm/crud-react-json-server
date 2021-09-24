import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes/AppRouter';

//import style css of react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <AppRoutes />,
  document.getElementById('root')
);