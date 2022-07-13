// types
import type { FunctionComponent } from 'react'
// components
import { SInputWrapper } from './Input.styled'

interface InputProps {
  label: string
  id: string
  onFocus?: (event: React.SyntheticEvent) => void
  onBlur?: (event: React.SyntheticEvent) => void
  onChange?: (event: React.SyntheticEvent) => void
  onKeyDown?: (event: React.KeyboardEvent) => void
}
const Input: FunctionComponent<InputProps> = ({ id, label, onFocus, onBlur, onChange }) => {
  return (
    <SInputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        aria-labelledby={id}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      ></input>
    </SInputWrapper>
  )
}
export default Input
