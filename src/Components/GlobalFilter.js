import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
    <input value = {filter || ''}
    onChange = {e => setFilter(e.target.value)}/>
    </span>
  )
}
