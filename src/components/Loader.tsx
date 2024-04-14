import { useEffect } from 'react'

interface PropsLoader {
  size?: string | number
  color?: string | number
  speed?: string | number
}

export default function Loader(props: PropsLoader) {
  useEffect(() => {
    async function getLoader() {
      const { ping } = await import('ldrs')
      ping.register()
    }

    getLoader()
  }, [])

  return <l-ping {...props}></l-ping>
}
