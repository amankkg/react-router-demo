import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import { getUserList } from '../../api/json-placeholder-api'

export const Users = () => {
  const [state, setState] = useState(undefined)

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUserList()

      setState(users)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>User list</h1>
      {state == null ? (
        <p>loading...</p>
      ) : (
        <ul>
          {state.map((user) => (
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
