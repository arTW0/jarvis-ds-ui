import { styled } from '../../styles'

export const BottomBox = styled('div', {
  minHeight: '$12',
  position: 'fixed',
  width: '70%',
  bottom: 10,
  left: '15%',
  boxShadow: '0px $2 $4 0px rgba(0,0,0,0.2)',
  overflow: 'hidden',
  background: '$gray200',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 $1',
  borderRadius: '$full',
})

export const Item = styled('a', {
  width: '80%',
  height: '$12',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textDecoration: 'none',
})

export const ItemContent = styled('div', {
  padding: '$1',
  fontSize: '$xxs',
  display: 'flex',
  margin: '1px auto $1 auto',
  lineHeight: '$4',
  color: '$red600',
  paddinTop: '$4',
  marginBottom: '$px',

  '.active': {
    borderRadius: '$full',
    backgroundColor: '$red600',
    color: '$white',
    padding: '$2',
  }
})