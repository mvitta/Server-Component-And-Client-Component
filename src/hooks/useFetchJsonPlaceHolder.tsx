import { initialState } from '@/data/initialState'
import { reducer } from '@/functions/reducers/reducerJsonPlaceHolder'
import { messageSuccess, messageError } from '@/functions/toast'
import type { Post, ResponseAPI } from '@/types'
import { useEffect, useReducer, useState } from 'react'

export default function useFetchPlaceHolder(): [ResponseAPI, boolean] {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlaceHolder() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_JSON_PLACEHOLDER}/posts`,
          {
            cache: 'no-store',
          }
        )

        if (!response.ok) {
          throw new Error(
            `Faild the request - ${response.status} - ${response.statusText}`
          )
        }
        const json: Post[] = await response.json()
        dispatch({
          type: 'load',
          payload: json,
        })

        messageSuccess(response)
        setLoading(false)
        console.log('try')
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: 'error_load',
            error: `Opps.. ${error.name} - ${error.message}`,
          })
          messageError(error)
          setLoading(true)
          console.log('catch')
        }
      }
    }

    fetchPlaceHolder()
  }, [])

  return [state, loading]
}
