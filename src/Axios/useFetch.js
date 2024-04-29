import tmbdClient from "./tmdb"

const useFetch = async (url,setState) => {
    try {
        const response = await tmbdClient.get(url)
        const results = response.data.results
        setState(results)
    } catch(e) {
        console.error(e)
    }
  }

export default useFetch