import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { getUser } from '../api/json-placeholder-api'

export const User = () => {
  const {userId} = useParams()
  const history = useHistory()
  const [state, setState] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(userId)

      setState(user)
    }

    fetchData()
  }, [userId])

  return (
    <div>
      <h1>User Details</h1>
      {state == null
        ? <p>loading...</p>
      : <>
      <p>name: <strong>{state.name} ({state.email})</strong></p>
      <p>phone: <strong>{state.phone}</strong></p>
      </>}
      <br />
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  )
}