import React, { useState } from 'react'

export const FilterByCompany = ({value, onFilter}) => {
  const [text, setText] = useState(value)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    onFilter(text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="filter-by-company-input">Search by company name:</label>
      <input
        id="filter-by-company-input"
        defaultValue={text}
        onChange={e => setText(e.target.value)}
        type="text"
        placeholder="e.g. Romaguera-Crona"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
