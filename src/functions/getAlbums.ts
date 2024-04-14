import type { AlbumBase } from '@/types'

export async function getAlbums(): Promise<AlbumBase[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
    cache: 'no-store',
  })

  if (!(response.status === 200)) {
    return []
  }

  const json: AlbumBase[] = await response.json()

  return json
}
