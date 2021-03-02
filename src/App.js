import _ from 'lodash';
import {useEffect, useState} from 'react'
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";

function App() {

    const [isLoading, setLoading] = useState(true);
    const [isData, setData] = useState([]);
    const [isSort, setSort] = useState('asc');
    const [isSortField, setSortField] = useState('id');
    const [isRow, setIsRow] = useState({});

    function sortTableFields(sortField) {
        const sortType = isSort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(isData, sortField, sortType);
        setData(orderedData);
        setSort(sortType);
        setSortField(sortField);
    }

    function rowSelect(row) {
        setIsRow(row);
    }

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch(` http://www.filltext.com/?rows=500&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            const data = await response.json();
            setData(_.orderBy(data, isSortField, isSort));
        }
        fetchMyAPI()
            .then(() => {
                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <Modal person={isRow} />
            {isLoading
                ? <Loader/>
                : <Table
                    data={isData}
                    onSort={sortTableFields}
                    sort={isSort}
                    sortField={isSortField}
                    onRowSelect={rowSelect}
                />
            }
        </div>
    );
}

export default App;
