import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';



export default function App() {

  // BASE URL
  const baseUrl = "https://lanciweb.github.io/demo/api/actresses/";
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    axios.get(baseUrl)
      .then(response => {
        console.log("Dati ricevuti:", response.data); // MILESTONE 1
        setCharacters(response.data);
      })
      .catch(error => {
        console.error("Errore nel fetch:", error);
      });
  };

      // useEffect per chiamare la funzione al caricamento
           useEffect(fetchCharacters, []);


  return (
    <>

    <h1>Cast Fetching</h1>
    <h2>Ho finito il Milestone 1</h2>
      
          
    </>
  )
}


