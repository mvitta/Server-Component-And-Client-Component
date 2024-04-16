'use client'

import useFetchPlaceHolder from '@/hooks/useFetchJsonPlaceHolder'
import Loader from './Loader'
import Post from './Post'
import Pagination from './Pagination'
import { useState } from 'react'

export default function PostList() {
  const [state, loading] = useFetchPlaceHolder()
  const [currentPage, setCurrentPage] = useState<number>(1)
  console.log(state)

  // pagination, shows 10 post per page
  // 10 is postPerPage
  const indexOfLastPost = currentPage * 10 // position 10
  const indexOfFirstPost = indexOfLastPost - 10 //position 0
  const currentPosts = state.posts.slice(indexOfFirstPost, indexOfLastPost) //slice array from position zero to position nine, total: ten elements to show

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    // style grid
    <>
      <div className='flex justify-center w-full'>
        <Pagination
          postsPerPage={10}
          totalPosts={state.posts.length}
          paginate={paginate}
        />
      </div>
      <section className='p-7 grid gap-5 lg:grid-cols-3 2xl:grid-cols-4'>
        {/* load card if loading is true */}
        {!loading ? (
          !state.error ? (
            currentPosts.map((post) => {
              return <Post {...post} key={crypto.randomUUID()} />
            })
          ) : (
            // ìf loading is false, only load one card (local, No information of API)
            <>
              {currentPosts.map((post) => {
                return <Post {...post} key={crypto.randomUUID()} />
              })}
            </>
          )
        ) : (
          <Loader color={'#0f172a'} size={45} speed={2} />
        )}
      </section>
    </>
  )
}
