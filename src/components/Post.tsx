import type { Post } from '@/types'

export default function Post({ body, id, title, userId }: Post) {
  return (
    <section
      className={`border-t-[8px] border-t-slate-800 p-7 rounded-md shadow-lg shadow-slate-400 text-pretty hover:bg-slate-600 hover:text-white`}
      key={crypto.randomUUID()}
    >
      <div className='text-right'>ID: {id}</div>
      <h2 className='my-3 underline underline-offset-4 font-bold text-balance capitalize'>
        {title}
      </h2>
      <p className='font-extralight text-pretty'>{body}</p>
    </section>
  )
}
