import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
      tg.ready()
    }, [])
    
  return (
    <div className="App">
      work
      busy
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
