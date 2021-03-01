import SortIcon from "../SortIcon/SortIcon";

function Table ({data, onSort, sort, sortField}) {

    function handleSortID() {
        onSort('id')
    }
    function handleSortFirstName() {
        onSort('firstName')
    }
    function handleSortLastName() {
        onSort('lastName')
    }
    function handleSortEmail() {
        onSort('email')
    }
    function handleSortPhone() {
        onSort('phone')
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th onClick={handleSortID}>
                    ID {sortField === 'id' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={handleSortFirstName}>
                    First Name {sortField === 'firstName' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={handleSortLastName}>
                    Last Name {sortField === 'lastName' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={handleSortEmail}>
                    E-mail {sortField === 'email' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={handleSortPhone}>
                    Phone {sortField === 'phone' && <SortIcon sort={sort}/>}
                </th>
            </tr>
            </thead>
            <tbody>
            { data.map(item =>(
                <tr key={item.id + item.phone}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;