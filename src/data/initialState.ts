import type { ResponseAPI } from '@/types'

export const initialState: ResponseAPI = {
  posts: [
    {
      id: 101,
      title: 'esto es un titulo de Mike',
      body: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias obcaecati quos, sapiente, dolor nesciunt debitis labore ducimus architecto laudantium asperiores autem culpa totam a cupiditate aspernatur nemo exercitationem aliquid esse.',
      userId: 1,
    },
  ],
  error: '',
}
