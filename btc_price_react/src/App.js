import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Boton from './componentes/Boton_Update';

function App() {
  const [price, setPrice] = useState(null);

  const [fecha_hora, setHora_Fecha] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    update();
  }, []);

  const update = () => {
    {
      fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {
          var _price = data.USD.last;
          
          if (price == _price)
            setState("➡️");
          else if (price < _price)
            setState("↗️");
          else if (price > _price)
            setState("↘️");

          setPrice(_price);
          setFecha(date + " " + time);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  var today = new Date();
  var date = "";
  var time = "";


  const setFecha = () => {
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    setHora_Fecha(date + " " + time);
  }

  const internationalNumberFormat = new Intl.NumberFormat('en-US')
  var formated_price = internationalNumberFormat.format(price);

  return (
    <div className='App'>
      <div className='tittle'>
        Precio de Bitcoin
      </div>
      <div className='price'>
        <div className='icon'>
          {state}
        </div>
        $ {formated_price}
      </div>
      <div className='time_date'>
        {fecha_hora}
        <Boton manejarClic={update}></Boton>
      </div>
    </div>
  );
}

export default App;
