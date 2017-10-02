import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>
  <div>
    <h1> Voting App </h1>
    <Link to='/poll/new'>Create new poll</Link>
  </div>

export default Home