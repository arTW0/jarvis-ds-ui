import { styled } from '../../styles'

export const BottomBox = styled('div', {
  minHeight: '$12',
  position: 'fixed',
  width: '100vw',
  bottom: 0,
  overflow: 'hidden',
  background: '$gray100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid $red400',
  padding: '0 $1',
  zIndex: 9999,
})

export const Item = styled('a', {
  fontSize: '$2',
  letterSpacing: 0,
  textAlign: 'center',
  width: '80%',
  height: '$12',
  lineHeight: '1.2em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  textDecoration: 'none',
  color: '$gray700',
})

export const ItemContent = styled('div', {
  width: '100%',
  padding: '0 $1',
  textAlign: 'center',

  '.icon': {
    display: 'inline-flex',
    margin: '1px auto $1 auto',
    fontSize: '$6',
    lineHeight: '$4',
    color: '$gray700',
    marginTop: '1px',
    marginBottom: '$1',
  }
})