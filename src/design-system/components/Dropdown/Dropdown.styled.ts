// libs
import styled from 'styled-components'

export const SDropdown = styled.ul`
  margin: 0;
  border: 1px solid #ccc;

  display: ${({ open }) => (open ? 'block' : 'none')};
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`
