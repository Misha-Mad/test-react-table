import {useEffect, useState} from 'react'
import Loader from "./Loader/Loader";
import Table from "./Table/Table";

function App() {

    const [isLoading, setLoading] = useState(true);
    const [isData, setData] = useState([]);
    
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            const data = await response.json();
            setData(data);
            setLoading(false);
        }

        fetchMyAPI()
    },[])

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            {isLoading
                ? <Loader/>
                : <Table data={isData}/>
            }
        </div>
    );
}

export default App;
