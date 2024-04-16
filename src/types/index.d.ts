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

export interface PropsAlbumList extends React.ComponentProps<'section'> {
  albums: AlbumBase[]
}

type AlbumBase = Omit<Post, 'body'>

type HtmlAttributesWithoutId = Omit<React.HtmlHTMLAttributes<HTMLElement>, 'id'>

export type Album = AlbumBase & HtmlAttributesWithoutId

export type PropsAlbum = Album

export interface PropsPagination {
  postsPerPage: number
  totalPosts: number
  paginate: (pageNumber: number) => void
}
