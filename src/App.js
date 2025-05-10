import React, { useState } from 'react';
import IntroVideo from './components/IntroVideo';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="App">
      {!showMainContent && <IntroVideo onVideoEnd={() => setShowMainContent(true)} />}
      {showMainContent && <Portfolio />}
    </div>
  );
}

export default App;
