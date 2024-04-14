import type { PropsAlbum } from '@/types/index'

export default function AlbumCard({ id, title, userId, ...props }: PropsAlbum) {
  return (
    <section {...props}>
      <h3>title: {title}</h3>
      <hr />
      <p>userID: {userId}</p>
      <hr />
      <p>id: {id}</p>
    </section>
  )
}
