import React, { FC } from 'react'

export interface Icontext {
  author: string
  timestamp: string
  avatar: string
}

const defaultState = {
  author: '',
  timestamp: '',
  avatar: '',
}

export const PostContext = React.createContext<Icontext | null>(null)

const PostProvider: FC<Icontext> = ({
  children,
  author,
  timestamp,
  avatar,
}) => {
  const value = { author, timestamp, avatar }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export { PostProvider }
