import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BreadcrumbTrail from './components/BreadcrumbTrail';
import Header from './components/Header';
import LogInForm from './components/LogInForm/index';
import PrivateRoute from './components/PrivateRoute';
import PSD from './components/PSD/Main';
import RegistrationForm from './components/RegistrationForm/index';
import Board from './components/scenes/Board';
import * as WEBSOCKET_ACTIONS from './redux/actions/websocket/websocket';
// import MainPage from './components/MainPage';

function App() {
  const dispatch = useDispatch();

  const [wsStatus, setWsStatus] = useState(0);

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_PATH);
    ws.onopen = () => {
      console.log('ws opened');
      dispatch(WEBSOCKET_ACTIONS.RECORD_WEBSOCKET(ws));
    };
    ws.onclose = () => {
      console.log('ws closed', wsStatus);
      dispatch(WEBSOCKET_ACTIONS.RECORD_WEBSOCKET(''));
      setWsStatus(wsStatus + 1);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(WEBSOCKET_ACTIONS.WS_DISPATCH(data));
    };

    return () => {
      ws.close();
    };
  }, [dispatch, wsStatus]);

  return (
    <Router>
      <main>
        <Header />
        <BreadcrumbTrail />
        <Routes>
          {/* <Route exact path='/' element={<MainPage />} /> */}
          <Route exact path="/" element={null} />
          <Route exact path="/signIn" element={<LogInForm />} />
          <Route exact path="/signUp" element={<RegistrationForm />} />

          <Route
            exact
            path="/psd/:path"
            element={
              <PrivateRoute>
                <PSD />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/catalog"
            element={
              <PrivateRoute>
                <Board />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/catalog/:params"
            element={
              <PrivateRoute>
                <Board />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
