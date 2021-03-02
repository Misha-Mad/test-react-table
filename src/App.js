import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from 'react';
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";

function App() {

    const [isLoading, setLoading] = useState(true);
    const [isData, setData] = useState([]);
    const [isSort, setSort] = useState('asc');
    const [isSortField, setSortField] = useState('id');
    const [isRow, setIsRow] = useState({});
    const [isDisplayData, setDisplayData] = useState([]);
    const [isPageCount, setPageCount] = useState(0);
    const pageSize = 50;

    function sortTableFields(sortField) {
        const sort = isSort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(isDisplayData, sortField, sort);
        setDisplayData(data);
        setSort(sort);
        setSortField(sortField);
    }

    function rowSelect(row) {
        setIsRow(row);
    }

    function pageChangeHandler({selected}) {
        setDisplayData(_.chunk(isData, pageSize)[selected]);
    }

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch(` http://www.filltext.com/?rows=500&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={streetAddress}&description={lorem|32}`)
            return await response.json();
        }

        fetchMyAPI()
            .then((data) => {
                const filteredData = _.orderBy(data, isSortField, isSort);
                const displayedData = _.chunk(filteredData, pageSize)[0];
                const pageCount = filteredData.length/ pageSize;
                setData(filteredData);
                setDisplayData(displayedData);
                setPageCount(pageCount);
            })
            .then(()=>{

                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <Modal person={isRow}/>
            {isLoading
                ? <Loader/>
                : <>
                    <Table
                        data={isDisplayData}
                        onSort={sortTableFields}
                        sort={isSort}
                        sortField={isSortField}
                        onRowSelect={rowSelect}
                    />
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={isPageCount}
                        marginPagesDisplayed={5}
                        pageRangeDisplayed={5}
                        onPageChange={pageChangeHandler}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                    />
                </>
            }
        </div>
    );
}

export default App;
