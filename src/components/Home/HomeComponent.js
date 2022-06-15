import React from 'react'
import Table from './Table'

const HomeComponent = ({allEpisodes}) => {
  return (
    <div>
      <Table allEpisodes={allEpisodes} />
    </div>
  )
}

export default HomeComponent