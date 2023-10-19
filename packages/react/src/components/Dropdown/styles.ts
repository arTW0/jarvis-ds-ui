import { styled } from '../../styles'

export const DropdownBox = styled('div', {
  position: 'relative',
  display: 'inline-block',
  fontFamily: '$default',
})

export const DropdownButton = styled('button', {
  display: 'block',
  backgroundColor: '$red400',
  color: '$gray100',
  fontSize: '$xs',
  borderRadius: '$md',
  padding: '$4',
  cursor: 'pointer',
  fontWeight: '$bold',
  border: 'none',
  fontFamily: '$default',
})

export const DropdownContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  textAlign: 'center',
  backgroundColor: '$gray300',
  borderRadius: '$md',
  padding: '$1 $2',
  zIndex: 1,
  boxShadow: '0px $2 $4 0px rgba(0,0,0,0.2)',
  fontSize: '$xs',

  'a': {
    display: 'block',
    color: '$black',
    padding: '$2 $5',
    textDecoration: 'none',
  }
})