import React from 'react';
if (typeof window !== 'undefined') {
  require('./App.css')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cover-image" />
        <p>
          Konrad Schwanecke "HIP 4U"
        </p>
      </header>
    </div>
  );
}

export default App;
