// libs
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
// types
import type { FunctionComponent } from 'react'
// components
import { Typeahead } from 'design-system/components/Typeahead'
// hooks
import useBeers from './hooks/useBeers'
// other
import { breakPoints } from 'design-system/theme'

const STestScreenWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${breakPoints.laptop}px) {
    width: 900px;
  }
`

const DEBOUNCE_QUERY_VALUE_MS = 400

const TestScreen: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: beers } = useBeers(searchQuery)

  const debouncedSetSeachQuery = debounce(setSearchQuery, DEBOUNCE_QUERY_VALUE_MS)

  const handleTypeaheadChange = useCallback((event) => {
    debouncedSetSeachQuery(event.target.value)
  }, [])

  const handleOptionSelect = useCallback(({ image_url }) => {
    window.location.href = image_url
  }, [])

  return (
    <STestScreenWrapper>
      <Typeahead options={beers} onChange={handleTypeaheadChange} onSelect={handleOptionSelect} />
    </STestScreenWrapper>
  )
}

export default TestScreen
