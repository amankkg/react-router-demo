import React, {useEffect, useState, useMemo} from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'

import { getUserList } from '../../api/json-placeholder-api'
import { FilterByCompany } from './filter-by-company'

export const Users = () => {
  const history = useHistory()
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  const urlFilter = search.get('company')
  const [filter, setFilter] = useState(urlFilter || '')
  const [users, setUsers] = useState(undefined)

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUserList()

      setUsers(data)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    if (urlFilter === filter) return
    if (filter === '') history.push('/users')
    else history.push(`/users?company=${filter}`)
  }, [history, urlFilter, filter])

  const filteredUsers = useMemo(
    () => users != null
      && users.filter(u => u.company != null
        && u.company.name.toLowerCase().includes(filter.toLowerCase())),
    [users, filter],
  )

  return (
    <div>
      <h1>User list</h1>
      <FilterByCompany value={filter} onFilter={setFilter} />
      {users == null ? (
        <p>loading...</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
