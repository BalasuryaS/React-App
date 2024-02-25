import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Home() {
  return (
    <div>Home
        <button><Link to = '/.employee'></Link></button>
        <button>Logout</button>
    </div>
  )
}

export default Home