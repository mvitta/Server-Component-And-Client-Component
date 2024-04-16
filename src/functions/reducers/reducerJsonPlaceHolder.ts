import type { Post, ResponseAPI } from '@/types'

export type ACTIONTYPES =
  | { type: 'load'; payload: Post[] }
  | { type: 'error_load'; error: string }

/*
  {
    posts: Post[]
    error: string
  }
*/

export function reducer(prevState: ResponseAPI, action: ACTIONTYPES) {
  console.log(prevState)

  switch (action.type) {
    case 'load':
      return {
        ...prevState,
        posts: [...action.payload],
      }
    case 'error_load':
      return { ...prevState, error: action.error }
    default:
      return prevState
  }
}
