import { styled } from '../../styles'

export const BottomBox = styled('div', {
  minHeight: '$12',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  left: -10,
  overflow: 'hidden',
  background: '$gray300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid $gray400',
  padding: '0 $1',
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
  textDecoration: 'none',
  color: '$gray700',
})

export const ItemContent = styled('div', {
  width: '100%',
  padding: '$1',
  alignItems: 'center',
  fontFamily: '$default',
  fontSize: '$xs',

  '.icon': {
    display: 'flex',
    margin: '1px auto $1 auto',
    fontSize: '$2xl',
    lineHeight: '$4',
    color: '$gray700',
    paddinTop: '$4',
    marginBottom: '$px',
  }
})