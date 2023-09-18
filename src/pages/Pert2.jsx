import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import axios from 'axios';

function App() {
    //API and Mapping Array Test
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://strapi-rygs.onrender.com/api/quotes");
            setQuotes(res.data.data);
        }

        fetchData();
    }, [])

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

            <h1>API + Mapping</h1>
            <div>
                {quotes.map((quote, index) => {
                    return (
                        <div key={index}>
                            "{quote.attributes.Quote}.."
                            <br />
                            - {quote.attributes.Author}
                            <br />
                        </div>
                    )
                })}
                <p>
                    P.S. Entah ngapo yg React ak hrus tarok return(element) biar biso tampil. Klo tebakan ak <br />
                    si karna map it masih termasuk function dan (entah ngapo, beda dri yg lain) dk otomatis <br />
                    ngebalekke nilai.
                </p>
            </div>
        </>
    )
}

export default App
