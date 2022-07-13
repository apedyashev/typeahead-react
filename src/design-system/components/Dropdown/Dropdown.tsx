import React from 'react'
// components
import { SDropdown } from './Dropdown.styled'

interface DefaultItem {
  id: string | number
  label: string
}
interface DropdownProps<TItem = DefaultItem> {
  open?: boolean
  options: TItem[]
  selectedOptionIndex: number
  renderOption?: (item: TItem) => JSX.Element
  onSelect?: (option: TItem) => void
}
const Dropdown = <TItem,>({
  open,
  options,
  selectedOptionIndex,
  renderOption,
  onSelect,
}: DropdownProps<TItem>) => {
  return (
    <SDropdown open={open}>
      {(!options || !options.length) && <li>No options</li>}
      {options?.map((option, i) => {
        const isOptionSelected = selectedOptionIndex === i
        if (renderOption) {
          return React.cloneElement(renderOption(option), {
            key: (option as unknown as DefaultItem).id,
            onClick: () => onSelect?.(option),
            'aria-selected': isOptionSelected ? 'true' : 'false',
            role: 'option',
            tabIndex: 0,
          })
        } else {
          return (
            <li
              role="option"
              aria-selected={isOptionSelected ? 'true' : 'false'}
              tabIndex={0}
              key={(option as unknown as DefaultItem).id}
              onClick={() => onSelect?.(option)}
              onKeyUp={() => onSelect?.(option)}
            >
              {(option as unknown as DefaultItem).label}
            </li>
          )
        }
      })}
    </SDropdown>
  )
}
export default Dropdown
