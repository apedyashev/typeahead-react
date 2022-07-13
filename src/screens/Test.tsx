// libs
import styled from 'styled-components'
// types
import type { FunctionComponent } from 'react'
// components
import { Typeahead } from 'design-system/components/Typeahead'
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
  return (
    <STestScreenWrapper>
      <Typeahead />
    </STestScreenWrapper>
  )
}

export default TestScreen
