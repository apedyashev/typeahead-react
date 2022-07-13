// types
import type { FunctionComponent } from 'react'
// components
import { SDropdown } from './Dropdown.styled'

interface DropdownProps {
  open?: boolean
  onSelect?: () => void
}
const Dropdown: FunctionComponent<DropdownProps> = ({ open }) => {
  return (
    <SDropdown open={open}>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </SDropdown>
  )
}
export default Dropdown
