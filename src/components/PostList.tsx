'use client'

import useFetchPlaceHolder from '@/hooks/useFetchJsonPlaceHolder'
import Loader from './Loader'
import Post from './Post'

export default function PostList() {
  const [state, loading] = useFetchPlaceHolder()
  return (
    <>
      {!loading ? (
        !state.error ? (
          state.posts.map((post) => {
            return <Post {...post} key={crypto.randomUUID()} />
          })
        ) : (
          <>
            {state.posts.map((post) => {
              return <Post {...post} key={crypto.randomUUID()} />
            })}
          </>
        )
      ) : (
        <Loader color={'#0f172a'} size={45} speed={2} />
      )}
    </>
  )
}
