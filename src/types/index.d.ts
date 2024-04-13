export interface JsonPlaceHolder {
  userId: number
  id: number
  title: string
  body: string
}

export interface ResponseAPI {
  posts: JsonPlaceHolder[]
  error: string
}
