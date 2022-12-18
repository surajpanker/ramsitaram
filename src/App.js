import './App.css';
import Loader from './Loader';
import React from 'react';

const {  useEffect } = React;

function App() {

  useEffect(() => {
setTimeout(() => {
      <Loader/>

    }, 5000);

  }, []);


  return (
    <div className="App">
     
      <header className="App-header">
        <img src="ram.gif" className="App-logo Loader" alt="logo" />
       
       
        <p >
        भरी दुपहरी में अंधियारा,<br></br>
        सूरज परछाईं से हारा,<br></br>
        अंतरतम का नेह निचोड़ें, <br></br>
        बुझी हुई बाती सुलगाएं।<br></br>
        आओ फिर से दिया जलाएं।<br></br>
        हम पड़ाव को समझे मंजिल,<br></br>
        लक्ष्य हुआ आंखों से ओझल,<br></br>
        वर्तमान के मोहजाल में आने वाला कल न भुलाएंआओ फिर से दिया जलाएं।<br></br>
        </p>
        <h6 >
          Created By  <span className="heart">♥️</span> 
             Suraj Panker
        </h6>
       

      </header>
    </div>
  );
}

export default App;
