// libs
import { useCallback, useState } from 'react'
import styled from 'styled-components'
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

const TestScreen: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: beers } = useBeers(searchQuery)

  const handleTypeaheadChange = useCallback((event) => {
    setSearchQuery(event.target.value)
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
