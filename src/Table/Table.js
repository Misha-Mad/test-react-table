import SortIcon from "../SortIcon/SortIcon";

function Table ({data, onSort, sort, sortField, onRowSelect}) {

    return (
        <table className="table table-striped table-hover">
            <thead className="table-primary">
            <tr>
                <th onClick={onSort.bind(null,'id')} role="button" >
                    ID {sortField === 'id' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={onSort.bind(null,'firstName')} role="button">
                    First Name {sortField === 'firstName' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={onSort.bind(null,'lastName')} role="button">
                    Last Name {sortField === 'lastName' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={onSort.bind(null,'email')} role="button">
                    E-mail {sortField === 'email' && <SortIcon sort={sort}/>}
                </th>
                <th onClick={onSort.bind(null,'phone')} role="button">
                    Phone {sortField === 'phone' && <SortIcon sort={sort}/>}
                </th>
            </tr>
            </thead>
            <tbody>
            { data.map(item =>(
                <tr key={item.id + item.phone} onClick={onRowSelect.bind(null, item)} data-bs-toggle="modal" data-bs-target="#modal">
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