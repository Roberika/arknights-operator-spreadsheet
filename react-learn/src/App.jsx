import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [numeroFinale, setNumeroFinale] = useState(" = 0")
  /*const [numeroUno, setNumeroUno] = useState(0)
  const [numeroDos, setNumeroDos] = useState(0)
  const [notANumero, setNotANumero] = useState('+')

  const inputNumeroUno = (event) => {
    setNumeroUno(event);
  }*/

  const [numeros, setNumeros] = useState({
    'numeroUno': 0,
    'notANumero': "+",
    'numeroDos': 0,
  })

  const setNumero = (key) => (event) => {
    var numeroTemporari = numeros;
    if(key != 'notANumero'){
      numeroTemporari[key] = parseFloat(event.target.value);
    } else {
      numeroTemporari[key] = event.target.value;
    }
    setNumeros(numeroTemporari);
    calculate();
  }
  
  function calculate(){
    var numeroTemporari = 0;
    switch (numeros['notANumero']){
      case '-':
        numeroTemporari = numeros['numeroUno'] - numeros['numeroDos'];
        break;
      case '/':
        numeroTemporari = numeros['numeroUno'] / numeros['numeroDos'];
        break;
      case '*':
        numeroTemporari = numeros['numeroUno'] * numeros['numeroDos'];
        break;
      case '^':
        numeroTemporari = numeros['numeroUno'] ^ numeros['numeroDos'];
        break;
      case '%':
        numeroTemporari = numeros['numeroUno'] % numeros['numeroDos'];
        break;
      default :
        numeroTemporari = numeros['numeroUno'] + numeros['numeroDos'];
        break;
    }    
    setNumeroFinale(" = " + numeroTemporari);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Calc + Ulator</h1>
      <form className="card">
        <input type="text" value={ numeros['numeroUno'] } 
        onChange={ setNumero('numeroUno') } /><br/>
        <input type="text" value={ numeros['notANumero'] } 
        onChange={ setNumero('notANumero') } /><br/>
        <input type="text" value={ numeros['numeroDos'] } 
        onChange={ setNumero('numeroDos') } /><br/>
        <input type="text" value={numeroFinale} readOnly/>
        <p>
          Hi! My name is <code>Robert</code> <code>Antonius</code>.
          Use <code>+</code> , <code>-</code> , <code>*</code> , <code>/</code> , <code>^</code> , or <code>%</code> . <br/>
          Entah ngapo, yg operatorny kadang ngelag, dk biso diubah kecuali kalo kito block ke isiny dan ganti character laen. <br/>
          Kadang jg harus ubah nomor 1 ato nomor 2 dulu bru dio te update. Aku samo sekali dk tw ngapo, klo ad yg tw biso tulis di <code>Issue</code>.
        </p>
      </form>
      <ul className="read-the-docs">
        References:
        <li><a href='https://stackoverflow.com/questions/51576155/pass-a-variable-reference-in-react'>Trick to change default set behaviour</a></li>
        <li><a href='https://react.dev/learn/thinking-in-react'>Input and OnChange</a></li>
      </ul>

    {/* 
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
