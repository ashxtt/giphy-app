import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/GiphyButton';
import Giphy from './components/Giphy';


function App() {
  const [giphyData, setGiphyData] = useState({});

  const makeApiCall = async () =>{
    const GiphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=ryKgtGyHYnzobDPXn5GaFjL1SS8pcL0F&tag=&rating=g';
    const res = await fetch(GiphyUrl);
    const json = await res.json();

    setGiphyData(json)
  }
  
  useEffect(()=>{
    makeApiCall('random')
  }, [])


 return(
  <div className='App'>
    <h1>IFFY GIPHY</h1>
    <Button getGiphy = {makeApiCall}/>
    <Giphy giphy = {giphyData}/>
    
    
  </div>
 )
  
}

export default App;
