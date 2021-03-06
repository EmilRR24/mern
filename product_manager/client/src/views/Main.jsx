import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Form from '../components/Form'

const Main = () => {
  // STATE TO KEEP TRACK OF REFRESH
  const [refreshState, setRefresh] = useState(false)
  // REFRESH
  const refresh = () => {
    setRefresh(!refreshState)
  }
  
  return (
    <div style={{textAlign: 'center'}}>
        {/* <legend>Main.jsx</legend> */}
        <Form refresh={refresh}/>
        <Dashboard refresh={refresh} refreshState={refreshState}/>
    </div>
  )
}

export default Main