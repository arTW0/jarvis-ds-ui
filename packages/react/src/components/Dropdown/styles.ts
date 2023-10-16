import { styled } from '../../styles'

export const DropdownBox = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const DropdownButton = styled('button', {
  display: 'block',
  backgroundColor: '$gray200',
  color: '$white',
  fontSize: '$xs',
  borderRadius: '$4',
  padding: '$4',
  cursor: 'pointer',
  fontWeight: '$bold',
  border: 'none',
})

export const DropdownContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  textAlign: 'center',
  backgroundColor: '$gray200',
  minWidth: '80px',
  borderRadius: '$4',
  padding: '$1 $2',
  zIndex: 1,
  boxShadow: '0px $2 $4 0px rgba(0,0,0,0.2)',

  'a': {
    display: 'block',
    color: '$black',
    padding: '$3 $4',
    textDecoration: 'none',
  }
})