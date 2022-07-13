// libs
import { useQuery } from 'react-query'
import axios from 'axios'

const useBeers = (query) => {
  return useQuery(
    ['beers', query],
    async () => {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers', {
        params: { beer_name: query },
      })
      return data
    },
    { enabled: query?.length >= 1, keepPreviousData: true }
  )
}

export default useBeers
