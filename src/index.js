import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OtherRegionPage from './pages/OtherRegionPage';


const Pagina404 = () => (<h1>Página 404</h1>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/other/region" component={OtherRegionPage} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
