import React from 'react'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface ResponseAPI {
  posts: Post[]
  error: string
}

type AlbumBase = Omit<Post, 'body'>

type HtmlAttributesWithoutId = Omit<React.HtmlHTMLAttributes<HTMLElement>, 'id'>

export type Album = AlbumBase & HtmlAttributesWithoutId

export type PropsAlbum = Album
