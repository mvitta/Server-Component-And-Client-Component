'use client'

import { useReducer, useRef, useState, useId, useEffect } from 'react'
import type { JsonPlaceHolder, ResponseAPI } from '@/types'
import PostList from '@/components/PostList'
import { Toaster, toast } from 'sonner'
import { messageError, messageSuccess } from '@/functions/toast'

const initialState: ResponseAPI = {
  posts: [
    {
      id: 101,
      title: 'esto es un titulo de Mike',
      body: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias obcaecati quos, sapiente, dolor nesciunt debitis labore ducimus architecto laudantium asperiores autem culpa totam a cupiditate aspernatur nemo exercitationem aliquid esse.',
      userId: 1,
    },
  ],
  error: '',
}

type ACTIONTYPES =
  | { type: 'load'; arrayPost: JsonPlaceHolder[]; error: string | null }
  | { type: 'error_load'; error: string }

function reducer(prevState: ResponseAPI, action: ACTIONTYPES) {
  switch (action.type) {
    case 'load':
      console.log(action.arrayPost)

      return { ...prevState, posts: [...prevState.posts, ...action.arrayPost] }
    case 'error_load':
      return { ...prevState, error: action.error }
    default:
      return prevState
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchPlaceHolder() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_JSON_PLACEHOLDER}/posts`,
          {
            cache: 'no-store',
          }
        )
        console.log(response)

        if (!response.ok) {
          throw new Error(
            `Faild the request - ${response.status} - ${response.statusText}`
          )
        }
        const json: JsonPlaceHolder[] = await response.json()
        dispatch({ type: 'load', arrayPost: json, error: null })
        messageSuccess(response)
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: 'error_load',
            error: `Opps.. ${error.name} - ${error.message}`,
          })
          messageError(error)
        }
      }
    }

    fetchPlaceHolder()
  }, [])

  return (
    <main>
      <h1 className='capitalize, font-light text-slate-700 text-balance text-center my-4 text-[2rem]'>
        Curso de React Utilizando la documentacion de react
      </h1>

      {!state.error ? (
        state.posts.map((post) => {
          return <PostList {...post} key={crypto.randomUUID()} />
        })
      ) : (
        <>
          {state.posts.map((post) => {
            return <PostList {...post} key={crypto.randomUUID()} />
          })}
        </>
      )}
      <Toaster />
    </main>
  )
}
