import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import axios from 'axios';

function Tugas2() {
    //API and Mapping Array Practice
    const [registry, setRegistry] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
        setRegistry(res.data.data[0].attributes.prodi[0]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const toCapitalCase = (s) => {
        var sentence = ""
        s.split(" ").map((word, index) => {
            sentence += word.charAt(0).toUpperCase() + word.substring(1) + " "
        })
        return sentence.trim()
    }

    const getNPM = (year, major, id) => {
        var year_start = year.slice(-2);
        var year_end = (parseInt(year) + 4 + "").slice(-2);
        var id_formatted = ("0000" + id).slice(-4)
        return ([year_start, year_end, major, id_formatted]).join("")
    }

    const getGender = (gender) => {
        return gender === "L" ? "Laki-laki" :
            gender === "P" ? "Perempuan" : "?"
    }

    const showMajors = (major) => {
        return (
            <>
                <span>{major.nama_prodi} <br /></span>
                <span>Kepala : {major.kepala_prodi} <br /></span>
                {major.sektretaris && <span>Sekretaris : {major.sektretaris} <br /></span>}
                <br />

                {major.mahasiswa?.map((year, year_index) => {
                    return (
                        <div key={year_index} style={{ textAlign: "center" }}>
                            {showYears(year, major.kode_prodi)}
                        </div>
                    )
                })}
            </>
        )
    }

    const showYears = (year, major) => {
        return (
            <>
                <span>Angkatan : {year.tahun_masuk} <br /></span>
                {year.data && Object.keys(year.data).map((session_key, session_index) => {
                    return (
                        <div key={session_index}>
                            {showSessions(year.data[session_key], session_key, year.tahun_masuk, major)}
                        </div>
                    )
                })}
                <br />
            </>
        )
    };

    const showSessions = (session, session_key, year, major) => {
        return (
            <>
                <span>Kelas {toCapitalCase(session_key)}</span> <br />
                {session.length == 0 ? (
                    <span>Tidak ada Mahasiswa yang mengambil kelas ini</span>
                ) : (
                    <center>
                        <table style={{ textAlign: "center", minWidth: "100%", }} border="1px solid black">
                            <thead>
                                <tr>
                                    <th>NPM</th>
                                    <th>Nama</th>
                                    <th>Alamat</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Hobi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {session?.map((student, student_index) => {
                                    return (<tr key={student_index}>
                                        {showStudents(student, year, major)}
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </center>
                )}
                <br />
            </>
        )
    }

    const showStudents = (student, year, major) => {
        return (
            <>
                <td>{getNPM(year, major, student.id)}</td>
                <td>{student.nama}</td>
                <td>{student.alamat}</td>
                <td>{getGender(student.jenis_kelamin)}</td>
                <td>{student.hobi.join(", ")}</td>
            </>
        )
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

            <br /><hr />

            <h1>API + Mapping</h1>
            <div>
                {registry?.map((major, major_index) => {
                    return (
                        <div key={major_index}>
                            {showMajors(major)}
                        </div>
                    )
                })}
                <p>
                    Agak ngetroll jg data ny lol. Terkubur berlapis lapis, sektretaris. <br />
                    Btw, ternyato const func1 = (paramA) ={'>'} (paramB) ={'>'} { } dan <br />
                    const func2 = (paramA, paramB) ={'>'} { } beda. Function getNPM ak dk biso <br />
                    pas ak pake func1, tpi yg handleInput kemaren malah hrus func1 :/<br />
                </p>
            </div>
        </>
    )
}

export default Tugas2
