import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Chat from './components/Chat/Chat';
import Events from './components/Events/Events';
import Files from './components/Files/Files';
import VideoCall from './components/Video/VideoCall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/events" element={<Events />} />
        <Route path="/files" element={<Files />} />
        <Route path="/video" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;
