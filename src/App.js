import './App.css';
import './styles/global.scss';
import AdviceCard from './components/AdviceCard/AdviceCard';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [adviceApi, setAdvice] = useState(() => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response.data.slip);
      })
  });

  return (
    <>
      <AdviceCard 

      />
    </>
  );
}

export default App;
