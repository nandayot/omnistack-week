import React, { useState } from 'react';
//import Header from  './Header';
import './global.css';
//import Logon from  './pages/Logon';

import Routes from './routes';

function App() {

  /*let [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
    //console.log(counter);
  }*/

  return (
    //<Header title="Tiemi"/> isso é retornando como parâmetro 'props' e usado como 'props.title'

    //<Header>
    //  Tiemi's Archives 
    //</Header> //usa 'props.children'

    /*<div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>*/
    <Routes/>
    
  );
}

export default App;
