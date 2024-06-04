import tmbdClient from "./tmdb"

const useFetchone = async (url,setState) => {
    try {
        const response = await tmbdClient.get(url)
        setState(response.data)
    } catch(e) {
        console.error(e)
    }
  }

export default useFetchone