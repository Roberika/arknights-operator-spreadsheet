import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import axios from 'axios';

function App() {
    //Calculator
    const [result, setResult] = useState(" = 0")
    const [numbers, setNumbers] = useState({
        numberA: 0,
        operator: "+",
        numberB: 0,
    })

    const handleSetNumbers = (key) => (event) => {
        if (key === 'O') {
            var op = event.target.value;
            setNumbers(numbers => ({
                ...numbers,
                ...{ operator: op }
            }));
        } else {
            var num = parseFloat(event.target.value);
            if (key === 'A') {
                setNumbers(numbers => ({
                    ...numbers,
                    ...{ numberA: num }
                }));
            } else {
                setNumbers(numbers => ({
                    ...numbers,
                    ...{ numberB: num }
                }));
            }
        }
    }

    useEffect(() => {
        setResult(" = " + (
            numbers.operator === "+" ? (numbers.numberA + numbers.numberB) :
                numbers.operator === "-" ? (numbers.numberA - numbers.numberB) :
                    numbers.operator === "*" ? (numbers.numberA * numbers.numberB) :
                        numbers.operator === "/" ? (numbers.numberA / numbers.numberB) :
                            numbers.operator === "^" ? (numbers.numberA ^ numbers.numberB) :
                                numbers.operator === "%" ? (numbers.numberA % numbers.numberB) : "?"
        ));
    }, [numbers]);

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

            <br /><hr />

            <h1>Calc + Ulator</h1>
            <form className="card">
                <input type="text" value={numbers.numberA}
                    onChange={handleSetNumbers('A')} /><br />
                <input type="text" value={numbers.operator}
                    onChange={handleSetNumbers('O')} /><br />
                <input type="text" value={numbers.numberB}
                    onChange={handleSetNumbers('B')} /><br />
                <input type="text" value={result} readOnly />
                <p>
                    Hi! My name is <code>Robert</code> <code>Antonius</code>.
                    Use <code>+</code> , <code>-</code> , <code>*</code> , <code>/</code> , <code>^</code> , or <code>%</code> . <br />
                    Entah ngapo, yg operatorny kadang ngelag, dk biso diubah kecuali kalo kito block ke isiny dan ganti character laen. <br />
                    Kadang jg harus ubah nomor 1 ato nomor 2 dulu bru dio te update. Aku samo sekali dk tw ngapo, klo ad yg tw biso tulis di <code>Issue</code>. <br />
                    Edit: Thx atas bantuanny. Ak dtw klo React jugo biso manggil array pake array.key. Setelah ak ubah ke format it glo <br />
                    biso bru edit smoothless. Cakny sih karena ak pake system array[stringkey] dio kadang ad delay dan dk pas editny. Ak pikir mungkin <br />
                    keren soalny kemaren klo ak biso ubah it func it biar biso universal, tpi akhirny malah ribet. <br />
                </p>
            </form>
        </>
    )
}

export default App
