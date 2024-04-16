import type { PropsAlbum } from '@/types/index'

export default function AlbumCard({ id, title, userId, ...props }: PropsAlbum) {
  const spanStyles: React.CSSProperties = {
    fontWeight: 'bold',
    color: 'gray  ',
  }

  return (
    <section {...props}>
      <h3>
        <span style={spanStyles}> Title:</span> {title}
      </h3>
      <p>
        {' '}
        <span style={spanStyles}>UserID:</span> {userId}
      </p>
      <p>
        {' '}
        <span style={spanStyles}>ID:</span> {id}
      </p>
    </section>
  )
}
