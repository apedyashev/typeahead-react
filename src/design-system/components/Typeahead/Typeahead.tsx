// libs
import { useState, useCallback, useEffect } from 'react'
// types
import type { FunctionComponent } from 'react'
// components
import { STypeahead } from './Typeahead.styled'
import { Input } from '../Input'
import { Dropdown } from '../Dropdown'
// import options from './options'
// hooks
import useKeyPress from 'design-system/hooks/useKeyPress'

const HIDE_DROPDOWN_DELAY = 200
interface TypeaheadProps {
  options: any[]
  onChange?: (event: React.SyntheticEvent) => void
  onSelect?: (option: any) => void
}

const Typeahead: FunctionComponent<TypeaheadProps> = ({ options, onChange, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const arrowUpPressed = useKeyPress('ArrowUp')
  const arrowDownPressed = useKeyPress('ArrowDown')
  const isEnterPressed = useKeyPress('Enter')

  const handleInputFocus = useCallback(() => {
    setIsDropdownOpen(true)
  }, [setIsDropdownOpen])

  const handleInputBlur = useCallback(() => {
    setTimeout(() => {
      setIsDropdownOpen(false)
    }, HIDE_DROPDOWN_DELAY)
  }, [setIsDropdownOpen])

  useEffect(() => {
    if (arrowUpPressed && selectedOptionIndex > 0) {
      setSelectedOptionIndex(selectedOptionIndex - 1)
    }
  }, [arrowUpPressed])

  useEffect(() => {
    if (isEnterPressed && options?.length) {
      handleOptionSelected(options[selectedOptionIndex])
    }
  }, [isEnterPressed])

  useEffect(() => {
    if (arrowDownPressed && selectedOptionIndex < options.length - 1) {
      setSelectedOptionIndex(selectedOptionIndex + 1)
    }
  }, [arrowDownPressed])

  const handleOptionSelected = useCallback(
    (option) => {
      onSelect?.(option)
    },
    [onSelect]
  )

  return (
    <STypeahead>
      <Input
        id="test"
        label="Choose your beer:"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={onChange}
      />
      <Dropdown
        open={isDropdownOpen}
        options={options}
        selectedOptionIndex={selectedOptionIndex}
        renderOption={({ id, name }) => (
          <li key={id}>
            <span>{name}</span>
          </li>
        )}
        onSelect={handleOptionSelected}
      />
    </STypeahead>
  )
}
export default Typeahead
