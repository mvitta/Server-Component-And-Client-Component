import type { PropsPagination } from '@/types'

/*
 *Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
 *
 */
export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
}: PropsPagination) {
  const pageNumbers = []
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  for (let page = 1; page <= totalPages; page++) {
    pageNumbers.push(page)
  }
  return (
    <nav className='flex justify-center px-8 gap-x-3 bg-slate-200 min-w-min border border-solid border-slate-900'>
      {pageNumbers.map((page) => {
        return (
          <>
            {page === 5 && (
              <a href='#' className='w-5 h-5 sm:hidden'>
                ...
              </a>
            )}
            <a
              key={crypto.randomUUID()}
              href='#'
              onClick={() => paginate(page)}
              className={`w-5 h-5 ${
                page === 4 || page === 5 || page === 6 || page === 7
                  ? 'hidden sm:block'
                  : ''
              }`}
            >
              {page}
            </a>
          </>
        )
      })}
    </nav>
  )
}
