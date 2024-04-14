import type { Post } from '@/types'

export default function Post({ body, id, title, userId }: Post) {
  return (
    <section
      className={`border-[1px] border-black p-4 rounded-sm shadow-lg shadow-slate-800 text-pretty hover:outline-4 hover:outline-double hover:outline-slate-900 `}
      key={crypto.randomUUID()}
    >
      <div className='text-right'>ID: {id}</div>
      <h2 className='my-3 underline underline-offset-4 font-bold text-balance capitalize text-slate-800'>
        {title}
      </h2>
      <p className='font-extralight text-pretty'>{body}</p>
    </section>
  )
}
