// libs
import styled from 'styled-components'

const backgroundColors = {
  active: '#ccc',
  inactive: '#fff',
}
export const SDropdown = styled.ul`
  margin: 0;
  padding: 8px 0;
  border: 1px solid #ccc;

  display: ${({ open }) => (open ? 'block' : 'none')};
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;

  max-height: 168px;
  overflow-y: scroll;

  li {
    list-style: none;
    cursor: pointer;
    padding: 8px;
    &:hover {
      background-color: ${backgroundColors.active};
    }
  }
  [aria-selected='true'] {
    background-color: ${backgroundColors.active};
  }
`

export const SOption = styled.li`
  background-color: ${({ isSelected }) =>
    isSelected ? backgroundColors.active : backgroundColors.inactive};
`
