import {format} from 'date-fns'
import {ColumnFilter} from './ColumnFilter.js'

export const COLUMNS = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer: 'Last name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyyy')},
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'Age',
        Filter: ColumnFilter
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'Country',
        Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'Phone',
        Filter: ColumnFilter
    }
]