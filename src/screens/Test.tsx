// libs
import styled from 'styled-components'
// other
import { breakPoints } from 'design-system/theme'

const STestScreen = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: ${breakPoints.laptop}px) {
    width: 900px;
  }
`

export default STestScreen
