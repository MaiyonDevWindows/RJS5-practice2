import { useState, useEffect } from 'react';
import './App.css';

const Loading = () => {
  return (
    <div class="loader"></div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000)
  }, [])
  return (
    <div className="container">
      {isLoading && <Loading></Loading>}
    </div>
  );
}

export default App;
