import React, { useState, useEffect } from 'react';
import './App.css';
import GiphyForm from './components/GiphyForm';


function App() {
  const [giphyData, setGiphyData] = useState({});

  const makeApiCall = async (giphyImg) =>{
    const trendingUrl='https://api.giphy.com/v1/gifs/trending?api_key=ryKgtGyHYnzobDPXn5GaFjL1SS8pcL0F&limit=25&rating=g';
    const res = await fetch(trendingUrl);
    const json = await res.json

    setGiphyData(json)
  }
  useEffect(()=>{
    makeApiCall('random')
  }, [])
console.log(giphyData)

 return(
  <div className='App'>
    <GiphyForm />
  </div>
 )
  
}

export default App;
