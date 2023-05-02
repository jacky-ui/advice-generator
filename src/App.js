import './App.css';
import './styles/global.scss';
import AdviceCard from './components/AdviceCard/AdviceCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [adviceApi, setAdvice] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => setAdvice(response.data.slip))
      .catch((error) => console.log(error));
  }, [])

  return (
    <>
      <AdviceCard 
        adviceObject={adviceApi}
      />
    </>
  );
}

export default App;
