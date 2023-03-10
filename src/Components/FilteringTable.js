import React,{useMemo} from 'react'
import {useTable, useGlobalFilter, useFilters, useSortBy} from 'react-table'
import MOCK_DATA  from './MOCK_DATA.json'
import {COLUMNS} from './Columns'
import {GlobalFilter} from './GlobalFilter.js'

export const FilteringTable = () => 
{
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({
    columns,
    data
  }, useFilters, useGlobalFilter, useSortBy)

  const {globalFilter} = state;

  return (
    <>
    <span> <b>Global Filter</b> </span>
    <GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column) =>
                    (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                        </span>
                        <div>
                        {column.canFilter ? column.render('Filter'):null}
                        </div>
                        </th>
                    ))
                }
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
        <tfoot>
            {
                footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {
                            footerGroup.headers.map(column => (
                                <td {...column.getFooterProps}>
                                    {
                                        column.render('Footer')
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tfoot>
    </table>
    </>
  )
}