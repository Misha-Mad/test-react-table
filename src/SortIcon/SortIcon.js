function SortIcon ({sort}) {

    return (
            sort === 'asc'
            ? <i className="bi bi-sort-down-alt"/>
            : <i className="bi bi-sort-up-alt"/>
    )
}

export default SortIcon;