import React from 'react'

const Poll = ({match}) =>
  <div>
      <h1>Poll</h1>
      <p>{match.params.id}</p>
  </div>

export default Poll