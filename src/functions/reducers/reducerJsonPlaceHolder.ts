import type { Post, ResponseAPI } from '@/types'

export type ACTIONTYPES =
  | { type: 'load'; arrayPost: Post[]; error: string | null }
  | { type: 'error_load'; error: string }

export function reducer(prevState: ResponseAPI, action: ACTIONTYPES) {
  switch (action.type) {
    case 'load':
      return { ...prevState, posts: [...prevState.posts, ...action.arrayPost] }
    case 'error_load':
      return { ...prevState, error: action.error }
    default:
      return prevState
  }
}
