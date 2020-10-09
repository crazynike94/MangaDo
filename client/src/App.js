import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as WEBSOCKET_ACTIONS from './redux/actions/websocket/websocket';
import './App.css';
import Header from './components/Header';
import Board from './components/scenes/Board';
import PSD from './components/PSD/Main';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_PATH);
    ws.onopen = () => {
      console.log('ws', ws);
      console.log('ws opened');
    };
    ws.onclose = () => console.log('ws closed');

    ws.onmessage = function (event) {
      console.log(event.data);
    };

    ws.onmessage = function (event) {
      console.log('new onmessage', event.data);
    };

    dispatch(WEBSOCKET_ACTIONS.RECORD_WEBSOCKET(ws));
    return () => {
      ws.close();
    };
  }, []);

  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route exact path='/psd/:path'>
            <PSD />
          </Route>
          <Route exact path='/catalog'>
            <Board />
          </Route>
          <Route exact path='/catalog/:params'>
            <Board />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
