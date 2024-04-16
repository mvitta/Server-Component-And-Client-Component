import type { AlbumBase, PropsAlbumList } from '@/types'
import AlbumCard from './AlbumCard'

export default function AlbumList({ albums, ...props }: PropsAlbumList) {
  return (
    <section {...props}>
      {albums.map((album) => {
        const { id, title, userId } = album
        return (
          <AlbumCard
            key={crypto.randomUUID()}
            id={id}
            title={title}
            userId={userId}
            className='mb-8 mx-6 flex flex-col gap-y-3 p-4 bg-slate-700 text-white rounded-lg'
          />
        )
      })}
    </section>
  )
}
