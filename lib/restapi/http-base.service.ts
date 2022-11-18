import axios from 'axios'

console.log("API Url: ", process.env.NEXT_PUBLIC_API_BASE)

const HttpBaseService = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE}/v1`,
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'env',
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

HttpBaseService.interceptors.response.use(
  function (response) {
    // Return unwrapped response ---the "body" of it
    return response.data
  },
  function (error) {
    // TODO: Do proper error handling here (logout user, etc)
    console.error(error)
  }
)


export default HttpBaseService
