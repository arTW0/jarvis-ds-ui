import { styled } from '../../styles'

export const CardBox = styled('section', {
  padding: '0 $4',
})

export const CardBlock = styled('div', {
  height: '220px',
  borderRadius: '10px',
  background: '$red400',
  boxShadow: '0 $px $xs 0 rgba(0, 0, 0, 0.09)',
  color: '$white',
  position: 'relative',
})

export const CardMain = styled('div', {
  backgroundImage: 'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.23) 100 %)',
  position: 'absolute',
  borderRadius: '10px',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  display: 'flex',
  alignItems: 'flex-end',
  padding: '$5 $6',
})

export const CardBalance = styled('div', {
  position: 'absolute',
  left: '$6',
  top: '$6',

  '.title': {
    fontWeight: '$bold',
    color: '$white',
    marginTop: '$2',
    fontSize: '$6',
  }
})

export const CardLabel = styled('span', {
  fontSize: '$3',
  letterSpacing: '$px',
  opacity: 0.5,
  lineHeight: '$short',
  marginBottom: '$sm',
  textTransform: 'uppercase',
  display: 'block',
  fontWeight: '$medium',
})

export const CardNumber = styled('div', {
  fontSize: '$md',
  letterSpacing: '$1',
  fontWeight: 500,
})

export const CardBottom = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '$5',
})

export const CardExpiry = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '$5',
})

export const CardCVV = styled('div', {
  fontWeight: '$medium',
  fontSize: '$sm',
})

export const CardButton = styled('div', {
  position: 'absolute',
  right: '10px',
  top: '10px',
})

export const Dropdown = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const DropdownButton = styled('button', {
  display: 'block',
  color: '$white',
  padding: '$2',
  fontSize: '$md',
  cursor: 'pointer',
  fontWeight: '$bold',
  backgroundColor: 'transparent',
  border: 'none',

  '&:hover, &:focus, &:active': {
    backgroundColor: '$red600',
  }
})

export const DropdownContent = styled('button', {
  position: 'absolute',
  left: '-10px',
  minWidth: '$20',
  marginLeft: '-70px',
  background: '$red500',
  borderRadius: '$4',
  boxShadow: '0 $1 $8 rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5.9px)',
  WebkitBackdropFilter: 'blur(5.9px)',
  border: '$px solid rgba(255, 255, 255, 0.3)',

  'a': {
    color: '$white',
    padding: '$3 $4',
    textDecoration: 'none',
    display: 'block',
  },

  'div': {
    display: 'flex',
    alignItems: 'center',

    '.icon': {
      color: '$white',
      marginLeft: '$2',
      fontSize: '$2xl',
    }
  }
})