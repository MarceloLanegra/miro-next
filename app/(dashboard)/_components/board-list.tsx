'use client'

import EmptyBoards from "./empty-boards"
import EmptyFavourites from "./empty-favourites"
import EmptySearch from "./empty-search"

interface BoardListProps {
  orgId: string,
  query: {
    search?: string,
    favourites?: string
  }
}

const BoardList = ({orgId, query}: BoardListProps) => {
  const data = [] //TODO: Change to API call

  if (!data.length && query.search) {
    return (
      <EmptySearch />
    )
  }

  if (!data.length && query.favourites) {
    return (
      <EmptyFavourites />
    )
  }

  if(!data.length) {
    return (
      <EmptyBoards />
    )
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList