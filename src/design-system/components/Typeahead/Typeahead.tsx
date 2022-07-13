// libs
import { useState, useCallback } from 'react'
// types
import type { FunctionComponent } from 'react'
// components
import { STypeahead } from './Typeahead.styled'
import { Input } from '../Input'
import { Dropdown } from '../Dropdown'

// interface TypeaheadProps {
//   children: JSX.Element[] | JSX.Element
//   onClick: (event: React.SyntheticEvent) => void
// }
const Typeahead: FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsDropdownOpen(true)
  }, [setIsDropdownOpen])

  const handleInputBlur = useCallback(() => {
    setIsDropdownOpen(false)
  }, [setIsDropdownOpen])

  return (
    <STypeahead>
      <Input id="test" label="Your beer" onFocus={handleInputFocus} onBlur={handleInputBlur} />
      <Dropdown open={isDropdownOpen} />
    </STypeahead>
  )
}
export default Typeahead
